import React from 'react';
import './LoginPage.scss';
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="container">
            <div className="loginbox">
                <form method="POST" name="fm" action="https://fxcity.co.kr/login">
                    <input type="hidden" name="_token" value="T7l0C5MFaNNS3IlrtxUapEzL7DE1KYkl1dDnEt1J"/>
                    <div className="logo">
                        <h1 className="hd1"><img src={require('../../../img/mainlogo.png')} alt=""/></h1>
                    </div>
                    <div className="txtinfo">
                        <p className="stxt">FX CITY 로그인 후 다양한 혜택을 누리실 수 있습니다.</p>
                    </div>
                    <div className="inputfrm">
                    <span className="inputset">
                        <span className="ico id"/>
                        <input type="text" name="id" style={{width: "100%"}} placeholder="아이디"/>
                    </span>
                        <span className="inputset">
                        <span className="ico pw"/>
                        <input type="password" id="password" name="password" style={{width: "100%"}}
                               placeholder="비밀번호"/>
                        <input type="checkbox" name="remember" style={{display: "none"}}/>
                    </span>
                    </div>
                    <div className="btnset col1">
                        <Link to={() => {/*document.fm.submit();*/
                        }} className="btn submit" id="btnLogin">로그인</Link>
                    </div>
                    <div className="snsbtnset">
                        <div className="social naver">
                            <Link to={() => {/*openNaverLogin()*/
                            }} className="btn ctype1">
                                <span className="snstxt"/>네이버 아이디로 로그인
                            </Link>
                        </div>
                        <div className="social kakao">
                            <Link to={() => {/*openKaKaoLogin()*/
                            }} className="btn ctype1">
                                <span className="snstxt"/>카카오 아이디로 로그인</Link>
                        </div>
                        <div className="social google">
                            <Link to={() => {/*openGoogleLogin();*/
                            }} className="btn ctype1">
                                <span className="snstxt"/>구글 아이디로 로그인</Link>
                        </div>
                    </div>
                    <div className="findidset">
                        <a href="#fsModalfindid" className="btn" data-toggle="modal">아이디 찾기</a>
                        <a href="#fsModalfindpw" className="btn" data-toggle="modal">비밀번호 찾기</a>
                        <Link to="/register" className="btn">회원가입</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;