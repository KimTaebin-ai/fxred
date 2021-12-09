import React from 'react';
import {Link} from "react-router-dom";
import './Location.scss';

const Location = () => {
    return (
        <React.Fragment>
            <div className="location">
                <div className="inner">
                    <Link to="/" className="btn home"/>
                    <ul className="locallist">
                        <li>
                            <Link to="/trade/1">1분 거래</Link>
                        </li>
                        <li>
                            <Link to="/trade/2">2분 거래</Link>
                        </li>
                        <li className="on">
                            <Link to="/trade/3">5분 거래</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Location;