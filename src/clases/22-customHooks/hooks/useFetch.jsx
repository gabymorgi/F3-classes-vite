import { useEffect, useState } from 'react'
import { fakeFetch } from '@/fakeApi/server'

// este hook nos evita declarar 3 estados y un useEffect
// cada vez que queremos hacer un fetch
export const useFetch = (url) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await fakeFetch(url)
        const data = await response.json()
        setData(data)
      } catch (error) {
        setError(error.message)
      }
      setLoading(false)
    }
    getData()
  }, [url])

  return { data, loading, error }
}

// este hook es como el anterior pero no hace el fetch hasta que se lo pidamos
// es util cuando queremos hacer un fetch solo cuando el usuario hace click en un boton
export const  useLazyFetch = (url) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const getData = async () => {
    setLoading(true)
    try {
      const response = await fakeFetch(url)
      const data = await response.json()
      setData(data)
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }

  return { data, loading, error, getData }
}
