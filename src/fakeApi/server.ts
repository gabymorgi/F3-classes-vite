import { createServer, Model, Registry } from 'miragejs'
import { GameI } from './types'
import data from './detailedData.json'
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

export function makeServer() {
  createServer({
    models: {
      game: Model.extend<Partial<GameI>>({} as GameI),
    },

    seeds(server) {
      server.db.loadData({
        games: data,
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/games', (schema) => {
        const games = schema.all('game')
        // returns only name, imgUrl and id
        return games.models.map((game) => {
          const attrs = game.attrs as GameI
          return {
            id: game.id,
            name: attrs.name,
            imgUrl: attrs.imgUrl,
          }
        })
      })

      this.get('/games/:id', (schema, request) => {
        const id = request.params.id
        
        return schema.find('game', id)
      })

      this.post('/games/add', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        console.log(attrs)
        return schema.create('game', attrs)
      })

      this.delete("/games/:id", (schema, request) => {
        const id = request.params.id
      
        return schema.db.games.find(id).destroy()
      })
    },
  })
}
