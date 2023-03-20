import { useCallback, useState } from 'react'
import data from '../fakeApi/data.json'
import TestComponent from './TestComponent'

const App = () => {
  const [state, setState] = useState(false)


  function toggle() {
    setState(!state)
  }
  console.log("app")

  const fnMemoized = useCallback(
    () => {
      console.log("fnMemoized")
    },
    []
  )

  const fnNoMemoized = () => {
    console.log("fnNoMemoized")
  }


  return (
    <>
      <TestComponent />
      <button onClick={toggle}>Toggle {state ? "true" : "false"}</button>
    </>
  )
}

export default App
