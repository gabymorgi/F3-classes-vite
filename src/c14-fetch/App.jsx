import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RepoDetail } from './components/RepoDetail'
import { Select } from './components/Select'

const App = () => {
  const [repoData, setRepoData] = useState()

  async function handleFetchRepo(repo) {
    const response = await fetch(`https://api.github.com/repos/gabymorgi/${repo}`)
    const repoDataJson = await response.json()

    const responseLanguages = await fetch(repoDataJson.languages_url)
    const languagesJson = await responseLanguages.json()

    console.log(languagesJson)

    setRepoData({
      ...repoDataJson,
      languages: languagesJson
    })
  }

  return (
    <div>
      <Select onChange={handleFetchRepo} />
      {repoData ? <RepoDetail repo={repoData} /> : undefined}
    </div>
  )
}

export default App
