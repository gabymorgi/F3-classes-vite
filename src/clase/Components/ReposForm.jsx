import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const sortOptions = ['created', 'updated', 'pushed', 'full_name']
const directionOptions = ['asc', 'desc']

function ReposForm() {
  const [select, setSelect] = useState()
  const [, setSearchParams] = useSearchParams()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(select)
    setSearchParams({ sort: select, id: 1 })
  }

  return <form onSubmit={handleSubmit} className="flex">
    <select value={select} onChange={(e) => setSelect(e.target.value)}>
      <option value='created'>created</option>
      <option value='updated'>updated</option>
      <option value='pushed'>pushed</option>
      <option value='full_name'>full_name</option>
    </select>
    <button type="submit">Sort!!</button>
  </form>
}

export default ReposForm
