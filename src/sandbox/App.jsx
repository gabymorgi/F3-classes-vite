import { useState } from 'react'
import Timer from './Components/Timer'

const App = () => {
  const [showTimer, setShowTimer] = useState(false)
  const [seconds, setSeconds] = useState(1)

  function toggleTimer() {
    setShowTimer(!showTimer)
  }
  
  return (
    <>
      <button onClick={toggleTimer}>{showTimer ? 'stop': 'start'}</button>
      <select value={seconds} onChange={e => setSeconds(e.target.value)}>
        <option value="1">1 segundo</option>
        <option value="2">2 segundos</option>
        <option value="3">3 segundos</option>
      </select>
      {showTimer && <Timer seconds={seconds} />}
    </>
  )
}

export default App
