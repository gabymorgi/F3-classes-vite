import React from 'react'
import './App.css'
import { TheBag } from './TheBag'

const App = () => {
  const [currentTheme, setCurrentTheme] = React.useState(
    localStorage.getItem('theme') || 'dark'
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

  return (
    <div className={currentTheme}>
      <h1>Local Storage</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <TheBag />
    </div>
  )
}

export default App
