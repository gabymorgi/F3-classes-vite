import { useState } from 'react'

const App = () => {
  const [input, setInput] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  function mensaje(e) {
    e.preventDefault()
    console.log('presionamos')
    setIsComplete(true)
  }

  function handlerInput(e) {
    console.log(e.target.value)
    setInput(e.target.value)
  }
  return (
    <>
      <form onSubmit={mensaje}>
        <label htmlFor='numero'>NUMERO</label>
        <input type='number' name='' id='numero' onChange={handlerInput} />
        <button type='submit'>Submit</button>
      </form>
      {isComplete ? <p>{input}</p> : undefined}
    </>
  )
}

export default App
