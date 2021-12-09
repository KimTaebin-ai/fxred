import React, {useState} from 'react';
import './NoticePopup.scss';

const NoticePopup = () => {
    const [PopupClose, setPopupClose] = useState(false);
    const [DayClose, setDayClose] = useState(false);

    const setCookie = (name, value, day) => {
        const today = new Date();
        today.setTime(today.getTime() + day * 60 * 60 * 24 * 1000);
        document.cookie = name + "=" + value + ';expires=' + today.toUTCString() + ';path=/';
    };

    const getCookie = (name) => {
        const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return value ? value[2] : null;
    };

    const onDayClose = () => {
        setDayClose(!DayClose);
    };

    const onClose = () => {
        setPopupClose(!PopupClose);
        if (DayClose) {
            setCookie("popup", DayClose, 1);
        }
    };

    return (
        <React.Fragment>
            {getCookie("popup") ?
                ""
                :
                <div className="noticepop js_noticepop" data-idx="45" style={PopupClose ? {} : {display: "block", height: "652px"}}>
                    <div className="noticepop_cont">
                        <div className="txtsection">
                            <h3 className="hd2">FX 이용안내</h3>
                            <div className="txtinfo">
                                이용하시는 모든 분께 감사 인사드리며 아울러 유의사항에 대해 안내해 드리겠습니다.<br/><br/>FXCITY은 FX렌트 시스템을 응용하여 새로운 재투자
                                기법을 개발하여
                                적용시킨 시스템을 사용하고 있으며 모든 시스템은 자동화이고 회원들의 스프레드 비용과 이자비용 등등 실제 이용에 따른 수수료 부분을 절감시키고 회원들의
                                FX마진거래에 대한
                                부담을 줄여 드리고 이에 따른 회원들의 투자 성향을 분석하여 재투자 방식으로 이루어지는 시스템입니다.<br/><br/>1. 위험성 고지<br/>거래량이 증가
                                및 거래금액이
                                커질
                                경우 장내시장(거래소)에서처럼 실시간 정확한 가격과 주문량이 집계되지 않을 수 있으며, 정확한 가격과 주문량이 차후 정리되어 정확한 수치를 재입력이 됩니다.
                                재입력된
                                수치가 정확한 수치입니다. 이럴 땐 새로 고침을 눌러 정확한 수치를 다시 확인하시기 바랍니다.<br/><br/>2. 전산장애 고지<br/>FXCITY는 국내
                                인가된
                                회원사를 통해 권리와 거래를 하고 있으며 국제 외환시장, 해외파생상품시장 회원(FDM)과 전산 시스템을 통해 거래가 이루어지기 때문에 전산장애와 관련된 위험이
                                상존합니다.<br/>이러한 내용을 인지하시고 거래 부탁드리며 무리한 투자는 지양해 주시기 바랍니다.<br/><br/>FXCITY을 이용해주시는 모든 분께 감사
                                인사드리며 FX마진거래를 경험해 보시기 바랍니다.<br/>더욱 노력하는 FXCITY이 되겠습니다.
                            </div>
                        </div>
                    </div>
                    <div className="noticepop_ctrset">
                        <div className="lt">
                    <span className={DayClose ? "inputset ckbox on" : "inputset ckbox"}>
                        <label htmlFor="onedayCheck0">
                        <input type="checkbox" id="onedayCheck0" className="js_onedayCheck" onClick={() => {
                            onDayClose();
                            console.log(DayClose);
                            console.log(getCookie("popup"));
                        }}/>
                        24시간동안 열지 않기
                        </label>
                    </span>
                        </div>
                        <div className="rt">
                            <div style={{cursor: "pointer"}} className="btn ctype1 js_noticePopNormalClose"
                                 onClick={onClose}>닫기
                            </div>
                        </div>
                        <div className="btnset"/>
                    </div>
                </div>
            }
        </React.Fragment>
    );
};

export default NoticePopup;