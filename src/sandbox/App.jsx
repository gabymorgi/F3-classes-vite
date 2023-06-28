import Card from "./components/Card"
import UserDetailSection from "./components/UserDetailSection"
import UserListSection from "./components/UserListSection"
import ThemeProvider from "./contexts/ThemeContext"
import users from "@/fakeApi/users.json"

const App = () => {
  console.log(users)
  return (
    <>
      <Card />
      <div>
        Footer
      </div>
    </>
  )
}

export default App
