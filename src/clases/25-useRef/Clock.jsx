import { useState, useRef, useEffect } from 'react'

const Clock = () => {
  const [playing, setPlaying] = useState(false)
  const [seconds, setSeconds] = useState(0)

  // useRef nos permite guardar un valor sin que se dispare una re-renderización
  // seria como un "let" que no se resetea cuando el componente se re-renderiza
  const intervalRef = useRef(null)

  function handleClick() {
    if (playing) {
      clearInterval(intervalRef.current || undefined)
      setPlaying(false)
    } else {
      setSeconds(0)
      setPlaying(true)

      intervalRef.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1)
      }, 1000)
    }
  }

  useEffect(() => {
    return () => {
      // si el componente se desmonta, limpiamos el intervalo
      clearInterval(intervalRef.current || undefined)
    }
  }, [])

  return (
    <>
      <h1>{seconds}</h1>
      <button onClick={handleClick}>{playing ? 'stop' : 'play'}</button>
    </>
  )
}

export default Clock
