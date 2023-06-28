import { useState } from "react"

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
]

const App = () => {
  // uso un estado para guardar el tema actual de forma reactiva
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  )
  // local storage solo guarda strings, por eso uso JSON.parse para convertirlo a un array
  const [sequence, setSequence] = useState(
    JSON.parse(localStorage.getItem('sequence') || '[]')
  )

  const toggleTheme = () => {
    if (currentTheme === 'light') {
      // mantengo sincronizado el estado con el localStorage
      setCurrentTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setCurrentTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  const addToSequence = (color) => {
    const newSequence = [...sequence, color]
    setSequence(newSequence)
    // convierto el array a string para guardarlo en el localStorage
    localStorage.setItem('sequence', JSON.stringify(newSequence))
  }

  return (
    <div className={currentTheme}>
      <h1>Local Storage</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <hr />
      <div className='flex'>
        {colors.map((color) => (
          <button key={color} onClick={() => addToSequence(color)}>
            {color}
          </button>
        ))}
      </div>
      {sequence.map((color, i) => (
        <div
          key={i} // warning: not a good key
          style={{ width: '20px', height: '20px', backgroundColor: color, display: 'inline-block' }}
        />
      ))}
    </div>
  )
}

export default App
