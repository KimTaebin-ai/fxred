import React from 'react';
import './VisualSection.scss';

const VisualSection = () => {
    return (
        <div className="visual">
            <div className="visual_inner">
                <div className="txtinfo">
                    <h2>
                        <span className="stxt copy3">FX시티가 더욱더</span>
                        <span className="stxt copy3">안정화된 모습으로</span>
                        <span className="stxt copy3">1월2일 "FXCITY Platinum"</span>
                        <span className="stxt copy3">으로 변경됩니다.</span>
                    </h2>
                    <p className="stxt copy4">-FX시티 Platinum 운영진일동-</p>

                </div>
                <span className="swipervisual ty1"/>
            </div>
        </div>
    );
};

export default VisualSection;