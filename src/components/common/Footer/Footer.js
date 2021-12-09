import React from 'react';
import {Link} from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="footer_top">
                <div className="inner">
                    <div className="footer_gnb">
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/useragree">이용약관</Link></li>
                            <li><Link to="/personalprivacy">개인정보 보호정책</Link></li>
                        </ul>
                    </div>
                    <div className="snslist">
                        <ul>
                            <li>
                                <a href="https://band.us/n/a8af2eHdp9J2c" rel="noopener noreferrer" target="_blank">
                                    <span className="ico sns1"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://story.kakao.com/_ICiFh0" rel="noopener noreferrer" target="_blank">
                                    <span className="ico sns2"/>
                                </a>
                            </li>
                            <li>
                                <span className="callcenter">고객센터 1544-3619</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="inner">
                    <div className="footlogo">
                        <img src={require('../../../img/footlogo.png')} alt=""/>
                    </div>
                    <div className="addinfo">
                        <address>
                            대표자명 : 이상선<br/>
                            법인명 : 에프엑스시티 플래티넘<br/>
                            사업자등록번호 : 218-09-07039<br/>
                            주소 : 경기도 수원시 장안구 조원로112번길 2<br/>
                            고객센터 : 1544-3619
                        </address>
                        <p className="copywright">
                            COPYRIGHTⓒ 2019 FXCITY ALL RIGHTS RESERVED
                        </p>
                    </div>
                    <div className="account"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;