import logoImg from '../../assets/Logo.png'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <img src={logoImg} alt="Movie Beginner Logo" />
    </header>
  )
}

export default Header
