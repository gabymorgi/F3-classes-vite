import { useEffect, useState } from 'react'
import Card from '../ui/Card'

const UserInfo = () => {
  const [info, setInfo] = useState()
  async function getGithubData(username) {
    try {
      const response = await (await fetch(
        `https://api.github.com/users/${username}`
      )).json()
      console.log(response)
      setInfo(response)
    } catch (e) {
      console.error(e.message)
    }
  }

  useEffect(() => {
    getGithubData('gabymorgi')
  }, [])

  if (!info) return <div>No info</div>

  return (
    <Card
      title={
        <div className='flex items-center gap-10'>
          <img
            src={info.avatar_url}
            width='32px'
            height='32px'
            alt='Avatar'
          />
          <span>{info.name}</span>
        </div>
      }
    >
      <div className='flex'>
        <div>
          <h4>Followers</h4>
          <p>{info.followers}</p>
        </div>
        <div>
          <h4>Following</h4>
          <p>{info.following}</p>
        </div>
        <div>
          <h4>Repos</h4>
          <p>{info.public_repos}</p>
        </div>
      </div>
      <h4>Bio</h4>
      <p>{info.bio || 'No bio'}</p>
    </Card>
  )
}

export default UserInfo
