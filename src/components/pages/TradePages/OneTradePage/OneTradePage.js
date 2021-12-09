import React from 'react';
import {Footer, Header, TalkFloat} from "../../../common";
import {Graph, Location, TradeWrap, Transaction} from "./section";

const OneTradePage = () => {
    return (
        <React.Fragment>
            <div>
                <Header/>
                <div id="wrap">
                    <Location/>
                    <TradeWrap>
                        <Transaction/>
                        <Graph/>
                    </TradeWrap>
                </div>
                <Footer/>
                <TalkFloat/>
            </div>
        </React.Fragment>
    );
};

export default OneTradePage;