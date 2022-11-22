import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const List = () => {
  const [repos, setRepos] = React.useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getData() {
      console.log('useEffect')
      try {
        const response = await fetch('https://api.github.com/users/gabymorgi/repos')
        const json = await response.json()
        // console.log(json)

        setRepos(json.map((repo) => {
          return {
            id: repo.id,
            name: repo.name,
          }
        }))

      } catch (e) {
        console.error(e)
        // throw new Error('Error')
      }
    }

    getData()
  }, [])

  function handleClick(repoId) {
    navigate(`./${repoId}`)
  }

  return (
    <div className='flex-column'>
      {repos.map((repo) => (
        <div key={repo} className="flex">
          <span>{repo.name}</span>
          <button onClick={() => handleClick(repo.id)}>see detail</button>
        </div>
      ))}
    </div>
  )
}