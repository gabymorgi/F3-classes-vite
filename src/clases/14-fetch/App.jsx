import GameList from './Components/Gamelist'
import GameDetail from './Components/GameDetail'
import { useEffect, useState } from 'react';
import NewGameForm from './Components/NewGameForm';
import { fakeFetch } from '@/fakeApi/server';

const App = () => {
  const [games, setGames] = useState([])
  async function fetchGames() {
    // fakeFetch es simplemente un wrapper de fetch
    // que simula un delay de medio segundo y trae datos locales
    const response = await (await fakeFetch('/api/games')).json();
    setGames(response);
  }
  useEffect(() => {
    fetchGames();
  }, []);
  return (
    <>
      <NewGameForm onFinish={fetchGames} />
      <hr />
      <GameDetail />
      <hr />
      <h1>Games</h1>
      <GameList games={games} />
    </>
  )
}

export default App
