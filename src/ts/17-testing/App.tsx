import { useState } from 'react'

interface GameProps {
  game: string
  onStartPlaying?: () => void
}

const Game = (props: GameProps) => {
  const [playing, setPlaying] = useState(false)

  const handleTogglePlaying = () => {
    const isPlaying = !playing
    setPlaying(isPlaying)
    if (isPlaying && props.onStartPlaying) {
      props.onStartPlaying()
    }
  }

  return (
    <div>
      <span>I lost The Game</span>
      <h1>{props.game}</h1>
      <button onClick={handleTogglePlaying}>
        {playing ? 'Detener' : 'Jugar'}
      </button>
    </div>
  )
}

export default Game