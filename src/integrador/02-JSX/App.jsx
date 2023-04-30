import user from '../../fakeApi/ghUser.json'

function App() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src="/hitbug-logo.png" alt="Hitbug" />
        <span>Hitbug</span>
      </div>
      <div className="flex flex-grow justify-end gap-20">
        <span>User Info</span>
        <span>Repos</span>
        <span>Log Out</span>
        <div>
          <span>{user.name}</span>
          <img src={user.avatar_url} alt="Avatar" />
        </div>
      </div>
    </div>
  );
}

export default App;
