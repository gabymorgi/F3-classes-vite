import React from 'react'
import { Item } from './Components/Item'
import { ItemDetail } from './Components/ItemDetail'
import { Lista } from './Components/Lista'
import data from './data.json'

export default function App() {
  const [selectedRepo, setSelectedRepo] = React.useState(null)

  function handleSelectItem(item) {
    setSelectedRepo(item)
  }

  function cleanSelectedRepo() {
    setSelectedRepo(null)
  }

  return (
    <div>
      <ItemDetail key={selectedRepo ? selectedRepo.id : undefined} onClose={cleanSelectedRepo} repo={selectedRepo} />
      <hr />
      <Lista repos={data} handleSelectItem={handleSelectItem} />
    </div>
  )
  /**
   * div
   *   ItemDetail key id-repo-1
   *   hr
   *   lista
   * div
   * 
   * 
   * -----------------
   * 
   *  div
   *   ItemDetail key id-repo-2
   *   hr
   *   lista
   * div
   * 
   * 
   */
}
