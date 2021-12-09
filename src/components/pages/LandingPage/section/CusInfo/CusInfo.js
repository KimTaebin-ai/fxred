import React from 'react';
import './CusInfo.scss';

const CusInfo = () => {
    return (
        <div className="cusinfo">
            <div className="box">
                <div className="infotxt">
                    <div className="titset">
                        <h3 className="hd3">고객센터</h3>
                        <p className="callnum">1544-3619</p>
                    </div>
                    <div className="innercont">
                        <ul className="ic">
                            <li>고객상담시간 09:00 ~ 05:00</li>
                            <li>입금가능시간 00:00 ~ 24:00</li>
                            <li>출금가능시간 09:00 ~ 05:00</li>
                            <li>거래가능시간 07:20 ~ 05:00</li>
                            <li>휴무시간 토요일 05:00 ~ 월요일 09:00</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="banner">
                    <span className="simg">
                        <img src="https://fxcity.co.kr/img/main_banner_sample.png?2019111801" alt=""/>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CusInfo;