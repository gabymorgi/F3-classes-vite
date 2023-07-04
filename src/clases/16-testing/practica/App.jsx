import { useState } from 'react'

const App = (props) => {
  const [cookies, setCookies] = useState(0)

  return (
    <div>
      <h1>Cookie Clicker</h1>
      <p>{cookies}</p>
      <button onClick={() => setCookies(cookies + 1)}>
        Click me!
      </button>
      <button disabled={cookies < 10} onClick={props.onClick}>
        Ascend
      </button>
    </div>
  )
}

export default App