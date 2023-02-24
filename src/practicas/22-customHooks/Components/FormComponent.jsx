import { useState } from 'react'

const FormComponent = ({ setSquare }) => {
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)
  return (
    <div>
      <div>
        <label>posX</label>
        <input
          type='number'
          value={posX}
          onChange={(e) => setPosX(e.target.value)}
        />
      </div>
      <div>
        <label>posY</label>
        <input
          type='number'
          value={posY}
          onChange={(e) => setPosY(e.target.value)}
        />
      </div>
      <div>
        <label>width</label>
        <input
          type='number'
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div>
        <label>height</label>
        <input
          type='number'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button
        onClick={() => setSquare({ posX, posY, width, height })}
      >
        Set Square
      </button>
    </div>
  )
}

export default FormComponent
