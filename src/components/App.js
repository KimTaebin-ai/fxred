import React, {Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
//pages
import {LandingPage, LoginPage, RegisterPage} from "./pages";
//trade pages
import {FiveTradePage, OneTradePage, TwoTradePage} from "./pages/TradePages";

const App = () => {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/register" component={RegisterPage}/>
                <Route exact path="/trade/1" component={OneTradePage}/>
                <Route exact path="/trade/2" component={TwoTradePage}/>
                <Route exact path="/trade/3" component={FiveTradePage}/>
            </Switch>
        </Suspense>
    );
};

export default App;