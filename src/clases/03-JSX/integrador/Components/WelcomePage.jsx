import user from '@/fakeApi/ghUser.json'

function WelcomePage() {
  return (
    <div>
      <div>Welcome</div>
      <div className='username'>{user.name}</div>
    </div>
  )
}

export default WelcomePage
