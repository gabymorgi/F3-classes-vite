import React from 'react'
import Color from './Color'
import { Timer } from './Timer'

const colors = [
  'RED',
  'BLUE',
  'YELLOW',
  'GREEN',
  'ORANGE',
  'MAGENTA',
  'BROWN',
  'LIME',
]

const App = () => {
  const [show, setShow] = React.useState(false)
  const [item, setItem] = React.useState(colors[0])

  const shuffle = () => {
    setItem(colors[Math.floor(Math.random() * colors.length)])
  }

  return (
    <div>
      {<button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>}
      <hr />
      {/* {show ? <Color selectedColor={item} /> : undefined} */}
      <hr />
      {show ? <Timer /> : undefined}
      <button onClick={shuffle}>Set new Color</button>
    </div>
  )
}

export default App
