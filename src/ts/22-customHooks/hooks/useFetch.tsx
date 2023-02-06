import { useEffect, useState } from 'react'

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (error: unknown) {
        setError((error as Error).message)
      }
      setLoading(false)
    }
    getData()
  }, [url])

  return { data, loading, error }
}

export const  useLazyFetch = <T,>(url: string) => {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  const getData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    } catch (error: unknown) {
      setError((error as Error).message)
    }
    setLoading(false)
  }

  return { data, loading, error, getData }
}
