import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import RepoDetail from "./Components/RepoDetail";
import UserInfo from "./Components/UserInfo";
import WelcomePage from "./Components/WelcomePage";

function App() {
  return (
    <>
      <Navbar />
      <hr />
      <Login />
      <hr />
      <WelcomePage />
      <hr />
      <UserInfo />
      <hr />
      <RepoDetail />
    </>
  )
}

export default App
