import { useReducer } from "react"
import { useState } from "react"
import Favs from "./Favs"

const users = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Pedro" },
  { id: 3, name: "Maria" },
  { id: 4, name: "Jose" },
  { id: 5, name: "Luis" },
]

export default function App() {
  function addToLocal(user) {
    console.log("click", user)
    const usersJSON = localStorage.getItem("users") || "[]"
    const usersArray = JSON.parse(usersJSON)
    const existUser = usersArray.some((u) => u.id === user.id)
    // const matchingUsers = usersArray.filter((u) => u.id !== user.id)
    console.log(usersJSON, existUser, usersArray)
    if (existUser) {
      console.log("no agregar")
    } else {
      usersArray.push(user)
      const newUsersJSON = JSON.stringify(usersArray)
      localStorage.setItem("users", newUsersJSON)
      console.log("agregar")
    }
  }

  return (
    <div className="flex-col">
      {users.map((user) => {
        return (
        <div
          className="card"
          key={user.id}
          onClick={() => addToLocal(user)}
        >
          <h2>{user.name}</h2>
        </div>
      )})}
      <hr />
      <Favs />
    </div>
  )
}
