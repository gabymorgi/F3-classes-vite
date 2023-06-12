import { useState } from 'react'
import data from '@/fakeApi/books.json'
import BookList from './Components/BookList'

const App = () => {
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem('bookFavs') || '[]')
  )

  const addToFavs = (book) => {
    let newFavs
    if (favs.some((fav) => fav.id === book.id)) {
      newFavs = favs.filter((fav) => fav.id !== book.id)
    } else {
      newFavs = [...favs, book]
    }
    setFavs(newFavs)
    localStorage.setItem('bookFavs', JSON.stringify(newFavs))
  }

  return (
    <>
      <h1>Fav books</h1>
      {favs.length > 0 ? <BookList books={favs} /> : undefined}
      <hr />
      <h1>All books</h1>
      <BookList books={data} onClick={addToFavs} />
    </>
  )
}

export default App
