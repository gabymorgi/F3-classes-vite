import { useContext } from 'react'
import { CountContext } from '../contexts/CountContext'

function ListOfNumbers() {
  const { listNumbers, addToList } = useContext(CountContext)
  console.log('list', listNumbers)
  return (
    <>
      <h1>List Of numbers</h1>
      <ul>
        {listNumbers.map((number) => (
          <li key={number.toString()}>{number}</li>
        ))}
      </ul>
    </>
  )
}

export default ListOfNumbers
