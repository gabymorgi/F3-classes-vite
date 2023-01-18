import { message } from "antd"
import React from "react"

export function useQuery(url) {
  // const [data, setData] = React.useState(null)
  // const [loading, setLoading] = React.useState(false)
  // const [error, setError] = React.useState(false)
  const [allData, setAllData] = React.useState({
    data: null,
    loading: false,
    error: false,
  })

  React.useEffect(() => {
    const getData = async () => {
      setAllData({ ...allData, loading: true })
      try {
        const data = await (await fetch(url)).json()
        setAllData({ loading: false, data, error: false })
      } catch (error) {
        setAllData({ loading: false, data: null, error: true })
        //alert like
        message.error(error.message)
      }
    }

    getData()
  }, [])

  return allData
}