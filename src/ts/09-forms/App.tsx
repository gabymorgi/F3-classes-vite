import { FormEvent, useState } from 'react'

const App = () => {
  const [name, setName] = useState<string>('')
  const [imgUrl, setImgUrl] = useState<string>('')
  const [score, setScore] = useState<number>(0)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name || !imgUrl) {
      console.error('Please fill out all fields')
      return
    }
    const game = {
      name,
      imgUrl,
      score
    }
    console.log(game)
  }

  console.log(name, imgUrl, score)

  return (
    <>
      <h1>Add a new game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='imgUrl'>imgUrl</label>
          <input
            type='text'
            id='imgUrl'
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='score'>Score</label>
          <input
            type='number'
            id='score'
            min={0}
            max={10}
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
          />
        </div>
        <button type='submit'>Add Game</button>
      </form>
    </>
  )
}

export default App
