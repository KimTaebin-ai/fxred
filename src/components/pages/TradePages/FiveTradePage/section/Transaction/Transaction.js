import React, {useEffect, useState} from 'react';
import moment from "moment";

const Transaction = () => {
    const [Deposit, setDeposit] = useState(0);

    const [RemainTime, setRemainTime] = useState("");
    const [NextTime, setNextTime] = useState("");

    const [oneBuyCount, setoneBuyCount] = useState(0);
    const [twoBuyCount, settwoBuyCount] = useState(0);
    const [threeBuyCount, setthreeBuyCount] = useState(0);
    const [fourBuyCount, setfourBuyCount] = useState(0);
    const [BuyPrice, setBuyPrice] = useState(0);

    const [oneSellCount, setoneSellCount] = useState(0);
    const [twoSellCount, settwoSellCount] = useState(0);
    const [threeSellCount, setthreeSellCount] = useState(0);
    const [fourSellCount, setfourSellCount] = useState(0);
    const [SellPrice, setSellPrice] = useState(0);
    // let variable = {데이터값: localStorage.getItem('userId')};

    useEffect(() => {
        //서버 통신
        // Axios.post('api주소', variable)
        //     .then(response => {
        //         if (response.success) {
        //             setDeposit(response.data);
        //         } else {
        //             console.log('서버 통신 에러');
        //         }
        //     })

        //api 연결할 때 지워줘야함
        setDeposit("5000");
    }, []);

    const getTime = () => {
        const stDate = new Date().getTime();

        //서버에서 오는 값으로 수정해야 함
        const edDate = new Date('2020-03-11 20:00:00').getTime();

        let RemainDate = edDate - stDate;

        let nextTime = moment(edDate).add(5, "m").toDate();

        let hours = nextTime.getHours();
        let min = nextTime.getMinutes();

        let data = hours + "시 " + min + "분";

        setNextTime(data);

        const remain = () => {
            let min = Math.floor((RemainDate % (1000 * 60 * 60)) / (1000*60));
            let sec= Math.floor((RemainDate % (1000 * 60)) / 1000);

            let data = min + ":" + sec ;

            setRemainTime(data);
        };

        remain();
    };

    setInterval(getTime, 1000);

    const onBuyingPlus = (i) => {
        if (Deposit < i * 5000) {
            // console.log('보증금 부족');
            alert('보증금 부족');
            return;
        } else if (i === 1) {
            if (oneBuyCount === 10) {
                alert("최대수량은 10까지 가능합니다");
                return;
            } else {
                setoneBuyCount(oneBuyCount + 1);
                setBuyPrice(BuyPrice + i);
            }
        } else if (i === 2) {
            if (twoBuyCount === 10) {
                alert("최대수량은 10까지 가능합니다");
                return;
            } else {
                settwoBuyCount(twoBuyCount + 1);
                setBuyPrice(BuyPrice + i);
            }
        } else if (i === 10) {
            if (threeBuyCount === 10) {
                alert("최대수량은 10까지 가능합니다");
                return;
            } else {
                setthreeBuyCount(threeBuyCount + 1);
                setBuyPrice(BuyPrice + i);
            }
        } else if (i === 20) {
            if (fourBuyCount === 10) {
                alert("최대수량은 10까지 가능합니다");
                return;
            } else {
                setfourBuyCount(fourBuyCount + 1);
                setBuyPrice(BuyPrice + i);
            }
        }
    };

    const onBuyingClick = () => {
        if (BuyPrice === 0) {
            // console.log("수량이 0입니다");
            alert("수량이 0입니다");
        } else if (Deposit < BuyPrice * 5000) {
            alert('보증금 부족');
            return;
        } else {
            alert("매수 성공");

            //서버 통신 처리
            setoneBuyCount(0);

            settwoBuyCount(0);

            setthreeBuyCount(0);

            setfourBuyCount(0);

            setBuyPrice(0);

            setDeposit(Deposit - (BuyPrice * 5000));
        }
    };

    const onSellingPlus = (i) => {
        if (Deposit < i * 5000) {
            // console.log('보증금 부족');
            alert('보증금 부족');
            return;
        } else if (i === 1) {
            if (oneSellCount === 10) {
                alert("최대수량은 10까지 가능합니다");
                return;
            } else {
                setoneSellCount(oneSellCount + 1);
                setSellPrice(SellPrice + i);
            }
        } else if (i === 2) {
            if (twoSellCount === 10) {
                alert("최대수량은 10까지 가능합니다");
                return;
            } else {
                settwoSellCount(twoSellCount + 1);
                setSellPrice(SellPrice + i);
            }
        } else if (i === 10) {
            if (threeSellCount === 10) {
                alert("최대수량은 10까지 가능합니다");
                return;
            } else {
                setthreeSellCount(threeSellCount + 1);
                setSellPrice(SellPrice + i);
            }
        } else if (i === 20) {
            if (fourSellCount === 10) {
                alert("최대수량은 10까지 가능합니다");
                return;
            } else {
                setfourSellCount(fourSellCount + 1);
                setSellPrice(SellPrice + i);
            }
        }
    };

    const onSellingClick = () => {
        if (SellPrice === 0) {
            // console.log("수량이 0입니다");
            alert("수량이 0입니다");
        } else if (Deposit < SellPrice * 5000) {
            alert('보증금 부족');
            return;
        } else {
            alert("매도 성공")

            //서버 통신 처리
            setoneSellCount(0);

            settwoSellCount(0);

            setthreeSellCount(0);

            setfourSellCount(0);

            setSellPrice(0);

            setDeposit(Deposit - SellPrice);
        }
    };

    const onCancelClick = () => {
        setoneBuyCount(0);

        settwoBuyCount(0);

        setthreeBuyCount(0);

        setfourBuyCount(0);

        setBuyPrice(0);

        setoneSellCount(0);

        settwoSellCount(0);

        setthreeSellCount(0);

        setfourSellCount(0);

        setSellPrice(0);
    };

    return (
        <React.Fragment>
            <div className="contract_timeset">
                <div className="timeset">
                    <div className="rtime">
                        <p className="stxt icon">남은 해당대여 계약시간</p>
                        <span className="time" id="nextLeftTime">{RemainTime ? RemainTime : "계산중.."}</span>
                        <span className="inputset">
                            <select id="selChangeTradeTime">
                                <option value="1">1분투자</option>
                                <option value="2">2분투자</option>
                                <option value="5" defaultValue>5분투자</option>
                            </select>
                        </span>
                    </div>
                    <div className="atime">
                        <p className="stxt">다음 계약 시간</p>
                        <span className="time" id="nextStartTime">{NextTime ? NextTime : "계산중..."}</span>
                    </div>
                </div>
            </div>
            <div className="contractset">
                <div className="contract_infoset">
                    <div className="topcont">
                        <div className="rtcont">
                            <div className="tb_frm" id="dealViewtb">
                                <table>
                                    <colgroup>
                                        <col/>
                                        <col/>
                                        <col/>
                                        <col/>
                                        <col/>
                                    </colgroup>
                                    <thead>
                                    <tr className="dealViewtb_colgrid1">
                                        <th scope="col" className="mbhidden">다음<br className="mb_view"/>계약시간
                                        </th>
                                        <th scope="col">수량</th>
                                        <th scope="col">실현실격</th>
                                        <th scope="col">
                                            <div className="posbox">
                                                <span className="contxt">매수</span>
                                                <span className="percent co1" id="buyRatio"
                                                      style={{display: "none"}}>0%</span>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="posbox">
                                                <span className="contxt">매도</span>
                                                <span className="percent co2" id="sellRatio"
                                                      style={{display: "none"}}>0%</span>
                                            </div>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="dealViewtb_colgrid1">
                                        <td className="mbhidden" id="nextTime0">{NextTime}</td>
                                        <td>1Lot</td>
                                        <td>
                                            50
                                            <span className="ctrset">
                                                    <span className="badge limit"/>
                                                    <span className="badge stop"/>
                                                </span>
                                        </td>
                                        <td className="rowflex">
                                            <div className="rowgrid" style={{cursor: "pointer"}} onClick={() => {
                                                onBuyingPlus(1)
                                            }}>
                                                        <span className="btn_pointtype">
                                                            <div className="btn buy js_buy"
                                                                 //onClick
                                                                 data-idx="0"
                                                                 data-price="5,000">5,000({oneBuyCount})
                                                            </div>
                                                            <span className="maxcountnum js_left_lot0">0</span>
                                                        </span>
                                                <div className="btn etc1 js_max_buy"
                                                     data-idx="0">MAX
                                                </div>
                                            </div>
                                        </td>
                                        <td className="rowflex">
                                            <div className="rowgrid" style={{cursor: "pointer"}} onClick={() => {
                                                onSellingPlus(1)
                                            }}>
                                                        <span className="btn_pointtype co1">
                                                            <div className="btn sell js_sell" data-idx="0"
                                                                 data-price="5,000">
                                                            5,000({oneSellCount})
                                                            </div>
                                                            <span className="maxcountnum js_left_lot0">0</span>
                                                        </span>
                                                <div className="btn etc1 js_max_sell"
                                                     data-idx="0">
                                                    MAX
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="dealViewtb_colgrid1">
                                        <td className="mbhidden" id="nextTime1">{NextTime}</td>
                                        <td>2Lot</td>
                                        <td>
                                            50
                                            <span className="ctrset">
                                                        <span className="badge limit"/>
                                                        <span className="badge stop"/>
                                                    </span>
                                        </td>
                                        <td className="rowflex">
                                            <div className="rowgrid" style={{cursor: "pointer"}} onClick={() => {
                                                onBuyingPlus(2)
                                            }}>
                                                        <span className="btn_pointtype">
                                                            <div className="btn buy js_buy"
                                                                 //onClick data-idx="1"
                                                                 data-price="10,000">
                                                            10,000({twoBuyCount})
                                                            </div>
                                                            <span className="maxcountnum js_left_lot1">0</span>
                                                        </span>
                                                <div className="btn etc1 js_max_buy"
                                                     data-idx="1">MAX
                                                </div>
                                            </div>
                                        </td>
                                        <td className="rowflex">
                                            <div className="rowgrid" style={{cursor: "pointer"}} onClick={() => {
                                                onSellingPlus(2)
                                            }}>
                                                    <span className="btn_pointtype co1">
                                                        <div className="btn sell js_sell" data-idx="1"
                                                             data-price="10,000">
                                                        10,000({twoSellCount})
                                                        </div>
                                                        <span className="maxcountnum js_left_lot1">0</span>
                                                    </span>
                                                <div className="btn etc1 js_max_sell"
                                                     data-idx="1">MAX
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="dealViewtb_colgrid1">
                                        <td className="mbhidden" id="nextTime2">{NextTime}</td>
                                        <td>10Lot</td>
                                        <td>
                                            50
                                            <span className="ctrset">
                                                        <span className="badge limit"/>
                                                        <span className="badge stop"/>
                                                    </span>
                                        </td>
                                        <td className="rowflex">
                                            <div className="rowgrid" style={{cursor: "pointer"}} onClick={() => {
                                                onBuyingPlus(10)
                                            }}>
                                                    <span className="btn_pointtype">
                                                        <div className="btn buy js_buy"
                                                             //onClick data-idx="2"
                                                             data-price="50,000">
                                                        50,000({threeBuyCount})
                                                        </div>
                                                        <span className="maxcountnum js_left_lot2">0</span>
                                                    </span>
                                                <div className="btn etc1 js_max_buy"
                                                     data-idx="2">MAX
                                                </div>
                                            </div>
                                        </td>
                                        <td className="rowflex">
                                            <div className="rowgrid" style={{cursor: "pointer"}} onClick={() => {
                                                onSellingPlus(10)
                                            }}>
                                                        <span className="btn_pointtype co1">
                                                            <div className="btn sell js_sell" data-idx="2"
                                                                 data-price="50,000">
                                                            50,000({threeSellCount})
                                                        </div>
                                                        <span className="maxcountnum js_left_lot2">0</span>
                                                        </span>
                                                <div className="btn etc1 js_max_sell"
                                                     data-idx="2">MAX
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="dealViewtb_colgrid1">
                                        <td className="mbhidden" id="nextTime3">{NextTime}</td>
                                        <td>20Lot</td>
                                        <td>
                                            50
                                            <span className="ctrset">
                                                        <span className="badge limit"/>
                                                        <span className="badge stop"/>
                                                    </span>
                                        </td>
                                        <td className="rowflex">
                                            <div className="rowgrid" style={{cursor: "pointer"}} onClick={() => {
                                                onBuyingPlus(20)
                                            }}>
                                                        <span className="btn_pointtype">
                                                            <div className="btn buy js_buy"
                                                                 //onClick data-idx="3"
                                                                 data-price="100,000">
                                                            100,000({fourBuyCount})
                                                            </div>
                                                            <span className="maxcountnum js_left_lot3">0</span>
                                                        </span>
                                                <div className="btn etc1 js_max_buy"
                                                     data-idx="3">MAX
                                                </div>
                                            </div>
                                        </td>
                                        <td className="rowflex">
                                            <div className="rowgrid" style={{cursor: "pointer"}} onClick={() => {
                                                onSellingPlus(20)
                                            }}>
                                                        <span className="btn_pointtype co1">
                                                            <div className="btn sell js_sell" data-idx="3"
                                                                 data-price="100,000">
                                                            100,000({fourSellCount})
                                                            </div>
                                                        <span className="maxcountnum js_left_lot3">0</span>
                                                        </span>
                                                <div className="btn etc1 js_max_sell"
                                                     data-idx="3">MAX
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th className="rt adjustprice" colSpan="3">신청금액</th>
                                        <td><em className="point2" id="textBuySum">{BuyPrice * 5000}</em></td>
                                        <td><em className="point1" id="textSellSum">{SellPrice * 5000}</em></td>
                                    </tr>
                                    <tr className="apply">
                                        <td className="adjustprice" colSpan="3">
                                            <ul className="sblist">
                                                <li>
                                                    <span className="tit">매수 거래시</span>
                                                    STOP실적 <em className="point1">10</em>
                                                    <span className="grid">/</span>
                                                    Limit실현 <em className="point2">10</em>
                                                </li>
                                                <li>
                                                    <span className="tit">매도 거래시</span>
                                                    STOP실적 <em className="point2">50</em>
                                                    <span className="grid">/</span>
                                                    Limit실현 <em className="point1">50</em>
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                            <div className="btn co1"
                                                 id="btnBuy" style={{cursor: "pointer"}}
                                                 onClick={() => {
                                                     onBuyingClick()
                                                 }}>매수신청
                                            </div>
                                            <div className="btn etc1"
                                                 id="btnReset" style={{cursor: "pointer"}}
                                                 onClick={() => {
                                                     onCancelClick()
                                                 }}>초기화
                                            </div>
                                        </td>
                                        <td>
                                            <div className="btn co2"
                                                 id="btnSell" style={{cursor: "pointer"}}
                                                 onClick={() => {
                                                     onSellingClick()
                                                 }}>매도신청
                                            </div>
                                            <div className="btn etc1"
                                                 id="btnMaximize">MAX
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="adjustprice1 lt" colSpan="5">
                                            <div className="user_info_row">
                                                <div className="round">
                                                    <span className="ico user"/>
                                                </div>
                                                <ul className="infolist">
                                                    <li>
                                                        <dl className="dlist">
                                                            <dt>회원명</dt>
                                                            <dd id="userName">김태빈</dd>
                                                            <input type="hidden" id="userId" value="qwer1234"/>
                                                            <input type="hidden" id="niceName" value="김태빈"/>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <dl className="dlist">
                                                            <dt>지점명</dt>
                                                            <dd>슈어점</dd>
                                                        </dl>
                                                    </li>
                                                </ul>
                                                <ul className="infolist ty1">
                                                    <li>
                                                        <dl className="dlist">
                                                            <dt>종목</dt>
                                                            <dd>GBP / AUD.M</dd>
                                                        </dl>
                                                    </li>
                                                    <li>
                                                        <dl className="dlist">
                                                            <dt>보유보증금</dt>
                                                            <dd><em className="point1" id="deposit">{Deposit}</em>
                                                            </dd>
                                                        </dl>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Transaction;