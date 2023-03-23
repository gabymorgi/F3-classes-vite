import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='flex'>
        <Link to='./'>Home</Link>
        <Link to='./info'>Info</Link>
        <Link to='./repos'>Repos</Link>
      </nav>
    </header>
  )
}

export default Header
