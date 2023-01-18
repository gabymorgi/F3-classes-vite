import { useState } from 'react'

const Checkout = () => {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)

  function handleNameChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setName(event.target.value)
  }

  function handleAgeChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setAge(Number(event.target.value))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (age < 18) {
      alert('You are not allowed to buy this game')
      return
    }
    alert('Thank you for your purchase')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor='age'>Age</label>
        <input
          type='number'
          id='age'
          min={0}
          max={100}
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <button type='submit'>Buy</button>
    </form>
  )
}

export default Checkout
