import React, {useState} from 'react';
import './TalkFloat.scss';
import {Link} from "react-router-dom";

const TalkFloat = () => {
    const [Pop, setPop] = useState(true);

    return (
        <div className={Pop ? "talkfloat on moff" : "talkfloat moff"} id="talkFloat">
            <div className="talk_header">
                <Link to="" className="btn toplink"><span>TOP</span></Link>
                <div className="titset">
                    <h3 className="hd3">상담지원</h3>
                    <span className="call">1544-3619</span>
                </div>
                <div onClick={() => {setPop(!Pop)}} className="btn ctr" style={{cursor: "pointer"}}><span/></div>
            </div>
            <div className="talkbody">
                <div className="talk_iconset">
                    <Link to="/board/personalqa" className="btn">
                        <span className="ico ty1"/>
                        <span className="stxt">1:1문의</span>
                    </Link>
                    <Link to={() => {/*KakaoHelper.chatChannel();*/}} className="btn">
                        <span className="ico ty2"/>
                        <span className="stxt">카카오 문의</span>
                    </Link>
                    <Link to={() => {/*KakaoHelper.addChannel();*/}} className="btn">
                        <span className="ico ty3"/>
                        <span className="stxt">플러스 친구추가</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TalkFloat;