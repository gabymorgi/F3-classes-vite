import { useCallback, useEffect, useMemo, useState } from 'react'
import data from '../fakeApi/data.json'

const TestComponent = (props) => {
  const [selected, setSelected] = useState()

  const horasWithMemo = useMemo(
    () => {
      let horasTotales = 0
      for (let j = 0; j < 10000000; j++) {
        for (let i = 0; i < data.length; i++) {
          horasTotales += data[i].playedTime
        }
      }
      return horasTotales
    },
    []
  )

  const juegosConScore = useMemo(
    () => {
      console.log("aqui", selected)
      const scoreThreshold = Number(selected)
      const filteredData = data.filter(
        (juego) => {
          return juego.score >= scoreThreshold
        }
      )
      return filteredData
    },
    [selected]
  )

  useEffect(
    () => {
      console.log("useEffect")
    },
    [props]
  )

  console.log("render")

  return (
    <>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="3">Nota mayor a 3</option>
        <option value="6">Nota mayor a 6</option>
        <option value="9">Nota mayor a 9</option>
      </select>
      <div>{horasWithMemo}</div>
      {juegosConScore.map((juego) => {
        return (
          <div key={juego.id}>
            <div>{juego.name}</div>
            <div>{juego.score}</div>
          </div>
        )
      })}
    </>
  )
}

export default TestComponent
