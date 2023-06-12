import user from '@/fakeApi/ghUser.json'
import Card from '../UI/Card'
import Info from '../UI/Info'

function UserInfo() {
  return (
    <Card
      title={
        <div>
          <img src={user.avatar_url} width='32px' height='32px' alt='Avatar' />
          <span>{user.name}</span>
        </div>
      }
      footer={
        <a href={user.html_url} target='_blank' rel='noreferrer'>
          Open on Github
        </a>
      }
    >
      <Info label='Followers' value={user.followers} />
      <Info label='Following' value={user.following} />
      <Info label='Repos' value={user.public_repos} />
      <Info label='Bio' value={user.bio || 'No bio'} />
    </Card>
  )
}

export default UserInfo
