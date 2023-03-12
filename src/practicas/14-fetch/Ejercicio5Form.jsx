import { useState } from 'react'

function Form(props) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title || !body) return
    props.onSubmit({ title, body })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Titulo'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder='Contenido'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  )
}

export default Form
