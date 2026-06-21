import Header from "../components/Header/Header";
import MypageContent from "../components/Mypage/Mypage";

interface MypageProps {
  handleSearch: (query: string) => void;
  handleSubmit: () => void;
}

function Mypage({ handleSearch, handleSubmit }: MypageProps) {
  return (
    <>
      <Header handleSearch={handleSearch} handleSubmit={handleSubmit} />
      <MypageContent />
    </>
  );
}

export default Mypage;
