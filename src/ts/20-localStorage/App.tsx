import React from 'react'
import './App.css'

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
  const [currentTheme, setCurrentTheme] = React.useState(
    localStorage.getItem('theme') || 'dark'
  )
  const [sequence, setSequence] = React.useState<string[]>(
    JSON.parse(localStorage.getItem('sequence') || '[]')
  )

  const toggleTheme = () => {
    if (currentTheme === 'light') {
      setCurrentTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setCurrentTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  const addToSequence = (color: string) => {
    const newSequence = [...sequence, color]
    setSequence(newSequence)
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
    </div>
  )
}

export default App
