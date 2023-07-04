import user from '@/fakeApi/ghUser.json'

function UserInfo() {
  return (
    <div>
      <img src={user.avatar_url} width='32px' height='32px' alt='Avatar' />
      <span>{user.name}</span>
      <a href={user.html_url} target='_blank' rel='noreferrer'>
        Open on Github
      </a>
      <div>
        <b>Followers:</b> {user.followers}
      </div>
      <div>
        <b>Following:</b> {user.following}
      </div>
      <div>
        <b>Repos:</b> {user.public_repos}
      </div>
      <div>
        <b>Bio:</b> {user.bio || 'No bio'}
      </div>
    </div>
  )
}

export default UserInfo
