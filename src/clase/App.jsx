import { useEffect, useState } from "react"
import { useTest } from "./hooks/customHook"
import Detail from "./Detail"
import { useFetch, useLazyFetch } from "./hooks/useFetch"

export default function App() {
  // const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')
  const { data, loading, error, fetch } = useLazyFetch('https://jsonplaceholder.typicode.com/posts')

  console.log("app", data, loading)

  return (
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p>{error.message}</p>}
      {data ? <div className='height-limited'>
        {data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div> : null}
      <button onClick={fetch}>Search</button>
      <Detail />
    </div>
  )
}
