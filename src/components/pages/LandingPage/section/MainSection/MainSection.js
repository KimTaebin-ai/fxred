import React from 'react';
import {Link} from "react-router-dom";
import './MainSection.scss';

const MainSection = () => {
    return (
        <React.Fragment>
            <div className="m1">
                <div className="m1section">
                    <div className="m1_videobox">
                        <div className="titset">
                            <h3 className="hd3">FX CITY 동영상 가이드</h3>
                        </div>
                        <div className="video_infobox">
                            <div className="inner">
                                <Link to=""
                                      onClick={() => {
                                          window.open('https://fxcity.co.kr/video1.html', 'video', 'width=1000,height=700');
                                          return false
                                      }}
                                      className="btn videoview">
                                    <span className="videoico"/>
                                    <span className="stxt">회원가입안내</span>
                                </Link>
                                <Link to="" rel="noopener noreferrer" target="_blank"
                                      onClick={() => {
                                          window.open('https://fxcity.co.kr/video3.html', 'video', 'width=1000,height=700');
                                          return false
                                      }}
                                      className="btn videoview">
                                    <span className="videoico ty1"/>
                                    <span className="stxt">입출금안내</span>
                                </Link>
                                <Link to=""
                                      onClick={() => {
                                          window.open('https://fxcity.co.kr/video2.html', 'video', 'width=1000,height=700');
                                          return false
                                      }}
                                      className="btn videoview">
                                    <span className="videoico ty2"/>
                                    <span className="stxt">렌트거래안내</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m1section">
                    <div className="m1_ratetable">
                        <table>
                            <thead>
                            <tr>
                                <th scope="col">거래목록</th>
                                <th scope="col">Limit / Stop</th>
                                <th scope="col">매도량</th>
                                <th scope="col">매수량</th>
                                <th scope="col">바로가기</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1분거래</td>
                                <td>10
                                    <span className="ctrset">
                                    <Link to="" className="btn limit"/>
                                    <Link to="" className="btn stop"/>
                                </span>
                                </td>
                                <td><em className="point1">47%</em></td>
                                <td><em className="point2">53%</em></td>
                                <td><Link to="/trade/1" className="btn link">바로가기</Link></td>
                            </tr>
                            <tr>
                                <td>2분거래</td>
                                <td>20
                                    <span className="ctrset">
                                    <Link to="" className="btn limit"/>
                                    <Link to="" className="btn stop"/>
                                </span>
                                </td>
                                <td><em className="point1">40%</em></td>
                                <td><em className="point2">60%</em></td>
                                <td><Link to="/trade/2" className="btn link">바로가기</Link></td>
                            </tr>
                            <tr>
                                <td>5분거래</td>
                                <td>50
                                    <span className="ctrset">
                                    <Link to="" className="btn limit"/>
                                    <Link to="" className="btn stop"/>
                                </span>
                                </td>
                                <td><em className="point1">20%</em></td>
                                <td><em className="point2">80%</em></td>
                                <td><Link to="/trade/5" className="btn link">바로가기</Link></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="m4_wrap">
                <div className="m4">
                    <div className="m4section m4section-left">
                        <div className="m4titlecontentwrap" style={{textAlign: "center"}}>
                            <span className="m4title">
                                'FX시티 2019년 올해의 우수브랜드 대상 1위'
                                <div className="m4content">
                                    회원님들의 많은 성원에 힘입어 보다 더 나은<br/>
                                    FX시티가 되도록 하겠습니다.<br/>
                                    좋은 서비스로 보답 드리겠습니다.<br/>
                                    감사합니다.<br/>
                                </div>
                            </span>
                            <div style={{marginTop: "5px", lineHeight: "30px", textAlign: "left"}}>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="m4section">
                        <div>
                            <img className="m4img" src={require('../../../../../img/daesang01.png')} alt="daesang"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m3">
                <ul className="m3list">
                    <li>
                        <span className="round">
                            <span className="ico ty1"/>
                        </span>
                        <p className="stxt">
                            쉽고 간편한 차트확인<br/>
                            <span className="sm">편리한 사용방법.</span>
                        </p>
                    </li>
                    <li>
                        <span className="round">
                            <span className="ico ty2"/>
                        </span>
                        <p className="stxt">
                            문제없는 안전거래<br/>
                            <span className="sm">단단한 방화벽</span>
                        </p>
                    </li>
                    <li>
                        <span className="round">
                            <span className="ico ty3"/>
                        </span>
                        <p className="stxt">
                            20시간 매매가 가능<br/>
                            <span className="sm">누구나 제한없이</span>
                        </p>
                    </li>
                    <li>
                        <span className="round">
                            <span className="ico ty4"/>
                        </span>
                        <p className="stxt">
                            뉴욕 거래소 기준<br/>
                            <span className="sm">실시간 환율 적용</span>
                        </p>
                    </li>
                    <li>
                        <span className="round">
                            <span className="ico ty5"/>
                        </span>
                        <p className="stxt">
                            양방향 거래구조<br/>
                            <span className="sm">쉬운 거래방법</span>
                        </p>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default MainSection;