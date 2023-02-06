import GameList from './Components/Gamelist'
import GameDetail from './Components/GameDetail'
import { useEffect, useState } from 'react';
import { GameI } from '../../fakeApi/types';
import NewGameForm from './Components/NewGameForm';

const App = () => {
  const [games, setGames] = useState<GameI[]>([])
  async function fetchGames() {
    const response = await (await fetch('/api/games')).json();
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
