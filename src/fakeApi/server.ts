import accounts from './accounts.json'
import books from './books.json'
import detailedGames from './detailedGames.json'
import gamesData from './games.json'
import movies from './movies.json'
import paises from './paises.json'
import products from './products.json'
import provincias from './provincias.json'
import users from './users.json'

interface Data {
  id: string | number
  [key: string]: any
}

interface EndPoints {
  [key: string] : Data[]
}

const data: EndPoints = {
  books: books,
  games: gamesData,
  detailedGames: detailedGames,
  movies: movies,
  products: products,
  paises: paises,
  provincias: provincias,
  accounts: accounts.map((account: any) => {
    return {
      ...account,
      id: account.account
    }
  }),
  users: users.map((user: any) => {
    return {
      ...user,
      id: user.email
    }
  })
}

export async function fakeFetch(
  url: RequestInfo,
  options: RequestInit = { method: 'GET' }
): Promise<any> {
  if (typeof url === 'string' && url.startsWith('/api')) {
    // wait half a second before responding
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const method = options?.method ?? 'GET';
    const [,, key, id] = url.split('/');

    if (!Object.prototype.hasOwnProperty.call(data, key)) {
      return new Response(null, {
        status: 404,
        statusText: 'Endpoint Not Found',
      });
    }

    switch (method) {
      case 'GET': {
        if (id) {
          const item = data[key].find((item: Data) => item.id === id);

          if (item) {
            return new Response(JSON.stringify(item), {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            });
          } else {
            return new Response(null, {
              status: 404,
              statusText: 'Item Not Found',
            });
          }
        } else {
          return new Response(JSON.stringify(data[key]), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      }

      case 'POST': {
        if (!options || !options.body) {
          return new Response(null, {
            status: 400,
            statusText: 'Bad Request',
          });
        }

        const newItem: Data = {
          id: Date.now(),
          ...JSON.parse(options.body.toString())
        };
        data[key].unshift(newItem);

        return new Response(JSON.stringify(newItem), {
          status: 201,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      case 'PUT': {
        if (!id || !options || !options.body) {
          return new Response(null, {
            status: 400,
            statusText: 'Bad Request',
          });
        }

        const updatedItem: Data = JSON.parse(options.body.toString());
        const index = data[key].findIndex((item: Data) => item.id === id);

        if (index !== -1) {
          data[key][index] = updatedItem;
        } else {
          data[key].unshift(updatedItem);
        }

        return new Response(JSON.stringify(updatedItem), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      case 'DELETE': {
        if (!id) {
          return new Response(null, {
            status: 400,
            statusText: 'Bad Request',
          });
        }

        const index = data[key].findIndex((item: Data) => item.id === id);

        if (index !== -1) {
          const deletedItem = data[key].splice(index, 1)[0];

          return new Response(JSON.stringify(deletedItem), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        } else {
          return new Response(null, {
            status: 404,
            statusText: 'Item Not Found',
          });
        }
      }

      default: {
        return new Response(null, {
          status: 405,
          statusText: 'Method Not Allowed',
        });
      }
    }
  }

  // Si la URL no empieza con "/api", realiza un fetch normal.
  return fetch(url, options);
}
