import React from 'react'

export default function App(props) {
  const [count, setCount] = React.useState(0)
  return (
    <div data-testid='app'>
      {count * 2}

      <button data-testid='button' onClick={() => setCount(count + 1)}>
        +
      </button>
      <input data-testid='input' defaultValue={3} />
    </div>
  )
}
