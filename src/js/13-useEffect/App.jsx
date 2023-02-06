import { useState } from 'react'
import Timer from './Components/Timer'

const App = () => {
  const [showTimer, setShowTimer] = useState(false)

  function toggleTimer() {
    setShowTimer(!showTimer)
  }
  
  return (
    <>
      <button onClick={toggleTimer}>{showTimer ? 'stop': 'start'}</button>
      {showTimer && <Timer />}
    </>
  )
}

export default App
