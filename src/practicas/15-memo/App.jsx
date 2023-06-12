import { useMemo, useState } from 'react'
import products from '@/fakeApi/products.json'
import books from '@/fakeApi/books.json'

const App = () => {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [number3, setNumber3] = useState(0)
  const [selectedTag, setSelectedTag] = useState("")

  const sum = useMemo(() => {
    console.log("recalculating sum...")
    return number1 + number2
  }, [number1, number2])

  const expensiveProducts = useMemo(() => {
    console.log("recalculating expensiveProducts...")
    return products.filter((prod) => prod.precio > 50)
  }, [])

  const filteredBooks = useMemo(() => {
    console.log("recalculating filteredBooks...", selectedTag)
    return books.filter((book) => book.planeta === selectedTag)
  }, [selectedTag])

  return (
    <>
      <input type="number" value={number1} onChange={(e) => setNumber1(Number(e.target.value))} />
      <input type="number" value={number2} onChange={(e) => setNumber2(Number(e.target.value))} />
      <input type="number" value={number3} onChange={(e) => setNumber3(Number(e.target.value))} />
      <p>La suma es {sum}</p>
      <hr />
      <h1>Expensive Products</h1>
      <div className='flex height-limited'>
        {expensiveProducts.map((prod) => (
          <div className='card' key={prod.id}>
            {prod.nombre}
          </div>
        ))}
      </div>
      <select onChange={(e) => setSelectedTag(e.target.value)}>
        <option value={"Roshar"}>Roshar</option>
        <option value={"Skadrial"}>Skadrial</option>
        <option value={"Nalthis"}>Nalthis</option>
        <option value={"Threnody"}>Threnody</option>
      </select>
      
      <h1>Filtered Books</h1>
      <div className='flex height-limited'>
        {filteredBooks.map((book) => (
          <div className='card' key={book.id}>
            {book.nombre}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
