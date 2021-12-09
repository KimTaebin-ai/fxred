import React from 'react';
// commons
import {Footer, Header, TalkFloat} from "../../common";
// sections
import {RegisterForm} from "./section";

const RegisterPage = () => {
    return (
        <React.Fragment>
            <div>
                <Header/>
                <div id="wrap">
                    <div id="content">
                        <RegisterForm/>
                    </div>
                </div>
                <Footer/>
                <TalkFloat/>
            </div>
        </React.Fragment>
    );
};

export default RegisterPage;