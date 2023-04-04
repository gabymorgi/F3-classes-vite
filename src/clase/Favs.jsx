import { useState } from "react"

function Favs() {
  // const usersJSON = localStorage.getItem("users") || "[]"
  // const usersArray = JSON.parse(localStorage.getItem("users") || "[]")
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users") || "[]"))

  function deleteToLocal(user) {
    const existUser = users.some((u) => u.id === user.id)
    if (existUser) {
      console.log("eliminar")
      const newUsers = users.filter((u) => u.id !== user.id)
      setUsers(newUsers)
      localStorage.setItem("users", JSON.stringify(newUsers))
    } else {
      console.log("no eliminar")
    }
  }

  return (
    <div className="flex-col">
      {users.map((user) => {
        return (
          <div className="card" key={user.id} onClick={() => deleteToLocal(user)}>
            <h2>{user.name}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Favs
