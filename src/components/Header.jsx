import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">D&D MonsterDex</Link>

      <nav>
        <Link to="/">Monstros</Link>
        <Link to="/about">Sobre</Link>
      </nav>
    </header>
  )
}

export default Header