import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

function UserDetailSection(props) {
  console.log(Object.entries(props.user))

  return (
    <section>
      <h2>User Detail Section</h2>
      {Object.keys(props.user).map((key) => (
        <p key={key}>
          <strong>{key}</strong>
        </p>
      ))}
    </section>
  )
}

export default UserDetailSection
