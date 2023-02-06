import { useState, useRef } from 'react'

const Clock = () => {
  const [playing, setPlaying] = useState<boolean>(false)
  const [seconds, setSeconds] = useState<number>(0)
  const intervalRef = useRef<NodeJS.Timer | null>(null)

  function handleClick() {
    if (playing) {
      clearInterval(intervalRef.current || undefined)
    } else {
      setSeconds(0)
      setPlaying(true)

      intervalRef.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1)
      }, 1000)
    }
  }

  return (
    <>
      <h1>{seconds}</h1>
      <button onClick={handleClick}>{playing ? 'stop' : 'play'}</button>
    </>
  )
}

export default Clock
