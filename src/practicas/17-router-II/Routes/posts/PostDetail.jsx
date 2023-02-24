import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function PostDetail() {
  const [post, setPost] = useState()
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    //https://jsonplaceholder.typicode.com/posts
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      const data = await response.json()
      setPost(data)
    }
    fetchData()
  }, [])

  function handleGoBack() {
    navigate(-1)
  }

  if (!post) {
    return <div>Loading...</div>
  }
  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={handleGoBack}>Volver</button>
    </div>
  )
}

export default PostDetail
