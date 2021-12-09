import React from 'react';

const TradeWrap = ({children}) => {
    return (
        <div id="mainContent" className="content">
            <div className="endbox check">
                <h3 className="hd3">FXCITY 시스템
                    <em className="point2">점검</em>
                    안내
                </h3>
                <p className="stxt">
                    시스템 점검 중입니다.<br/>
                    불편을 끼쳐드려 죄송합니다.
                </p>
                <p className="date"/>
            </div>
            <div className="endbox end">
                <h3 className="hd3">FXCITY <em className="point2">휴장시간</em> 안내</h3>
                <p className="stxt">
                    금일 휴장시간이되어 거래를 중지합니다.
                </p>
                <p className="date">
                    거래시간 : 월 09:00 ~ 토 05:00 <br/>
                    휴장시간 : 평일 05:00 ~ 07:20 &nbsp;
                </p>
            </div>
            <div className="titset ct mflex">
                <h2 className="hd2">1분거래</h2>
                <div className="alram">
                    <div className="can-toggle">
                        <input id="callPop" type="checkbox"/>
                        <label htmlFor="callPop">
                            <span className="labeltxt">배경음</span>
                            <div className="can-toggle__switch" id="switchBgm" data-checked="켜기"
                                 data-unchecked="끄기"/>
                        </label>
                    </div>
                </div>
            </div>
            <div className="section">
                {children}
            </div>
        </div>
    );
};

export default TradeWrap;