import React from "react";
import { Link } from "react-router-dom";
import "../styles/applyPage.css";

const ApplyPage = () => {
    // 상단 배너 인라인 스타일
    const bannerStyle = {
        background: "url('/files/attach/images/106/0e1b3587a1741f541b78bbd83d40e0c5.jpg') no-repeat center center",
        backgroundSize: "cover",
        height: "400px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        width: "94vw", // 전체 너비보다 조금 줄임
        marginLeft: "calc(50% - 47vw)", // 95vw의 절반은 47.5vw: 중앙 정렬 효과 적용
    };

    const optionBoxStyle = {
        background: "url('/files/attach/images/sub/apply_bg.jpg') no-repeat center center",
        backgroundSize: "cover",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        height: "650px",
        margin: "30px 0", // 위아래 간격 추가
    };

    return (
        <div className="applyPageContainer">
            <div className="applyBanner" style={bannerStyle}>
                <div className="applyBannerContent">
                    <h1 className="applyBannerTitle">수거신청</h1>
                    <div className="applyUnderline"></div>
                </div>
            </div>

            <div className="applyOptionsContainer">
                {/* 대면 수거 신청 옵션 */}
                <div className="applyOptionBox" style={optionBoxStyle}>
                    <h2 className="applyOptionTitle">대면 수거 신청</h2>
                    <div className="applyOptionSection">
                        <h3 className="applyOptionSectionTitle">대면 수거란?</h3>
                        <p className="applyOptionDesc">
                            대면으로 수거 신청 해주시면 원하시는 날짜에 업체 기사님께서 가정에 직접 방문하여
                            버릴 물건들 포장 및 수거까지 도와드립니다.
                        </p>
                    </div>
                    <div className="applyOptionRecommendation">
                        <div className="applyOptionRecWrapper">
                            <p className="applyOptionRecTitle">이런 분들께 추천 드립니다!</p>
                            <ul className="applyOptionRecList">
                                <li>버릴 물건이 많아 혼자서 포장이 힘드신 분들</li>
                                <li>비닐, 박스 등 포장 제품이 구비가 안되신 분들</li>
                                <li>수거 전 날 기사님과 원활히 시간 조정 가능 하신 분들</li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/apply1" className="applyOptionBtn">
                        대면 수거 신청하기
                    </Link>
                </div>

                {/* 비대면 수거 신청 옵션 */}
                <div className="applyOptionBox" style={optionBoxStyle}>
                    <h2 className="applyOptionTitle">비대면 수거 신청</h2>
                    <div className="applyOptionSection">
                        <h3 className="applyOptionSectionTitle">비대면 수거란?</h3>
                        <p className="applyOptionDesc">
                            비대면으로 수거 신청 해주시면 원하시는 날짜에 맞게 포장하여 문 밖에 내 놓아주시면 기사님께서
                            문 앞에 놓인 물건을 수거 후 무게 사진 전송 및 송금하는 방식입니다.
                        </p>
                    </div>
                    <div className="applyOptionRecommendation">
                        <div className="applyOptionRecWrapper">
                            <p className="applyOptionRecTitle">이런 분들께 추천 드립니다!</p>
                            <ul className="applyOptionRecList">
                                <li>혼자서 포장 가능 하신 분들</li>
                                <li>수거 전 날 기사님과 시간 조정이 어려우신 분들</li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/apply2" className="applyOptionBtn">
                        비대면 수거 신청하기
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ApplyPage;