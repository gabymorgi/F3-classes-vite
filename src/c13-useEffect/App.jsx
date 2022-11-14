import React from 'react'
import Color from './Color'

const colors = ["RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "MAGENTA", "BROWN", "LIME"]

const App = () => {
  const [item, setItem] = React.useState(colors[0])
  const [show, setShow] = React.useState(false)

  const shuffle = () => {
    setItem(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div>
      {<button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>}
      {show ? <Color selectedColor={item} /> : undefined}
      <button onClick={shuffle}>Set new Color</button>
    </div>
  )
}

export default App
