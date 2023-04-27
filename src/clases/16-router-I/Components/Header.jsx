import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='flex'>
        <Link to='./'>Home</Link>
        <Link to='./chart'>Chart</Link>
        <Link to='./games/create'>Create game</Link>
      </nav>
    </header>
  )
}

export default Header
