import React from 'react'
import { useEffect } from 'react'

/** fetch with then
 * fetch('https://api.github.com/users/gabymorgi/repos')
      .then((response) => {
        console.log("aqui 2")
        response.json().then((json) => {
          console.log(json)
        })
      }).catch((error) => {
        console.log(error)
      })
 */


export const Select = (props) => {
  const [repos, setRepos] = React.useState([])

  useEffect(() => {
    async function getData() {
      console.log('useEffect')
      try {
        const response = await fetch('https://api.github.com/users/gabymorgi/repos')
        const json = await response.json()
        // console.log(json)

        setRepos(json.map((repo) => {
          return repo.name
        }))

      } catch (e) {
        console.error(e)
        // throw new Error('Error')
      }
    }

    getData()
  }, [])

  function handleSelect(event) {
    props.onChange(event.target.value)
  }

  return (
    <div>
      <select onChange={handleSelect}>
        {repos.map((repo) => (
          <option key={repo} value={repo}>{repo}</option>
        ))}
      </select>
    </div>
  )
}