import { useMemo, useState } from 'react'
import { autoId, filter, sort } from './utils'
import data from './data.json'

export interface GameI {
  id: string
  name: string
  playedTime: number | null
  imgUrl: string
  tags: Array<string>
  score: number
  achievements?: Array<{
    id: string
    unlocktime: string | null
    name: string
    description: string | null
  }> | null
}

export function getGameById(id: string) {
  return data.find((game) => game.id === id)
}

export interface FiltersI {
  name?: string
  tags?: string[]
}

export interface SorterI {
  by: 'name' | 'time' | 'score'
  direction: 'asc' | 'desc'
}

export interface variablesI {
  filters?: FiltersI
  skip?: number
  first?: number
  sorter?: SorterI
}

export function useFakeApi(initialFilter?: string) {
  const [variables, setVariables] = useState<string | undefined>(initialFilter)
  const [games, setGames] = useState<GameI[]>(data)
  const [loading, setLoading] = useState(false)

  const createGame = async (game: Partial<GameI>) => {
    const id = autoId()
    setGames([
      {
        id: id,
        name: game.name || 'New Game',
        playedTime: game.playedTime || 0,
        achievements: game.achievements || [],
        score: game.score || 0,
        tags: game.tags || [],
        imgUrl: game.imgUrl || `http://placekitten.com/200/200?image=${Math.floor(Math.random() * 16)}`,
      },
      ...games,
    ])
    return id
  }

  const updateGame = async (gameId: string, game: GameI) => {
    const actualGame = games.find((g) => g.id === gameId)
    setGames([
      {
        ...actualGame,
        ...game,
      },
      ...games.filter((g) => g.id !== gameId),
    ])
  }

  const deleteGame = async (gameId: string) => {
    setGames([...games.filter((g) => g.id !== gameId)])
  }

  const filteredGames = useMemo(() => {
    if (!games) return undefined
    let data = games
    if (variables) {
      data = data.filter((game) => {
        return game.tags.includes(variables)
      })
    }

    return data
  }, [games, variables])

  return [
    filteredGames,
    {
      fullGames: games,
      loading,
      refetch: setVariables,
      createGame,
      updateGame,
      deleteGame,
    },
  ]
}
