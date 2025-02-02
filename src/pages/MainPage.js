import React from 'react';
import SwiperSlider from "../components/SwiperSlider";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";

const MainPage = () => {
    return (
        <main className="main-content">
            <SwiperSlider />

            <Section1 />

            <Section2 />

            <Section3 />

            <Section4 />
        </main>
    );
};

export default MainPage;