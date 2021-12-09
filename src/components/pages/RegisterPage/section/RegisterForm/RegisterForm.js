import React, {useState} from 'react';
import './RegisterForm.scss';
import {Link} from "react-router-dom";

const RegisterForm = () => {
    const [IdInput, setIdInput] = useState('');
    const [IdChk, setIdChk] = useState(false);
    const [PwInput, setPwInput] = useState('');
    const [PwChkInput, setPwChkInput] = useState('');
    const [Agree, setAgree] = useState(false);
    const [OneAgree, setOneAgree] = useState(false);
    const [TwoAgree, setTwoAgree] = useState(false);
    const [ThreeAgree, setThreeAgree] = useState(false);
    const [FourAgree, setFourAgree] = useState(false);
    const [FiveAgree, setFiveAgree] = useState(false);

    const handleIdChange = (e) => {
        const {value} = e.target;
        setIdInput(value);
    };

    const handlePwChange = (e) => {
        const {value} = e.target;
        setPwInput(value);
    };

    const handlePwChkChange = (e) => {
        const {value} = e.target;
        setPwChkInput(value);
    };

    const overlap = () => {
        checkIdDuplication();
    };

    const checkIdDuplication = () => {
        if (IdInput === '') {
            alert('아이디를 입력해주세요');
        } else if (new RegExp(/^[a-z0-9_]{4,20}$/).test(IdInput)) {
            setIdChk(true);
            alert('사용가능한 아이디입니다');
        } else {
            alert('아이디는 6~20자 영문자 또는 숫자여야합니다.');
        }
        //서버 통신
        // if (/*중복 없음*/) {
        // 정규식 처리를 서버에서 해줬을 때
        //     alert('사용 가능한 아이디 입니다');
        // } else if (/*중복 있음*/) {
        //     alert('이미 존재하는 아이디입니다.')
        // }
    };

    const onRegister = () => {
        if (IdInput === '') {
            alert('아이디를 입력해주세요');
        } else if (IdChk === false) {
            alert('아이디 중복 체크를 해주세요');
        } else if (PwInput === '') {
            alert("비밀번호는 6~25자리를 입력해주세요");
        } else if (PwInput !== PwChkInput) {
            alert('비밀번호가 서로 일치하지 않습니다.');
        } else if (!OneAgree) {
            alert("개인정보수집 및 이용동의서에 동의해주세요.");
        } else if (!TwoAgree) {
            alert("서비스이용약관(필수)에 동의해주세요.");
        } else if (!FiveAgree) {
            alert("개인정보처리 방침안내에 동의해주세요");
        } else {
            alert('회원가입이 완료 되었습니다.');
            window.location.reload();
        }
    };

    return (
        <React.Fragment>
            <h2 className="hd2 ct">회원가입</h2>
            <h3 className="hd4">회원정보입력</h3>
            <form method="POST" name="fm" action="">
                <input type="hidden" name="_token"/>
                <div className="frm_write">
                    <ul className="frm_list">
                        <li>
                            <div className="frm_clm col2">
                                <dl className="dlist">
                                    <dt>아이디</dt>
                                    <dd>
                                        <div className="input_col">
                                                    <span className="inputset">
                                                        <input type="text" id="id" onChange={handleIdChange}
                                                               value={IdInput} name="id" required className="wgrid1"
                                                               placeholder="아이디"/>
                                                    </span>
                                            <div style={{cursor: "pointer"}} id="btnDuplCheck"
                                                 className="btn ctype2" onClick={overlap}>중복체크
                                            </div>
                                            <input type="hidden" id="duplicationComplete" value={false}/>
                                        </div>
                                        <p className="txtinfo">
                                            <em className="point2">영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다. 아이디 중복체크 필수</em>
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="frm_clm col2">
                                <dl className="dlist">
                                    <dt>이름</dt>
                                    <dd>
                                        <div className="input_col">
                                                    <span className="inputset readonly">
                                                        <input type="text" id="name" name="name" required
                                                               className="wgrid1"/>
                                                    </span>
                                            <div style={{cursor: "pointer"}} id="btnPhoneAuth"
                                                 className="btn ctype2">본인인증
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="frm_clm col2">
                                <dl className="dlist">
                                    <dt>휴대폰번호</dt>
                                    <dd>
                                        <div className="input_col">
                                                    <span className="inputset readonly">
                                                        <input type="text" id="phone" name="phone"
                                                               className="wgrid1"/>
                                                    </span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="frm_clm col2">
                                <dl className="dlist">
                                    <dt>비밀번호</dt>
                                    <dd>
                                        <div className="input_col">
                                                    <span className="inputset">
                                                        <input onChange={handlePwChange} value={PwInput} type="password"
                                                               id="password" name="password" required
                                                               className="wgrid1" placeholder="비밀번호"/>
                                                    </span>
                                        </div>
                                        <p className="txtinfo">
                                            <em className="point2">6~25자리를 입력해주세요</em>
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                            <div className="frm_clm col2">
                                <dl className="dlist">
                                    <dt>비밀번호확인</dt>
                                    <dd>
                                        <div className="input_col">
                                                    <span className="inputset">
                                                    <input type="password" id="password_confirmation"
                                                           onChange={handlePwChkChange} value={PwChkInput}
                                                           name="password_confirmation" required className="wgrid1"
                                                           placeholder="비밀번호 확인"/>
                                                    </span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="frm_clm col2">
                                <dl className="dlist">
                                    <dt>예금주</dt>
                                    <dd>
                                        <div className="input_col">
                                                    <span className="inputset">
                                                    <input type="text" id="bankAccountName" name="bankAccountName"
                                                           required className="wgrid1" placeholder="예금주"
                                                           maxLength="30"/>
                                                    </span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="frm_clm col2">
                                <dl className="dlist">
                                    <dt>주민번호 앞자리</dt>
                                    <dd>
                                        <div className="input_col">
                                                    <span className="inputset">
                                                        <input type="text" id="sn" name="sn" required className="wgrid1"
                                                               placeholder="주민번호 앞 6자리" maxLength="6"/>
                                                    </span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="frm_clm col2">
                                <dl className="dlist">
                                    <dt>은행</dt>
                                    <dd>
                                        <div className="input_col">
                                                    <span className="inputset">
                                                        <select id="bankName" name="bankName" required>
                                                            <option value="">-선택-</option>
                                                            <option value="02">산업은행</option>
                                                            <option value="03">기업은행</option>
                                                            <option value="04">국민은행</option>
                                                            <option value="05">외환은행</option>
                                                            <option value="07">수협중앙회</option>
                                                            <option value="08">수출입은행</option>
                                                            <option value="10">농협중앙회</option>
                                                            <option value="20">우리은행</option>
                                                            <option value="21">신한은행</option>
                                                            <option value="23">SC제일은행</option>
                                                            <option value="25">하나은행</option>
                                                            <option value="27">한국씨티은행</option>
                                                            <option value="31">대구은행</option>
                                                            <option value="32">부산은행</option>
                                                            <option value="34">광주은행</option>
                                                            <option value="35">제주은행</option>
                                                            <option value="37">전북은행</option>
                                                            <option value="39">경남은행</option>
                                                            <option value="45">새마을금고</option>
                                                            <option value="48">신협중앙회</option>
                                                            <option value="50">상호신용금고</option>
                                                            <option value="54">홍콩상하이은행</option>
                                                            <option value="71">우체국</option>
                                                            <option value="209">동양종합금융증권</option>
                                                            <option value="230">미래에셋증권</option>
                                                            <option value="238">대우증권</option>
                                                            <option value="240">삼성증권</option>
                                                            <option value="243">한국투자증권</option>
                                                             <option value="247">우리투자증권</option>
                                                            <option value="262">하이투자증권</option>
                                                            <option value="263">에이치엠씨투자증권</option>
                                                            <option value="266">에스케이증권</option>
                                                            <option value="267">대신증권</option>
                                                            <option value="269">한화증권</option>
                                                            <option value="270">하나대투증권</option>
                                                            <option value="280">유진투자증권</option>
                                                            <option value="281">현대증권</option>
                                                            <option value="287">메리츠증권</option>
                                                            <option value="289">엔에이치투자증권</option>
                                                        </select>
                                                    </span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="frm_clm col2">
                                <dl className="dlist">
                                    <dt>계좌번호</dt>
                                    <dd>
                                        <div className="input_col">
                                                    <span className="inputset">
                                                        <input type="text" id="bankAccount" name="bankAccount" required
                                                               className="wgrid1" placeholder="계좌번호 입력"/>
                                                        <input type="hidden" id="accountValidate" value={false}/>
                                                    </span>
                                            <div onClick={() => {/*onCheckAccount()*/
                                            }}
                                                 className="btn ctype2">확인
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </li>
                        <li>
                            <div className="frm_clm col2">
                                <dl className="dlist">
                                    <dt>이메일</dt>
                                    <dd>
                                        <div className="input_col email">
                                                    <span className="inputset">
                                                        <input type="text" id="email1" name="email1" className="wgrid2"/>
                                                    </span>
                                            <span className="flag">@</span>
                                            <span className="inputset">
                                                        <input type="text" id="email2" name="email2" maxLength="30"
                                                               required style={{width: "135px"}}/>
                                                    </span>
                                            <span className="inputset">
                                                        <select id="email_kind">
                                                            <option>직접입력</option>
                                                            <option value="naver.com">naver.com</option>
                                                            <option value="nate.com">nate.com</option>
                                                            <option value="daum.net">daum.net</option>
                                                            <option value="gmail.com">gmail.com</option>
                                                            <option value="Hotmail.com">Hotmail.com</option>
                                                            <option value="Yahoo.com">Yahoo.com</option>
                                                            <option value="Empas.com">Empas.com</option>
                                                            <option value="Empas.com">Empas.com</option>
                                                            <option value="Korea.,com">Korea.,com</option>
                                                            <option value="Dreamwiz.com">Dreamwiz.com</option>
                                                            <option value="Gmail.com">Gmail.com</option>
                                                        </select>
                                                    </span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="frm_clm col2">
                                <dl className="dlist">
                                    <dt>추천지점코드</dt>
                                    <dd>
                                        <div className="input_col">
                                                    <span className="inputset sectize">
                                                        <span className="control-group">
                                                            <select id="recommendationCode" name="recommendationCode"
                                                                    style={{width: "150px"}}/>
                                                        </span>
                                                    </span>
                                        </div>
                                        <p className="txtinfo">
                                            <em className="point2">
                                                보고 오신 지점명을 작성해주세요. 다른지점명으로 적을시 추후에 변경이 안됩니다.<br/>
                                                보고 오신 지점이 없으시거나 해당지점이 없으시면 고객센터로 전화주세요.
                                            </em>
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
            <h3 className="hd5">회원가입약관</h3>
            <div className="agreebox">
                    <span className={Agree ? "inputset ckbox on" : "inputset ckbox"}>
                        <label htmlFor="totalAgree" style={{cursor: "pointer"}}>
                            <input onChange={() => {
                                setAgree(!Agree);
                                setOneAgree(!OneAgree);
                                setTwoAgree(!TwoAgree);
                                setThreeAgree(!ThreeAgree);
                                setFourAgree(!FourAgree);
                                setFiveAgree(!FiveAgree);
                            }} type="checkbox" id="totalAgree" name="totalAgree"/>
                            전체동의
                        </label>
                    </span>
                <p className="stxt">
                    회원가입약관 및 개인정보처리방침안내의 내용에 동의하셔야 회원가입 하실 수 있습니다.
                </p>
            </div>
            <div className="agreebox">
                <h4 className="hd5">개인정보수집 및 이용동의서 (필수)</h4>
                <div className="agree_content">
                        <pre>정보통신망법 및 개인정보보호법, 관계법령에 따라 fxcity 서비스 이용을 위한 회원가입을 신청하시는 고객님께 수집하는 개인정보의 항목, 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내드리오니 자세히 확인 후 동의하여 주시기 바랍니다. <br/>
                        1. 개인정보 수집.<br/>
                        회원가입 시점에 fxcity이(가) 이용자로부터 수집하는 개인정보는 아래와 같습니다.<br/>
                        1) 개인식별정보 : 고객의 성명, 생년월일, 연락처, 성별, 국적, CI(고유식별변호), DI, IP주소 등<br/>
                        2) 금융정보 : 은행명, 계좌번호 등<br/>
                        3) 선택항목 : 이메일, 주소 등<br/>

                        서비스 이용과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.<br/>
                        1) 거래정보 : 개설정보, 예탁금, 거래내역 등<br/>
                        2) 이용정보 : 접속 IP 및 쿠키, 서비스 이용기록, 기기정보, OS정보 등<br/>
                        3) 투자자정보 :  투자권유준칙 등에 따른 투자자정보 및 투자성향 등<br/>
<br/>
                        기타 고객상담, fxcity 내의 개별 서비스 이용,<br/>
                        고객의 문의사항에 대한 응답, 이벤트 응모 및 경품 신청 과정에서<br/>
                        해당 서비스의 이용자에 한해 추가 개인정보 수집이 발생할 수 있습니다.<br/>
                        추가로 개인정보를 수집할 경우에는 해당 개인정보의 수집 시점에서 이용자에게 수집하는 개인정보 항목 및 이용목적 등에 대해 안내 드리고 동의를 받습니다.<br/>
<br/>
                        2. 개인정보 이용<br/>
                        고객님의 개인정보는 회원관리, 서비스제공 및 개선, 신규 서비스 개발 등을 위해 이용됩니다.<br/>
                        회원가입 시 또는 서비스의 이용과정에서 홈페이지 또는 별도 절차를 통해 서비스 제공을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.<br/>
<br/>
                        - 회원 시벽/가입의사 확인, 본인/연력 확인, 부정이용 방지<br/>
                        - 인구통계학적 특성에 따른 분석 및 서비스 제공<br/>
                        - 신규 서비스 개발, 다양한 서비스 제공, 문의사항 또는 불만처리, 공지사항 전달<br/>
                        - 서비스의 원활한 운영에 지장을 주는 행위(계정 도용 및 부정 이용 행위 등 포함)에 대한 방지 및 제재<br/>
                        - 마케팅 및 광고 등에 활용<br/>
                        - 서비스 이용 기록, 접속 빈도 및 서비스 이용에 대한 통계, 프라이버시 보호 측면의<br/>
                            서비스 환경 구축, 맞춤형 서비스 제공, 서비스 개선에 활용<br/>
<br/>
<br/>
<br/>
                        ※ 개인정보의 보유기간 및 처리기간<br/>
                        - 당사는 수집, 이용에 관한 동의일로부터 (금융)거래 종료일 또는 동의서의 이용목적 달성 시까지 보유, 이용됩니다.<br/>
                        - 이용목적이 달성된 후에는 법령상 의무를 준수하기 위해 불가피한 경우,<br/>
                            분쟁가능성이 소멸되지 않은 경우, 고객의 이익을 위해 필요한 경우, 다른 법령에 따라 위탁된 업무 수행 시 연장하여 보관 및 처리할 수 있습니다.<br/>
<br/>
                        3. 개인정보 파기<br/>
                        당사는 전자적 파일 형태인 경우 복구 및 재생되지 않도록 안전하게 삭제하고,<br/>
                        그 밖에 기록물, 인쇄물, 서면 등의 경우 분쇄하거나 소각하여 파기합니다.<br/>
                        다만, 내부 방침에 보관 후 파기하는 정보는 아래와 같습니다.<br/>
                            1) 아래 정보는 탈퇴일로부터 최대 5년간 보관 후 파기합니다.<br/>
                            - CS 문의 대응을 위해 계정 내 문의 내역 보관 및 일부 개인정보를 암호화 하여 보관.<br/>
                            -서비스 부정이용 기록.<br/>
                            -전자상거래 등에서의 소비자 보호에 관한 법률에 따른 렌트 계약 서비스 이용기록.<br/>
<br/>
                        또한, 당사는 '개인정보 유효기간제' 에 따라 1년간 서비스를 이용하지 않은 회원의 개인정보를 별도로 분리 보관하고 있으며,<br/>
                        분리 보관된 개인정보는 3년간 보관 후 지체 없이 파기합니다.<br/>
<br/>
                        당사는 보유기간이 경과한 개인정보는 정당한 사유가 없는 한 보유기간의 종료일로부터 5일 이내,<br/>
                        처리목적의 달성, 해당 서비스의 폐지, 사업의 종료 등으로<br/>
                        그 개인정보가 불필요하다고 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.<br/>
                        다만, 문서철에 포함된 개인정보는 매분기 단위로 보존 필요성을 확인하여 파기할 수 있습니다.<br/>
<br/>
                        서비스 제공을 위해 필요한 최소한의 개인정보이므로 동의를 해 주셔야 서비스 이용이 가능합니다.<br/>
<br/>
                        이하) 개인정보 수집 및 이용 동의서 표준양식에 따릅니다.<br/>
<br/>
<br/>
                        정보통신망법 및 개인정보보호법, 관계법령에 따라 fxcity 서비스 이용을 위한 회원가입을 신청하시는 고객님께 수집하는 개인정보의 항목, 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내드리오니 자세히 확인 후 동의하여 주시기 바랍니다.<br/>
<br/>
                        1. 개인정보 수집.<br/>
                        회원가입 시점에 fxcity이(가) 이용자로부터 수집하는 개인정보는 아래와 같습니다.<br/>
                        1) 개인식별정보 : 고객의 성명, 생년월일, 연락처, 성별, 국적, CI(고유식별변호), DI, IP주소 등<br/>
                        2) 금융정보 : 은행명, 계좌번호 등<br/>
                        3) 선택항목 : 이메일, 주소 등<br/>
<br/>
                        서비스 이용과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.<br/>
                        1) 거래정보 : 개설정보, 예탁금, 거래내역 등<br/>
                        2) 이용정보 : 접속 IP 및 쿠키, 서비스 이용기록, 기기정보, OS정보 등<br/>
                        3) 투자자정보 :  투자권유준칙 등에 따른 투자자정보 및 투자성향 등<br/>
<br/>
                        기타 고객상담, fxcity 내의 개별 서비스 이용,<br/>
                        고객의 문의사항에 대한 응답, 이벤트 응모 및 경품 신청 과정에서<br/>
                        해당 서비스의 이용자에 한해 추가 개인정보 수집이 발생할 수 있습니다.<br/>
                        추가로 개인정보를 수집할 경우에는 해당 개인정보의 수집 시점에서 이용자에게 수집하는 개인정보 항목 및 이용목적 등에 대해 안내 드리고 동의를 받습니다.<br/>
<br/>
                        2. 개인정보 이용<br/>
                        고객님의 개인정보는 회원관리, 서비스제공 및 개선, 신규 서비스 개발 등을 위해 이용됩니다.<br/>
                        회원가입 시 또는 서비스의 이용과정에서 홈페이지 또는 별도 절차를 통해 서비스 제공을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.<br/>
<br/>
                        - 회원 시벽/가입의사 확인, 본인/연력 확인, 부정이용 방지<br/>
                        - 인구통계학적 특성에 따른 분석 및 서비스 제공<br/>
                        - 신규 서비스 개발, 다양한 서비스 제공, 문의사항 또는 불만처리, 공지사항 전달<br/>
                        - 서비스의 원활한 운영에 지장을 주는 행위(계정 도용 및 부정 이용 행위 등 포함)에 대한     방지 및 제재<br/>
                        - 마케팅 및 광고 등에 활용<br/>
                        - 서비스 이용 기록, 접속 빈도 및 서비스 이용에 대한 통계, 프라이버시 보호 측면의<br/>
                            서비스 환경 구축, 맞춤형 서비스 제공, 서비스 개선에 활용<br/>
<br/>
<br/>
<br/>
                        ※ 개인정보의 보유기간 및 처리기간<br/>
                        - 당사는 수집, 이용에 관한 동의일로부터 (금융)거래 종료일 또는 동의서의 이용목적 달성 시까지 보유, 이용됩니다.<br/>
                        - 이용목적이 달성된 후에는 법령상 의무를 준수하기 위해 불가피한 경우,<br/>
                            분쟁가능성이 소멸되지 않은 경우, 고객의 이익을 위해 필요한 경우, 다른 법령에 따라 위탁된 업무 수행 시 연장하여 보관 및 처리할 수 있습니다.<br/>
<br/>
                        3. 개인정보 파기<br/>
                        당사는 전자적 파일 형태인 경우 복구 및 재생되지 않도록 안전하게 삭제하고,<br/>
                        그 밖에 기록물, 인쇄물, 서면 등의 경우 분쇄하거나 소각하여 파기합니다.<br/>
                        다만, 내부 방침에 보관 후 파기하는 정보는 아래와 같습니다.<br/>
                            1) 아래 정보는 탈퇴일로부터 최대 5년간 보관 후 파기합니다.<br/>
                            - CS 문의 대응을 위해 계정 내 문의 내역 보관 및 일부 개인정보를 암호화 하여 보관.<br/>
                            -서비스 부정이용 기록.<br/>
                            -전자상거래 등에서의 소비자 보호에 관한 법률에 따른 렌트 계약 서비스 이용기록.<br/>
<br/>
                        또한, 당사는 '개인정보 유효기간제' 에 따라 1년간 서비스를 이용하지 않은 회원의 개인정보를 별도로 분리 보관하고 있으며,<br/>
                        분리 보관된 개인정보는 3년간 보관 후 지체 없이 파기합니다.<br/>
<br/>
                        당사는 보유기간이 경과한 개인정보는 정당한 사유가 없는 한 보유기간의 종료일로부터 5일 이내,<br/>
                        처리목적의 달성, 해당 서비스의 폐지, 사업의 종료 등으로<br/>
                        그 개인정보가 불필요하다고 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.<br/>
                        다만, 문서철에 포함된 개인정보는 매분기 단위로 보존 필요성을 확인하여 파기할 수 있습니다.<br/>
<br/>
                        서비스 제공을 위해 필요한 최소한의 개인정보이므로 동의를 해 주셔야 서비스 이용이 가능합니다.<br/>
<br/>
                        이하) 개인정보 수집 및 이용 동의서 표준양식에 따릅니다.<br/>
                        </pre>
                </div>
                <span className={OneAgree ? "inputset ckbox on" : "inputset ckbox"}>
                        <label htmlFor="useAgree1" style={{cursor: "pointer"}}>
                            <input onChange={() => {
                                setOneAgree(!OneAgree);
                            }} type="checkbox" id="useAgree1" name="useAgree"/>
                            회원가입약관의 내용에 동의합니다
                        </label>
                    </span>
            </div>
            <div className="agreebox">
                <h4 className="hd5">서비스이용약관(필수)</h4>
                <div className="agree_content">
                        <pre>저희 fx시티는, fx마진거래 투자를 1만불 증거금 없이 증거금을 렌트해 작은돈으로 투자를 할수있게 렌트하는 법인이며,<br/>
                        "투기,사행성,도박" 등을 목적으로 가입하고 이용하는 행위를 절대 금지하며 즉시 가입승인 불가 탈퇴입니다.<br/>
<br/>
                        제1장 총칙<br/>
<br/>
                        제1조 (목적) 이 약관은 에프엑스시티(이하 “회사”)가 온라인으로 제공하는 fx 마진거래 및 이에 부수된 제반 서비스(이하 “서비스”)의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.<br/>
<br/>
                        제2조 (용어의 정의) ① 이 약관에서 사용하는 정의는 다음과 같습니다.<br/>
                            1. “회사”라 함은 온라인을 통하여 서비스를 제공하는 사업자를 의미합니다.<br/>
                            2. “회원”이라 함은 본 약관에 동의하고 서비스 이용 자격을 부여받은 자를 의미합니다.<br/>
                            3. “서비스”라 함은 회사가 회원에게 온라인으로 제공하는 fx마진거래 및 이에 부수된 제반 서비스를 의미합니다.<br/>
                            4. “계정(ID)”이라 함은 회원의 식별과 서비스 이용을 위하여 회원이 선정하고 회사가 부여하는 문자, 숫자 또는 특수문자의 조합을 의미합니다.<br/>
                            5. “계정정보“라 함은 회원의 계정, 비밀번호, 성명 등 회원이 회사에 제공한 일반정보 및 이용정보, 이용요금 결제상태 등 생성정보를 통칭합니다.<br/>
                            6. “비밀번호”라 함은 회원이 부여받은 계정과 일치되는 회원임을 확인하고 회원의 정보 및 권익보호를 위해 회원 자신이 선정하여 비밀로 관리하는 문자, 숫자 또는 특수문자의 조합을 의미합니다.<br/>
<br/>
<br/>
                        제3조 (회사정보 등의 제공) 회사는 다음 각 호의 사항을 홈페이지(https://fxcity.co.kr)에 게시하여, 회원이 이를 쉽게 알 수 있도록 합니다. 다만, 개인정보취급방침과 약관은 회원이 연결화면을 통하여 볼 수 있도록 할 수 있습니다.<br/>
                            1. 상호 및 대표자의 성명<br/>
                            2. 영업소 소재지 주소(회원의 불만을 처리할 수 있는 곳의 주소를 포함한다) 및 전자우편주소<br/>
                            3. 전화번호, 모사전송번호(Fax 번호)<br/>
                            4. 사업자등록번호, 통신판매업 신고번호<br/>
                            5. 개인정보취급방침<br/>
                            6. 서비스 이용약관<br/>
<br/>
                        제4조 (약관의 명시와 개정) ① 회사는 이 약관의 내용을 회원이 알 수 있도록  서비스 홈페이지 공지사항(https://fxcity.co.kr)에 게시하거나 연결화면을 제공하는 방법으로 회원에게 공지합니다.<br/>
                        ② 회사는 회원이 회사와 이 약관의 내용에 관하여 질의 및 응답을 할 수 있도록 조치를 취합니다.<br/>
                        ③ 회사는 서비스를 이용하고자 하는 자(이하 “이용자”라 한다)가 약관의 내용을 쉽게 알 수 있도록 작성하고 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회, 과오납금의 환급, 계약 해제ㆍ해지, 회사의 면책사항 및 회원에 대한 피해보상 등과 같은 중요한 내용을 회원이 쉽게 이해할 수 있도록 굵은 글씨 등으로 처리하거나 별도의 연결화면 또는 팝업화면 등을 제공하고 이용자의 동의를 얻도록 합니다.<br/>
                        ④ 회사는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「정보통신망이용촉진 및 정보보호 등에 관한 법률」등 관련 법령에 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.<br/>
                        ⑤ 회사가 약관을 개정할 경우에는 적용일자 및 개정내용, 개정사유 등을 명시하여 그 적용일자로부터 최소한 7일 이전(회원에게 불리하거나 중대한 사항의 변경은 30일 이전)부터 그 적용일자 경과 후 상당한 기간이 경과할 때까지 초기화면 또는 초기화면과의 연결화면을 통해 공지합니다.<br/>
                        ⑥ 회원이 개정약관의 적용에 동의하지 않는 경우 회사 또는 회원은 서비스 이용계약을 해지할 수 있습니다.<br/>
<br/>
                        제5조 (약관 외 준칙) 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 「전자상거래 등에서의 소비자보호에 관한 법률」,「약관의 규제에 관한 법률」,「정보통신망이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령에 따릅니다.<br/>
<br/>
                        제6조 (운영정책) ① 약관을 적용하기 위하여 필요한 사항과 회원의 권익을 보호하기 위하여 회사는 약관에서 구체적 범위를 정하여 위임한 사항을 서비스 운영정책(이하 “운영정책”이라 합니다)으로 정할 수 있습니다.<br/>
                        ② 회사는 운영정책의 내용을 회원이 알 수 있도록 서비스 홈페이지에 게시하거나 연결화면을 제공하는 방법으로 회원에게 공지하여야 합니다.<br/>
                        ③ 회원의 권리 또는 의무에 중대한 변경을 가져오거나 약관 내용을 변경하는  것과 동일한 효력이 발생하는 운영정책 개정의 경우에는 제4조의 절차에 따릅니다. 단, 운영정책 개정이 다음 각 호의 어느 하나에 해당하는 경우에는 제2항의 방법으로 사전에 공지합니다.<br/>
                            1. 약관에서 구체적으로 범위를 정하여 위임한 사항을 개정하는 경우<br/>
                            2. 회원의 권리·의무와 관련 없는 사항을 개정하는 경우<br/>
                            3. 운영정책의 내용이 약관에서 정한 내용과 근본적으로 다르지 않고 회원이 예측가능한 범위내에서 운영정책을 개정하는 경우<br/>
<br/>
                        제2장 이용계약의 체결<br/>
<br/>
                        제7조 (이용신청 및 방법) ① 회사가 제공하는 서비스를 이용하고자 하는 자는 회사가 서비스 홈페이지(https://fxcity.co.kr)에서 제공하는 이용신청서를 작성하는 방법으로 이용신청을 하여야 합니다.<br/>
                        ② 이용자는 이용 신청 시 회사에서 요구하는 제반 정보를 제공하여야 합니다.<br/>
                        ③ 이용자는 제1항의 이용 신청 시 본인의 실명 및 실제 정보를 기재하여야 합니다. 실명 또는 식별정보를 허위로 기재하거나 타인의 명의를 도용한 경우 이 약관에 의한 회원의 권리를 주장할 수 없고, 회사는 환급없이 이용계약을 취소하거나 해지할 수 있습니다.<br/>
                        ④ 청소년(18세 미만의 자로서 「초·중등교육법」제2조의 규정에 의한 고등학교에 재학 중인 학생을 포함한다.)이 이용신청을 할 경우에는 이용을 승낙하지 않습니다.
<br/>
                        제8조 (이용신청의 승낙과 제한) ① 회사는 회사가 이용자에게 요구하는 정보에 대해 이용자가 실명 및 실제 정보를 정확히 기재하여 이용신청을 한 경우에 상당한 이유가 없는 한 이용신청을 승낙합니다.<br/>
                        ② 회사는 다음 각 호의 어느 하나에 해당하는 이용신청에 대해서는 승낙을 하지 않을 수 있습니다.<br/>
                            1. 제7조에 위반하여 이용신청을 하는 경우<br/>
                            2. 이용요금을 납부하지 않거나 잘못 납부하여 확인할 수 없는 경우<br/>
                            3. 청소년(제7조 제4항의 청소년과 같다)이 이용신청 할 경우<br/>
                            4. 최근 3개월 내 이용제한 기록이 있는 이용자가 이용신청을 하는 경우<br/>
                            5. 제3자의 신용카드, 유/무선 전화, 은행 계좌 등을 무단으로 이용 또는 도용하여 서비스 이용요금을 결제하는 경우<br/>
                            6. 대한민국 이외의 국가 중 회사에서 아직 서비스를 제공할 것으로 결정하지 않은 국가에서 서비스를 이용하는 경우로 회사가 해외 서비스 업체와 체결한 계약이나 특정 국가에서 접속하는 회원에 대한 서비스 제공과 관련하여 서비스제공을 제한할 필요가 있는 경우<br/>
                            7.「정보통신망 이용촉진  및 정보보호 등에 관한 법률」 및 그 밖의 관계 법령에서 금지하는 위법행위를 할 목적으로 이용신청을 하는 경우<br/>
                            8. 그 밖에 1호 내지 7호에 준하는 사유로서 승낙이 부적절하다고 판단되는 경우<br/>
                        ③ 회사는 다음 각 호의 어느 하나에 해당하는 경우에는 그 사유가 해소될 때까지 승낙을 유보할 수 있습니다.<br/>
                            1. 회사의 설비에 여유가 없거나 기술적 장애가 있는 경우<br/>
                            2. 서비스 상의 장애 또는 서비스 이용요금 결제수단의 장애가 발생한 경우<br/>
                            3. 그 밖에 위 각 호에 준하는 사유로서 이용신청의 승낙이 곤란한 경우<br/>
<br/>
                        제9조 (회원 계정(ID) 및 비밀번호) ① 회사는 회원에 대하여 회원의 정보 보호, 서비스 이용안내 등의 편의를 위해 회원이 선정한 일정한 문자, 숫자 또는 특수문자의 조합을 계정으로 부여합니다.<br/>
                        ② 회사는 계정정보를 통하여 당해 회원의 서비스 이용가능 여부 등의 제반 회원 관리업무를 수행합니다.<br/>
                        ③ 회원은 자신의 계정정보를 선량한 관리자로서의 주의 의무를 다하여 관리하여야 합니다. 회원이 본인의 계정정보를 소홀히 관리하거나 제3자에게 이용을 승낙함으로써 발생하는 손해에 대하여는 회원에게 책임이 있습니다.<br/>
                        ④ 비밀번호의 관리책임은 회원에게 있으며, 회원이 원하는 경우에는 보안상의 이유 등으로 언제든지 변경이 가능합니다.<br/>
                        ⑤ 회원은 정기적으로 비밀번호를 변경하여야 합니다.<br/>
<br/>
                        제10조 (회원 정보의 제공 및 변경) ① 회원은 이 약관에 의하여 회사에 정보를 제공하여야 하는 경우에는 진실된 정보를 제공하여야 하며, 허위정보 제공으로 인해 발생한 불이익에 대해서는 보호받지 못합니다.<br/>
                        ② 회원은 개인정보관리화면을 통하여 언제든지 자신의 개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 필요한 실명, 계정(ID) 등은 수정이 불가능합니다.<br/>
                        ③ 회원은 회원가입 신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 기타 방법으로 회사에 대하여 그 변경사항을 알려야 합니다.<br/>
                        ④ 제2항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여 회사는 책임을 지지 않습니다.<br/>
<br/>
                        제11조 (개인정보의 보호 및 관리) ① 회사는 관계 법령이 정하는 바에 따라 계정정보를 포함한 회원의 개인정보를 보호하기 위해 노력합니다. 회원 개인정보의 보호 및 사용에 대해서는 관계법령 및 회사가 별도로 고지하는 개인정보취급방침이 적용됩니다.<br/>
                        ② 서비스의 일부로 제공되는 개별 서비스를 제외한 것으로서 홈페이지 및 서비스별 웹사이트에서 단순히 링크된 제3자 제공의 서비스에 대하여는 회사의 개인정보취급방침이 적용되지 않습니다.<br/>
                        ③ 회사는 회원의 귀책사유로 인하여 노출된 회원의 계정정보를 포함한 모든 정보에 대해서 일체의 책임을 지지 않습니다.<br/>
<br/>
                        제3장 계약 당사자의 의무<br/>
<br/>
                        제12조 (회사의 의무) ① 회사는 관련 법령을 준수하고, 이 약관이 정하는 권리의 행사와 의무의 이행을 신의에 따라 성실하게 합니다.<br/>
                        ② 회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보(신용정보 포함)보호를 위해 보안시스템을 갖추어야 하며 개인정보취급방침을 공시하고 준수합니다. 회사는 이 약관 및 개인정보취급방침에서 정한 경우를 제외하고는 회원의 개인정보가 제3자에게 공개 또는 제공되지 않도록 합니다.<br/>
                        ③ 회사는 계속적이고 안정적인 서비스의 제공을 위하여 서비스 개선을 하던 중 설비에 장애가 생기거나 데이터 등이 멸실된 때에는 천재지변, 비상사태, 현재의 기술로는 해결이 불가능한 결함 및 장애 등 부득이한 사유가 없는 한 지체 없이 이를 수리 또는 복구하도록 최선의 노력을 다합니다.<br/>
<br/>
                        제13조 (회원의 의무) ① 회원은 다음 행위를 하여서는 안 됩니다.<br/>
                            1. 신청 또는 변경 시 허위내용의 기재<br/>
                            2. 타인의 정보도용<br/>
                            3. 회사의 임직원, 운영자, 기타 관계자를 사칭하는 행위<br/>
                            4. 회사가 게시한 정보의 변경<br/>
                            5. 회사가 금지한 정보(컴퓨터 프로그램 등)의 송신 또는 게시<br/>
                            6. 회사가 제공 또는 승인하지 아니한 컴퓨터 프로그램이나 기기 또는 장치를 제작, 배포, 이용, 광고하는 행위<br/>
                            7. 회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해<br/>
                            8. 회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위<br/>
<br/>
<br/>
                        제4장 서비스 이용<br/>
<br/>
                        제14조 (서비스의 변경 및 내용수정) ① 회원은 회사가 제공하는 서비스를 이 약관, 운영정책 및 회사가 설정한 규칙에 따라 이용할 수 있습니다.<br/>
                        ② 회사가 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 서비스 수정(패치)을 할 수 있으며, 서비스 수정(패치)을 하는 경우에는 변경 후 해당 사이트 등을 통하여 공지합니다.<br/>
<br/>
                        제15조 (서비스의 제공 및 중단 등) ① 서비스는 회사의 영업방침에 따라 정해진 시간동안 제공합니다. 회사는 서비스 제공시간을 서비스 홈페이지(https://fxcity.co.kr)에 적절한 방법으로 안내합니다.<br/>
                        ② 제1항에도 불구하고, 다음 각 호의 어느 하나에 해당하는 경우에는 일정한 시간동안 서비스가 제공되지 아니할 수 있으며, 해당 시간 동안 회사는 서비스를 제공할 의무가 없습니다.<br/>
                            1. 컴퓨터 등 정보통신설비의 보수점검, 교체, 정기점검 또는 서비스의 수정을 위하여 필요한 경우<br/>
                            2. 해킹 등의 전자적 침해사고, 통신사고, 회원들의 비정상적인 이용행태, 미처 예상하지 못한 서비스의 불안정성에 대응하기 위하여 필요한 경우<br/>
                            3. 관련 법령에서 특정 시간 또는 방법으로 서비스 제공을 금지하는 경우<br/>
                            4. 천재지변, 비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 제공이 불가능할 경우<br/>
                            5. 회사의 분할, 합병, 영업양도, 영업의 폐지, 당해 서비스의 수익 악화 등 회사의 경영상 중대한 필요에 의한 경우<br/>
                        ③ 제2항 제2호의 경우, 회사는 사전 고지 없이 서비스를 일시 중지할 수 있습니다. 회사는 이러한 경우 그 사실을 서비스 홈페이지(https://fxcity.co.kr)에 사후 고지할 수 있습니다.<br/>
                        ④ 회사는 회사가 제공하는 서비스 이용과 관련하여 이용자에게 발생한 어떠한 손해에 대해서도 책임을 지지 않습니다.<br/>
<br/>
                        제16조 (입출금방법) ① 입금을 신청한 회원은 신청 후 회사에서 제공하는 방법으로 지급하여야 합니다. 무통장입금의 방식으로 신청한 회원은 신청 완료 후 1시간 이내에 해당 금액을 입금하여야 하며, 1시간 이내에 입금하지 않을 시 에는 그 신청을 철회한 것으로 봅니다.<br/>
                        ② 출금은 회원가입 시 등록한 은행계좌로 회사가 정한 출금시간에 따라 출금됩니다.<br/>
                        ③ 회원이 입금한 금액보다 많은 금액(보증금 증가)이 충전된 경우 당사는 회원 계정에서 직접 차감 할수있다. 위 절차를 회원이 고의로 반복하거나 악용하는 경우, 해당 회원의 회원 계정을 폐쇄하거나 이용 정지 조치할 수 있으며 이에 대한 민·형사 상 책임을 물을 수 있습니다<br/>
<br/>
                        제17조 (이용상품) ① 서비스의 이용에 대한 대금지급방법은 회사가 미리 정한 방법을 통하여 할 수 있습니다.<br/>
                        ② 서비스 이용과 관련하여, 회원이 선택한 서비스 이용신청 시, 다음 각 호에 해당하는 사항을 준수하여야 합니다.<br/>
                        1.회원의 “손익 분배 계약서“ 신청은 반드시 정당한 수익과 경제 지식을 기반으로 한 것일 때 유효하며, 회원이 반드시 여기에 동의하는 것을 전제로 “손익 분배 계약서”를 신청하였을 때 회사가 상기 약정서를 승인함을 고지하는 바이며, 회사는 어떠한 경우든 회원이 자신의 재산을 걸고 운을 통해 재물의 득실을 결정하는 행위를 금합니다. 회사의 회원으로 가입한 고객은 “손익 분배 계약서“ 신청을 하고자 하는 경우 반드시 상법 등에 터를 둔 회사 이용 약관을 숙지하기로 하며, 회원은 선물사의 실 계좌 개설 조회하기 차트를 통하여 GBP/AUD 중 파운드 대비 호주달러 가치변동 경제를 지식기반으로 숙지한 뒤에 회사의 웹 기반 “손익 분배 계약서” 신청을 해야 합니다.<br/>
                        2. 회원이 회사에게 발생될 상품의 손익 분배 서비스가 경제적으로 부정하다고 판단할 시, 스스로 회원 탈퇴 의무를 부담하기로 합니다.<br/>
                        3. 약속한 거래 방법이 아닌 부정한 방법을 사용하여 운영하거나 투자에 대한 결과를 변경하지 않는 이상 회원은 당사에게 민·형사 상 책임을 물을 수 없습니다.<br/>
                        4. 3항에 의거한 이유 외의 책임은 회원에게 있으며 법적인 문제에 대해 피해 발생 시 모든 책임은 회원에게 있습니다.<br/>
                        5. 회원이 서비스 주문을 완료했음에도 보증금이 차감되지 않는 경우, 회사는 회원 계정에서 직접 차감 또는 추가 주문 완료 된 부분을 삭제할 수 있습니다. 위 절차를 회원이 고의로 반복하거나 악용하는 경우, 해당 회원의 회원 계정을 폐쇄하거나 이용 정지 조치할 수 있으며 이에 대한 민·형사 상 책임을 물을 수 있습니다.<br/>
                        6. 프로그램 오류로 인하여 실격이 실현으로 잘못 처리가 되어 회원에게 금액이 지급된 경우, 회사는 오류를 정정하여 회원 계정에서 해당 금액을 차감할 수 있습니다.<br/>
                        7. 프로그램 오류로 인하여 실현이 실격으로 잘못 처리가 되어 회원에게 금액이 차감된 경우, 회사는 오류를 정정하여 회원 계정으로 해당 금액을 지급할 수 있습니다.<br/>
                        8. 프로그램 오류로 인하여 무효가 실현 또는 실격으로 처리되어 회원에게 금액이 지급 또는 차감된 경우, 회사는 오류를 정정하여 회원 계정에서 해당 금액을 차감 또는 지급할 수 있습니다.<br/>
                        9. 09시부터 익일 04시까지 거래가 가능합니다. 만약 익일 04시 이전에 들어간 주문이 05시 이전에 실현기준에 도달하지 못하면 무효처리가 됩니다.<br/>
                        10. 투자 거래 별로 마감 시간에 따라 거래가 불가합니다.<br/>
                        11. 실현 기준은 1,2,3,5분봉 안의 최초 도달한 포지션에 따라 처리됩니다.<br/>
                        12. 수량은 회원별로 본사 기준 약관 제22조에 의심이 되는 경우 개별 관리가 가능하며 이에 회원은 이의 제기를 할 수 없습니다.<br/>
                        13. 회원들에게 공평한 투자 여건을 조성하기 위해 특정 투자자가 수량을 독점하는 경우 제한될수 있습니다.<br/>
<br/>
<br/>
<br/>
<br/>
                        제18조 (저작권 등의 귀속) ① 서비스 내 회사가 제작한 콘텐츠에 대한 저작권 기타 지적재산권은 회사의 소유입니다.<br/>
                        ② 회원은 회사가 제공하는 서비스를 이용함으로써 얻은 정보 중 회사 또는 제공업체에 지적재산권이 귀속된 정보를 회사 또는 제공업체의 사전승낙 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.<br/>
<br/>
                        제5장 청약철회, 계약 해제·해지 및 이용제한<br/>
<br/>
                        제19조 (회원의 해제 및 해지) ① 회원은 서비스 이용계약을 해지(이하 '회원탈퇴'라 한다)할 수 있습니다. 회원이 회원탈퇴를 신청한 경우 회사는 회원 본인 여부를 확인할 수 있으며, 해당 회원이 본인으로 확인되는 경우에 회원의 신청에 따른 조치를 취합니다.<br/>
                        ② 회원이 회원탈퇴를 원하는 경우에는 고객센터 및 서비스 내 회원탈퇴 절차를 통하여 회원탈퇴를 할 수 있습니다.<br/>
<br/>
                        제20조 (회사의 해제 및 해지) ① 회사는 회원이 이 약관에서 정한 회원의 의무를 위반한 경우에는 회원에 대한 사전 통보 후 계약을 해지할 수 있습니다. 다만, 회원이 현행법 위반 및 고의 또는 중대한 과실로 회사에 손해를 입힌 경우에는 사전 통보 없이 이용계약을 해지할 수 있습니다.<br/>
                        ② 회사가 이용계약을 해지하는 경우 회사는 회원에게 서면, 전자우편 또는 이에 준하는 방법으로 다음 각 호의 사항을 회원에게 통보합니다.<br/>
                            1. 해지사유<br/>
                            2. 해지일<br/>
                        ③ 제1항 단서의 경우, 회원은 서비스의 사용권한을 상실하고 이로 인한 환불 및 손해배상을 청구할 수 없습니다.<br/>
<br/>
                        제21조 (회원에 대한 서비스 이용제한) ① 회사는 회원에게 다음 호에 따라 회원의 서비스 이용을 제한할 수 있습니다. 이용제한이 이루어지는 구체적인 회원의 의무위반 사유는 제21조에 따라 운영정책에서 정하기로 합니다.<br/>
                            1. 회원 이용제한 : 일정기간 또는 영구히 회원의 서비스 이용을 제한<br/>
                        ② 회사의 이용제한이 정당한 경우에 회사는 이용제한으로 인하여 회원이 입은 손해를 배상하지 않습니다.<br/>
                            <br/>
                        제22조 (잠정조치로서의 이용제한) ① 회사는 다음 각 호에 해당하는 문제에 대한 조사가 완료될 때까지 계정을 정지할 수 있습니다.<br/>
                            1. 계정이 해킹 또는 도용당하였다는 정당한 신고가 접수된 경우<br/>
                            2. 불법프로그램 사용자, 작업장 등 위법행위자로 합리적으로 의심되는 경우<br/>
                            3. 그 밖에 위 각호에 준하는 사유로 계정의 잠정조치가 필요한 경우<br/>
                            <br/>
                        제23조 (이용제한의 사유와 절차) ① 회사는 위반행위의 내용, 정도, 횟수, 결과 등 제반사정을 고려하여 이용제한이 이루어지는 구체적인 사유 및 절차를 운영정책으로 정합니다.<br/>
                        ② 회사가 정한 이용제한을 하는 경우에는 회원에게 서면 또는 전자우편이나 서비스 홈페이지(https://fxcity.co.kr)에 게재하는 방법으로 다음 각 호의 사항을 회원에게 통보합니다.<br/>
                            1. 이용제한 사유<br/>
                            2. 이용제한 유형<br/>
                            3. 이용제한에 대한 이의신청 방법<br/>
                            <br/>
                        제24조 (이용제한에 대한 이의신청 절차) ① 회원이 회사의 이용제한에 불복하고자 할 때에는 통보를 받은 날로부터 15일 이내에 회사의 이용제한에 불복하는 이유를 기재한 이의신청서를 서면, 전자우편 또는 이에 준하는 방법으로 회사에 제출하여야 합니다.<br/>
                        ② 제1항의 이의신청서를 접수한 회사는 접수한 날로부터 15일 이내에 회원의 불복 이유에 대하여 서면, 전자우편 또는 이에 준하는 방법으로 답변하여야 합니다. 다만, 회사는 15일 이내에 답변이 곤란한 경우 회원에게 그 사유와 처리일정을 통보합니다.<br/>
                        ③ 회사는 위 답변 내용에 따라 상응하는 조치를 취하여야 합니다.<br/>
                            <br/>
                        제6장 손해배상 및 환불 등<br/>
<br/>
                        제25조 (손해배상) ① 회사가 고의 또는 중과실로 회원에게 손해를 끼친 경우, 손해에 대하여 배상할 책임이 있습니다.<br/>
                        ② 회원이 본 약관을 위반하여 회사에 손해를 끼친 경우, 회원은 회사에 대하여 그 손해에 대하여 배상할 책임이 있습니다.<br/>
                            <br/>
                        제26조 (회사의 면책) ① 회사는 전시, 사변, 천재지변, 비상사태, 현재의 기술로는 해결이 불가능한 기술적 결함 기타 불가항력적 사유로 서비스를 제공할 수 없는 경우에는 책임이 면제됩니다.<br/>
                        ②회사는 회원의 귀책사유로 인한 서비스의 중지, 이용장애 및 계약해지에 대하여 책임이 면제됩니다.<br/>
                        ③회사는 기간통신 사업자가 전기통신서비스를 중지하거나 정상적으로 제공하지 아니하여 회원에게 손해가 발생한 경우에 대해서 회사의 고의 또는 중대한 과실이 없는 한 책임이 면제됩니다.<br/>
                        ④회사는 사전에 공지된 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 서비스가 중지되거나 장애가 발생한 경우에 대해서 회사의 고의 또는 중대한 과실이 없는 한 책임이 면제됩니다.<br/>
                        ⑤회사는 회원의 컴퓨터 환경으로 인하여 발생하는 제반 문제 또는 회사의 고의 또는 중대한 과실이 없는 네트워크 환경으로 인하여 발생하는 문제에 대해서 책임이 면제됩니다.<br/>
                        ⑥회사는 회원 또는 제3자가 서비스 내 또는 웹사이트 상에 게시 또는 전송한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 대해서는 회사의 고의 또는 중대한 과실이 없는 한 책임이 면제됩니다.<br/>
                        ⑦회사는 회원 상호간 또는 회원과 제3자간에 서비스를 매개로 발생한 분쟁에 대해 개입할 의무가 없으며 이로 인한 손해를 배상할 책임도 없습니다.<br/>
                        ⑧회사는 회원이 서비스를 이용하며 기대하는 결과를 얻지 못하거나 상실한 것에 대하여 책임을 지지 않으며, 서비스에 대한 취사선택 또는 이용으로 발생하는 손해 등에 대해서 회사의 고의 또는 중대한 과실이 없는 한 책임이 면제됩니다.<br/>
                            <br/>
                        제27조 (회원에 대한 통지) ① 회사가 회원에게 통지를 하는 경우 회원이 지정한 전자우편주소,  전자메모 등으로 할 수 있습니다.<br/>
                        ② 회사는 회원 전체에게 통지를 하는 경우 7일 이상 회사의 사이트의 초기화면에 게시하거나 팝업화면 등을 제시함으로써 제1항의 통지에 갈음할 수 있습니다.<br/>
                            <br/>
                        제28조 (재판권 및 준거법) 본 약관은 대한민국 법률에 따라 규율되고 해석되며, 회사와 회원간에 발생한 분쟁으로 소송이 제기되는 경우, 법령에 정한 절차에 따른 법원을 관할 법원으로 합니다.<br/>
                            <br/>
                        제29조 (양도 소득세법) 소득세법 제 94조 1항 5호에 따라 적용 될 시 년 통산 수익액이 250만원을 초과하는 경우 소득세 신고를 하여야 하며 납세의 의무는 회원에게 있습니다.<br/>
                        </pre>
                </div>
                <span className={TwoAgree ? "inputset ckbox on" : "inputset ckbox"}>
                        <label htmlFor="useAgree2" style={{cursor: "pointer"}}>
                            <input onChange={() => {
                                setTwoAgree(!TwoAgree);
                            }} type="checkbox" id="useAgree2" name="useAgree"/>서비스 이용약관 내용에 동의합니다
                        </label>
                    </span>
            </div>
            <div className="agreebox">
                <h4 className="hd5">메일링서비스(선택)</h4>
                <span className={ThreeAgree ? "inputset ckbox on" : "inputset ckbox"}>
                        <label htmlFor="useAgree3" style={{cursor: "pointer"}}>
                            <input onChange={() => {
                                setThreeAgree(!ThreeAgree);
                            }} type="checkbox" id="useAgree3" name="useAgree"/>
                            정보 메일을 받겠습니다.
                        </label>
                    </span>
                <h4 className="hd5">SMS 수신여부(선택)</h4>
                <span className={FourAgree ? "inputset ckbox on" : "inputset ckbox"}>
                        <label htmlFor="useAgree4" style={{cursor: "pointer"}}>
                            <input onChange={() => {
                                setFourAgree(!FourAgree);
                            }} type="checkbox" id="useAgree4" name="useAgree"/>
                            휴대폰 문자메세지를 받겠습니다.
                        </label>
                    </span>
            </div>
            <h3 className="hd5">개인정보처리 방침안내(필수)</h3>
            <div className="tb_frm ct">
                <table>
                    <colgroup>
                        <col width="33%"/>
                        <col width="33%"/>
                        <col width=""/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th>목적</th>
                        <th>항목</th>
                        <th>보유기간</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>본인인증, 식별</td>
                        <td>아이디, 비밀번호, 이름</td>
                        <td>회원탈퇴시까지</td>
                    </tr>
                    <tr>
                        <td>고객서비스 이용에 관한 통지, cs활용등</td>
                        <td>연락처(이메일, 휴대전화)</td>
                        <td>회원탈퇴시까지</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="agreebox">
                <span className={FiveAgree ? "inputset ckbox on" : "inputset ckbox"}>
                    <label htmlFor="useAgree5" style={{cursor: "pointer"}}>
                        <input onChange={() => {
                            setFiveAgree(!FiveAgree);
                        }} type="checkbox" id="useAgree5" name="useAgree"/>
                        개인정보처리방침안내의 내용에 동의합니다.
                    </label>
                </span>
            </div>
            <div className="btnset ct">
                <div id="btnFormSubmit" className="btn submit" style={{cursor: "pointer"}} onClick={onRegister}>회원가입
                </div>
                <Link to="/" className="btn cancel">취소</Link>
            </div>
        </React.Fragment>
    );
};

export default RegisterForm;