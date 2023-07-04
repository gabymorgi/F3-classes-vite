import { useState } from 'react'
import Timer from './Components/Timer'

const App = () => {
  const [delay, setDelay] = useState(1000)
  const [showTimer, setShowTimer] = useState(false)

  function toggleTimer() {
    setShowTimer(!showTimer)
  }
  
  return (
    <>
      {/**controlamos que el componente se monte y se desmonte */}
      <button onClick={toggleTimer}>{showTimer ? 'stop': 'start'}</button>
      {/**controlamos que se cambien las props */}
      <select value={delay} onChange={e => setDelay(e.target.value)}>
        <option value={1000}>1s</option>
        <option value={2000}>2s</option>
        <option value={3000}>3s</option>
        <option value={4000}>4s</option>
        <option value={5000}>5s</option>
      </select>
      {showTimer ? <Timer delay={delay} /> : null}
    </>
  )
}

export default App
