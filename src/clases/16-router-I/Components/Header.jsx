import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='flex'>
        {/* Todos los redirects internos deben ser Links */}
        {/* Los externos deben ser <a> */}
        <Link to='./'>Home</Link>
        <Link to='./chart'>Chart</Link>
        <Link to='./games/create'>Create game</Link>
      </nav>
    </header>
  )
}

export default Header
