import { useEffect, useState } from "react"

/**
 * @param {*} url algo tipo 'https://jsonplaceholder.typicode.com/posts'
 */
export function useFetch(url) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleFetch() {
    setLoading(true)
    try {
      const response = await (
        await fetch(url)
      ).json()
      console.log(response)
      setData(response.map((post) => {
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

  return {
    data: data,
    loading,
    error,
  }
}

export function useLazyFetch(url) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleFetch() {
    setLoading(true)
    try {
      const response = await (
        await fetch(url)
      ).json()
      console.log(response)
      setData(response.map((post) => {
        return { id: post.id, body: post.body, title: post.title }
      }))
      setError(null)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  return {
    fetch: handleFetch,
    data: data,
    loading,
    error,
  }
}