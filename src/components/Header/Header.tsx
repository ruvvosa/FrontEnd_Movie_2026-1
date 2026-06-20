import logoImg from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  handleSearch: (query: string) => void;
  handleSubmit: () => void;
}

function Header({ handleSearch, handleSubmit }: HeaderProps) {
  return (
    <header className="header">
      <img src={logoImg} alt="Movie Beginner Logo" />
      <div className="header-right">

      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          placeholder="검색"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button type="submit">
          <img src="src\assets\Search.svg" alt="검색" />
        </button>
      </form>
      <Link className="my-page" to="/mypage">
          <img  src="src\assets\My.svg" alt="마이페이지" />
      </Link>
      </div>

    </header>
  );
}

export default Header;
