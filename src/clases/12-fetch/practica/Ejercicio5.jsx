import { useEffect, useState } from 'react'
import Form from './Ejercicio5Form'

function Ejercicio5() {
  const [posts, setPosts] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  

  async function handleFetch() {
    setLoading(true)
    try {
      const response = await (
        await fetch('https://jsonplaceholder.typicode.com/posts')
      ).json()
      console.log(response)
      setPosts(response.map((post) => {
        return { id: post.id, body: post.body, title: post.title }
      }))
      setError(null)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }
  
  useEffect(() => {
    handleFetch()
  }, [])

  async function handleSubmit(value) {
    const response = await (
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: value.title,
          body: value.body,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    ).json()
    console.log(response)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      {loading && <p>Cargando...</p>}
      {error && <p>{error.message}</p>}
      {posts ? <div className='height-limited'>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div> : null}
    </div>
  )
}

export default Ejercicio5
