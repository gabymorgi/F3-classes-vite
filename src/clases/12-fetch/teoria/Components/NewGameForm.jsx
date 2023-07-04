import { useState } from 'react'
import { fakeFetch } from '@/fakeApi/server'

const NewGameForm = (props) => {
  const [name, setName] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [score, setScore] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const game = {
      name,
      imgUrl,
    }
    await fakeFetch('/api/games/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    })
    props.onFinish()
  }

  console.log(name, imgUrl, score)

  return (
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
          onChange={(e) => setScore(e.target.value)}
        />
      </div>
      <button type='submit'>Add Game</button>
    </form>
  )
}

export default NewGameForm
