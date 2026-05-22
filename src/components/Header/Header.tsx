import logoImg from "../../assets/Logo.png";
import "./Header.css";

interface HeaderProps {
  handleSearch: (query: string) => void;
  handleSubmit: () => void;
}

function Header({ handleSearch, handleSubmit }: HeaderProps) {
  return (
    <header className="header">
      <img src={logoImg} alt="Movie Beginner Logo" />
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
    </header>
  );
}

export default Header;
