import { GameI } from './types'
import gamesData from './data.json'
import detailedGames from './detailedData.json'

interface FetchOptions {
  method?: 'GET' | 'POST' | 'DELETE'
  body?: string
}

export async function fakeFetch(
  url: string,
  options: FetchOptions = { method: 'GET' }
): Promise<any> {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  await delay(500) // Agrega un retraso de 1 segundo

  const [_, api, route, params] = url.split('/')

  const responseBody = (() => {
    switch (route) {
      case 'games':
        if (options.method === 'GET') {
          if (!params) {
            // /api/games
            // Retorna solo "name", "imgUrl" e "id"
            return gamesData.map((game) => ({
              id: game.id,
              name: game.name,
              imgUrl: game.imgUrl,
            }))
          } else {
            // /api/games/:id
            const gameId = params
            return detailedGames.find((game) => game.id === gameId)
          }
        } else if (options.method === 'POST' && params === 'add') {
          // /api/games/add
          const newGame: GameI = JSON.parse(options.body as string)
          gamesData.push(newGame)
          return newGame
        } else if (options.method === 'DELETE') {
          // /api/games/:id
          const gameId = params
          const index = gamesData.findIndex(
            (game) => game.id === gameId
          )
          if (index > -1) {
            gamesData.splice(index, 1)
            return { message: 'Game deleted successfully' }
          } else {
            throw new Error('Game not found')
          }
        }
        break
      default:
        throw new Error('Invalid API route')
    }
  })()

  return {
    json: async () => responseBody,
  }
}
