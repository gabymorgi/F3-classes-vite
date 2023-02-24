import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='flex'>
        <Link to='./'>Home</Link>
        <Link to='./shorts'>Shorts</Link>
        <Link to='./suscripciones'>Suscripciones</Link>
        <Link to='./explorar'>Explorar</Link>
      </nav>
    </header>
  )
}

export default Header
