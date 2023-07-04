import { useRef, useState } from 'react'
import BigSection from './BigSection'

const App = () => {
  const ref = useRef(null)
  const clickAmount = useRef(0)
  const [signed, setSigned] = useState(false)

  function goToSign() {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function handleSign() {
    clickAmount.current++
    if (clickAmount.current === 3) {
      console.log('Firmado')
      setSigned(true)
    }
  }

  return (
    <>
      <h1>Condiciones de uso</h1>
      <button onClick={goToSign}>Ir a firmar</button>
      <BigSection />
      <BigSection />
      <BigSection />
      <BigSection />
      {signed ? (
        'FIRMDOOOOO!!!'
      ) : (
        <button ref={ref} onClick={handleSign}>
          Firmar
        </button>
      )}
    </>
  )
}

export default App
