import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RepoDetail = () => {
  const [repo, setRepo] = useState()
  const param = useParams()

  console.log(param)

  useEffect(() => {
    const search = async () => {
      try {
        const response = await (
          await fetch(`https://api.github.com/repos/gabymorgi/${param.repoName}`)
        ).json()
        console.log('response', response)
        setRepo(response)
      } catch (e) {
        console.error(e.message)
      }
    }
    search()
  }, [])

  if (!repo) return <div>No repo Detail</div>
  return (
    <div className='flex-col'>
      <div className='flex'>
        <div>
          <h4>Name</h4>
          <p>{repo.name} </p>
        </div>
        <div>
          <h4>Created At</h4>
          <p>{repo.created_at}</p>
        </div>
        <div>
          <h4>Updated At</h4>
          <p>{repo.updated_at}</p>
        </div>
        <div>
          <h4>Pushed At</h4>
          <p>{repo.pushed_at}</p>
        </div>
      </div>
      <div>
        <h4>Description</h4>
        <p>{repo.description}</p>
      </div>
      <div className='flex'>
        <div>
          <h4>Watchers</h4>
          <p>{repo.watchers}</p>
        </div>
        <div>
          <h4>Forks</h4>
          <p>{repo.forks}</p>
        </div>
        <div>
          <h4>Stars</h4>
          <p>{repo.stargazers_count}</p>
        </div>
      </div>
    </div>
  )
}

export default RepoDetail
