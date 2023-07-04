import { useEffect, useState } from 'react'

function Ejercicio1() {
  const [title, setTitle] = useState('')

  async function handleFetch() {
    const response = await (
      await fetch('https://jsonplaceholder.typicode.com/posts/1')
    ).json()
    setTitle(response.title)
  }
  
  useEffect(() => {
    handleFetch()
  }, [])
  return (
    <div>
      {title}
    </div>
  )
}

export default Ejercicio1
