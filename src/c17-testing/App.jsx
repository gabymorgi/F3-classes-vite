import React from 'react'

export default function App(props) {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <span>App</span>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>
        click me
      </button>
    </div>
  )
}
