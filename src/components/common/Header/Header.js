import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./Header.scss";

const Header = () => {
    const [DoToggle, setDoToggle] = useState(false);
    const [HowToggle, setHowToggle] = useState(false);
    const [ApplyToggle, setApplyToggle] = useState(false);

    const [NavOn, setNavOn] = useState(false);

    const [MobileTrade, setMobileTrade] = useState(false);
    const [MobileHow, setMobileHow] = useState(false);
    const [MobileApply, setMobileApply] = useState(false);

    let userData = localStorage.getItem('userId');

    let header;

    if (userData) {
        header =
        <div className="stat_login">
            <Link to="/login" className="btn name">김철수</Link>
            <Link to="" className="btn money">5000</Link>
            <Link to="" className="btn logout">로그아웃</Link>
        </div>
    } else  {
        header =
        <div className="stat_login">
            <Link to="/login" className="btn login">로그인</Link>
            <Link to="/register" className="btn member">회원가입</Link>
        </div>
    }

    return (
        <header>
            <div className="header_inner">
                <div className="logo">
                    <Link to="/"><img src={require('../../../img/mainlogo.png')} alt="FXCITY LOGO"/></Link>
                </div>
                <nav className={NavOn ? "on" : ""}>
                    <div className="navtoggle">
                        <Link to="" onClick={() => {setNavOn(!NavOn)}} className="btn toggle">
                            <span/>
                            <span/>
                            <span/>
                        </Link>
                    </div>
                    <div className="innerset">
                        <div className="gnb">
                            {header}
                        </div>
                        <ul className="navlist">
                            <li onMouseOver={() => {setDoToggle(true)}} onMouseLeave={() => {setDoToggle(false)}}
                                className={DoToggle ? "on act" : "act"}>
                                <Link to="" onClick={() => {setMobileTrade(!MobileTrade)}}>FX투자하기</Link>
                                <ul className="dp2" style={MobileTrade ? {display: "block"} : {marginLeft: "-69px"}}>
                                    <li><Link to="/trade/1">1분 거래</Link></li>
                                    <li><Link to="/trade/2">2분 거래</Link></li>
                                    <li><Link to="/trade/3">5분 거래</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/introduce">FX소개</Link></li>
                            <li onMouseOver={() => {setHowToggle(true)}} onMouseLeave={() => {setHowToggle(false)}}
                                className={HowToggle ? "on act" : "act"}>
                                <Link to="" onClick={() => {setMobileHow(!MobileHow)}}>FX투자방법</Link>
                                <ul className="dp2" style={MobileHow ? {display: "block"} : {marginLeft: "-92px"}}>
                                    <li><Link to="/useinfo">회원가입방법</Link></li>
                                    <li><Link to="/depositinfo">입출금신청방법</Link></li>
                                    <li><Link to="/rentinfo">렌트거래방법</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/board/notice">공지사항</Link></li>
                            <li><Link to="/board/press">언론속의 FXCITY</Link></li>
                            <li onMouseOver={() => {setApplyToggle(true)}} onMouseLeave={() => {setApplyToggle(false)}}
                                className={ApplyToggle ? "on act" : "act"}>
                                <Link to="" onClick={() => {setMobileApply(!MobileApply)}}>입출금신청</Link>
                                <ul className="dp2" style={MobileApply ? {display: "block"} : {marginLeft: "-77px"}}>
                                    <li><Link to="/trade/deallist">입출금거래</Link></li>
                                    <li><Link to="/trade/depositform">입금 신청</Link></li>
                                    <li><Link to="/trade/withdrawalform">출금 신청</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/mytrade">나의거래내역</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;