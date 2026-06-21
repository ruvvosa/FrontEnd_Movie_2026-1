import logoImg from "../../assets/Logo.png";
import { Link } from "react-router-dom";

interface HeaderProps {
  handleSearch: (query: string) => void;
  handleSubmit: () => void;
}

function Header({ handleSearch, handleSubmit }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-[32px] py-[8px] border-b-[1px_solid_rgba(255,_255,_255,_0.5)] bg-[#000] [box-shadow:0_4px_8px_rgba(255,_255,_255,_0.2)]">
      <img src={logoImg} alt="Movie Beginner Logo" />
      <div className="flex justify-between items-center gap-[12px]">
        <form
          className="flex justify-between items-center bg-[#fff] w-[320px] h-[44px] rounded-[8px] px-[14px] py-[10px] border-[1px] border-[solid] border-[#d0d5dd] [box-shadow:0px_1px_2px_0px_#1018280d] font-[Inter] font-normal text-[16px] leading-[24px] tracking-[0%]"
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
          <img src="src\assets\My.svg" alt="마이페이지" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
