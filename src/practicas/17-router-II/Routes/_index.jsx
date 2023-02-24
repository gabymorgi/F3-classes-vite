import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Index() {
  const [post, setPost] = useState([])

  useEffect(() => {
    //https://jsonplaceholder.typicode.com/posts
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPost(data)
    }
    fetchData()
  }, [])
  return (
    <div className="flex-column">
      <h1>Index</h1>
      {post.map((post) => (
        <div className="card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`./posts/${post.id}`}>Ver post</Link>
        </div>
      ))}
    </div>
  )
}

export default Index
