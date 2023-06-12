import user from '@/fakeApi/ghUser.json'

function Navbar() {
  return (
    <header>
      <div>
        <img src="/hitbug-logo.png" alt="Hitbug" />
        <span>Hitbug</span>
      </div>
      <div>
        <span>User Info</span>
        <span>Repos</span>
        <span>Log Out</span>
        <div>
          <span>{user.name}</span>
          <img src={user.avatar_url} alt="Avatar" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
