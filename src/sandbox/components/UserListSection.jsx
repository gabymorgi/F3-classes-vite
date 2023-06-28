import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

function UserListSection(props) {
  const theme = useContext(ThemeContext)

  console.log(theme)
  return (
    <section className={theme.value}>
      <h2>User List Section</h2>
      {props.list.map((user) => (
        <div key={user.email}>
          <h3>{user.apodo}</h3>
          <p>{user.email}</p>
        </div>
      ))}
      <button onClick={() => theme.changeValue()}>cambiar</button>
    </section>
  )
}

export default UserListSection
