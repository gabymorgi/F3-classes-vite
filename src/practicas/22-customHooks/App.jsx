import FormComponent from "./Components/FormComponent"
import { useSquare } from "./hooks/useSquare"

const App = () => {
  const [square, setSquare, { perimeter, area, isSquare }] = useSquare({
    posX: 0,
    posY: 0,
    width: 100,
    height: 100
  })
  return (
    <div>
      <FormComponent setSquare={setSquare} />
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          zIndex: 1,
          top: `${square.posY}px`,
          left: `${square.posX}px`,
          width: `${square.width}px`,
          height: `${square.height}px`,
          border: '10px solid green',
          backgroundColor: 'red'
        }}>
          <div>Perimeter: {perimeter}</div>
          <div>Area: {area}</div>
          <div>Is Square: {isSquare ? 'Yes' : 'No'}</div>
        </div>
      </div>
    </div>
  )
}

export default App
