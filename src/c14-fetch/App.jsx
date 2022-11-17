import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RepoDetail } from './components/RepoDetail'
import { Select } from './components/Select'

const App = () => {
  const [repoData, setRepoData] = useState()

  async function handleFetchRepo(repo) {
    console.log("app", repo)

    const response = await fetch(`https://api.github.com/repos/gabymorgi/${repo}`)
    const repoDataJson = await response.json()

    const responseLanguajes = await fetch(repoDataJson.languages_url)
    const languajesJson = await responseLanguajes.json()

    console.log(languajesJson)

    setRepoData({
      ...repoDataJson,
      languajes: languajesJson
    })
  }

  console.log(repoData)

  return (
    <div>
      <Select onChange={handleFetchRepo} />
      <RepoDetail repo={repoData} />
    </div>
  )
}

export default App
