import "./MovieDetail.css";

function DetailModal() {
  return (
    <div className="detail-modal">
      <div className="modal-header">
        <p>제목</p>
        <button>
          <img></img>닫기 버튼
        </button>
      </div>
      <div className="modal-content">
        <img alt="영화포스터"></img>
        <div className="movie-content">
          <div className="content-header">
            <div className="content-info">
              <p>장르</p>
              <div className="modal-rating">
                <img alt="별"></img>
                <span>1.3</span>
              </div>
              <button>하트</button>
            </div>
          </div>
          <p>상세 내용</p>
          <div className="my-rating">
            <div className="rating-content">
              <p>내 별점</p>
              <div className="stars">
                <button className="star">
                  <img alt="별"></img>
                </button>
                <button className="star">
                  <img alt="별"></img>
                </button>
                <button className="star">
                  <img alt="별"></img>
                </button>
                <button className="star">
                  <img alt="별"></img>
                </button>
                <button className="star">
                  <img alt="별"></img>
                </button>
              </div>
              <p>score</p>
              <p>보통이에욤</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
