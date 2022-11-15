import { Card, Select, Statistic } from 'antd'
import React from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'

const names = [
  'BotsTruco',
  'F3-classes-vite',
  'gameoflife',
  'games',
  'jsproyect',
  'MinesWeeper',
  'Minimax',
  'spirograph',
  'TaintedCainCrafter',
  'testYourGrid',
  'TrucoBotWars',
]

const App = () => {
  const [selectedName, setSelectedName] = React.useState(names[0])
  const [repo, setRepo] = React.useState()

  const getData = useCallback(async () => {
    const data = await fetch(
      `https://api.github.com/repos/gabymorgi/${selectedName}`
    )
    const repo = await data.json()
    console.log(repo)
    const languages = await fetch(repo.languages_url)
    const jsonLanguages = await languages.json()
    console.log(jsonLanguages)

    setRepo({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      fork: repo.fork,
      html_url: repo.html_url,
      created_at: repo.created_at,
      language: jsonLanguages,
    })
  }, [selectedName])

  useEffect(() => {
    getData()
  }, [getData])

  const parsedLanguages = useMemo(() => {
    if (!repo) return []
    const total = Object.values(repo.language).reduce(
      (acc, value) => acc + value,
      0
    )
    return Object.entries(repo.language).map(([key, value]) => ({
      key,
      value,
      percentage: (value / total) * 100,
    }))
  }, [repo])

  if (!repo) {
    return <div>Loading...</div>
  }

  console.log(repo)

  return (
    <div>
      <Card title={repo.name}>
        <Statistic title='Description' value={repo.description} />
        {Object.entries(repo.language).map(([key, value]) => (
          <Statistic key={key} title={key} value={value} />
        ))}
        {parsedLanguages.map((language) => (
          <Statistic
            key={language.key}
            title={language.key}
            value={language.percentage}
          />
        ))}
        <Select
          onChange={(value) => setSelectedName(value)}
          style={{ width: '100px' }}
          defaultValue={selectedName}
        >
          {names.map((name) => (
            <Select.Option key={name} value={name}>
              {name}
            </Select.Option>
          ))}
        </Select>
      </Card>
    </div>
  )
}

export default App
