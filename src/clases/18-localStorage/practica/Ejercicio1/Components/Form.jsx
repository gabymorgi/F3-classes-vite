import { useState } from 'react'

function Form() {
  const [yearOfBirth, setYearOfBirth] = useState(
    localStorage.getItem('yearOfBirth') || ''
  )

  const handleYearOfBirthChange = (event) => {
    setYearOfBirth(event.target.value)
    localStorage.setItem('yearOfBirth', event.target.value)
  }

  return (
    <label>
      Año de nacimiento:
      <input
        type='number'
        value={yearOfBirth}
        onChange={handleYearOfBirthChange}
      />
    </label>
  )
}

export default Form
