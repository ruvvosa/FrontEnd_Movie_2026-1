import "./MovieDetail.css";
import closeIcon from "../../assets/closeBtn.svg";
import sampleMoive from "../../assets/sample.png";
import starIcon from "../../assets/star-icon.svg";
import heartIcon from "../../assets/heart.svg";

function DetailModal() {
  return (
    <div className="detail-modal">
      <div className="modal-header">
        <p>해리 포터 20주년: 리턴 투 호그와트</p>
        <button>
          <img src={closeIcon} alt="닫기 버튼" />
        </button>
      </div>
      <div className="modal-content">
        <img src={sampleMoive} alt="영화포스터"></img>
        <div className="movie-content">
          <div className="content-header">
            <div className="content-info">
              <p>액션, 코미디, 범죄</p>
              <div className="modal-rating">
                <img src={starIcon} alt="별"></img>
                <span>1.3</span>
              </div>
            </div>
            <button>
              <img src={heartIcon} alt="하트" />
            </button>
          </div>
          <p>
            해리 포터 영화 시리즈가 다룬 주제들을 챕터로 나누어 다루었으며,
            배우들의 영화 촬영장에서의 에피소드들과 감독들의 설명이 이어졌다.
            DVD 코멘터리와 비슷한 구성이지만, 영화에 참여하기까지의 일련의
            오디션 과정과 시리즈가 끝난 후의 배우들의 커리어 등에 대해서
            광범위하게 다루고 있다. 또한 세상을 떠난 배우들에 대한 기억들을
            회상하는 시간도 가졌다.
          </p>
          <div className="my-rating">
            <div className="rating-content">
              <p>내 별점</p>
              <div className="stars">
                <img className="star" src={starIcon} alt="별"></img>

                <img className="star" src={starIcon} alt="별"></img>

                <img className="star" src={starIcon} alt="별"></img>

                <img className="star" src={starIcon} alt="별"></img>

                <img className="star" src={starIcon} alt="별"></img>
              </div>

              <span>6</span>
              <p>보통이에요</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
