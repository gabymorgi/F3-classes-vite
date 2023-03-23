import { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import Card from '../ui/Card'
import ReposForm from '../Components/ReposForm'
import { Link, useSearchParams } from 'react-router-dom'

const ReposList = () => {
  const [repos, setRepos] = useState()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const search = async () => {
      const sort = searchParams.get("sort")
      console.log(searchParams.get("sort"))
      try {
        console.log('search')
        const response =
          await fetch(
            `https://api.github.com/users/gabymorgi/repos?sort=${sort}&direction=asc`
          )
        console.log('response', response)
        const data = await response.json()
        console.log('data', data)
        setRepos(data)
      } catch (e) {
        console.error(e.message)
      }
    }
    search()
  }, [searchParams])

  if (!repos) return <div>No repos</div>

  return (
    <div className='flex flex-col gap-20'>
      <ReposForm />
      <Row gutter={[24, 24]}>
        {repos.map((repo) => (
          <Col span={12} key={repo.id}>
            <Card title={repo.name}>
              <div className='flex'>
                <div className='flex-col'>
                  <h4>Language</h4>
                  <p>{repo.language}</p>
                </div>
                <div className='flex-col'>
                  <h4>Stars</h4>
                  <p>{repo.stargazers_count}</p>
                </div>
                <div className='flex-col'>
                  <h4>Watchers</h4>
                  <p>{repo.watchers}</p>
                </div>
              </div>
              <div>
                <h4>Description</h4>
                <p>{repo.description || 'No description'}</p>
              </div>
              <Link to={`./${repo.name}`}>See Details</Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ReposList
