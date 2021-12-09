import React from 'react';
// 메인화면 섹션들
import {CusInfo, MainSection, VisualSection} from "./section";
import {Footer, Header, TalkFloat} from "../../common";
import {NoticePopup} from "../../popup";
// 메인화면 팝업창들

const LandingPage = () => {
    return (
        <React.Fragment>
            <div>
                <Header/>
                <div>
                    <VisualSection/>
                    <CusInfo/>
                    <MainSection/>
                </div>
                <Footer/>
                <TalkFloat/>
            </div>
            {/*  팝업 띄워야댐  */}
            <NoticePopup/>
        </React.Fragment>
    );
};

export default LandingPage;