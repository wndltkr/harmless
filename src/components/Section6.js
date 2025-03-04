import React from "react";
import "../styles/section6.css";

const Section6 = () => {
    const containerStyle = {
        background: `url(${process.env.PUBLIC_URL}/files/attach/images/sub/about_img.jpg) no-repeat center center`,
        backgroundSize: "cover",
        padding: "60px 0",
        textAlign: "left",
        display: "flex",
        justifyContent: "center"
    };

    return (
        <div className="section6-container" style={containerStyle}>
            <div className="section6-content">
                <h3>
                    저희 무해는 <br />
                    <span className="highlight">고객님들의 편의와 환경을</span> <br />
                    <span className="highlight">같이</span> <b>지켜 나아가겠습니다.</b>
                </h3>
                <div className="button-container">
                    <a href="/apply" className="apply-button">수거 신청하기</a>
                </div>
            </div>
        </div>
    );
};

export default Section6;