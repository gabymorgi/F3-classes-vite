const BookList = (props) => {
  return (
    <div className='flex'>
      {props.books.map((book) => {
        return (
          <div
            key={book.id}
            className='card'
            onClick={() => props.onClick?.(book)}
          >
            {book.nombre}
          </div>
        )
      })}
    </div>
  )
}

export default BookList
