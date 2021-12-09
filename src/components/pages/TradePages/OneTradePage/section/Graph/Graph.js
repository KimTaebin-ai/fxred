import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './Graph.scss';

am4core.useTheme(am4themes_animated);

const Graph = () => {
    useEffect(() => {
        am4core.useTheme(am4themes_animated);

        var chart = am4core.create("chart", am4charts.XYChart);
        chart.paddingRight = 20;

        chart.dateFormatter.inputDateFormat = "HH:mm";

        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 60;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;

        var series = chart.series.push(new am4charts.CandlestickSeries());
        // series.name = "MSFT";
        series.dataFields.dateX = "time";
        series.dataFields.valueY = "close";
        series.dataFields.openValueY = "open";
        series.dataFields.lowValueY = "low";
        series.dataFields.highValueY = "high";
        series.tooltipText = "시가: [bold]{openValueY.value}[/]\n고가: [bold]{lowValueY.value}[/]\n저가: [bold]{highValueY.value}[/]\n종가: [bold]{valueY.value}[/]";

        chart.cursor = new am4charts.XYCursor();

        // chart.scrollbarX = new am4core.Scrollbar();

        chart.data = [
            {
                "time": "16:40",
                "open": "136.65",
                "high": "136.96",
                "low": "134.15",
                "close": "136.49"
            },
            {
                "time": "16:41",
                "open": "135.26",
                "high": "135.95",
                "low": "131.50",
                "close": "131.85"
            },
            {
                "time": "16:42",
                "open": "132.90",
                "high": "135.27",
                "low": "128.30",
                "close": "135.25"
            },
            {
                "time": "16:43",
                "open": "134.94",
                "high": "137.24",
                "low": "132.63",
                "close": "135.03"
            },
            {
                "time": "16:44",
                "open": "136.76",
                "high": "136.86",
                "low": "132.00",
                "close": "134.01"
            },
            {
                "time": "16:45",
                "open": "131.11",
                "high": "133.00",
                "low": "125.09",
                "close": "126.39"
            },
            {
                "time": "16:46",
                "open": "123.12",
                "high": "127.75",
                "low": "120.30",
                "close": "125.00"
            },
            {
                "time": "16:47",
                "open": "128.32",
                "high": "129.35",
                "low": "126.50",
                "close": "127.79"
            },
            {
                "time": "16:48",
                "open": "128.29",
                "high": "128.30",
                "low": "123.71",
                "close": "124.03"
            },
            {
                "time": "16:49",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "16:50",
                "open": "117.01",
                "high": "118.50",
                "low": "111.62",
                "close": "117.05"
            },
            {
                "time": "16:51",
                "open": "136.65",
                "high": "136.96",
                "low": "134.15",
                "close": "136.49"
            },
            {
                "time": "16:52",
                "open": "135.26",
                "high": "135.95",
                "low": "131.50",
                "close": "131.85"
            },
            {
                "time": "16:53",
                "open": "132.90",
                "high": "135.27",
                "low": "128.30",
                "close": "135.25"
            },
            {
                "time": "16:54",
                "open": "134.94",
                "high": "137.24",
                "low": "132.63",
                "close": "135.03"
            },
            {
                "time": "16:55",
                "open": "136.76",
                "high": "136.86",
                "low": "132.00",
                "close": "134.01"
            },
            {
                "time": "16:56",
                "open": "131.11",
                "high": "133.00",
                "low": "125.09",
                "close": "126.39"
            },
            {
                "time": "16:57",
                "open": "123.12",
                "high": "127.75",
                "low": "120.30",
                "close": "125.00"
            },
            {
                "time": "16:58",
                "open": "128.32",
                "high": "129.35",
                "low": "126.50",
                "close": "127.79"
            },
            {
                "time": "16:59",
                "open": "128.29",
                "high": "128.30",
                "low": "123.71",
                "close": "124.03"
            },
            {
                "time": "17:00",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:01",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:02",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:03",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:04",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:05",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:06",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:07",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:08",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:09",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:10",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:11",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:12",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:13",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:14",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:15",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:16",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:17",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:18",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:19",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:20",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:21",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:22",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:23",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:24",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:25",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:26",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:27",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:28",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:29",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:30",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:31",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:32",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:33",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:34",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:35",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:36",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:37",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:38",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:39",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:40",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
            {
                "time": "17:41",
                "open": "122.74",
                "high": "124.86",
                "low": "119.65",
                "close": "119.90"
            },
        ];

        // series.legendSettings.labelText = "[{column.fill}]Open: ${valueY.open} Low: ${valueY.low} High: ${valueY.high} Close: ${valueY.close}[/]";

        // series.legendSettings.itemLabelText = "[{column.fill}]Open: ${openValueY.value} Low: ${lowValueY.value} High: ${highValueY.value} Close: ${valueY.value}[/]";

// Legend
//         chart.legend = new am4charts.Legend();

    }, []);

    return (
        <React.Fragment>
            <div className="graph">
                <div className="chart_row">
                    <div className="chart_col">
                        <div className="chart_ctr">
                            <span className="currenttime">
                                <span className="tit">1분거래</span>
                                <span id="curChartTime">09일 10시 51분</span>
                            </span>
                            <span className="ctrset">
                                <Link to="" className="chartbtn plus"/>
                                <Link to="" className="chartbtn ms"/>
                            </span>
                        </div>
                        <div className="chart_inner" id="chart" style={{position: "relative"}}>
                            <div dir="ltr" className="resize-sensor"
                                 style={{
                                     pointerEvents: "none",
                                     position: "absolute",
                                     left: "0",
                                     top: "0",
                                     right: "0",
                                     bottom: "0",
                                     overflow: "hidden",
                                     zIndex: "-1",
                                     visibility: "hidden",
                                     maxWidth: "100%"
                                 }}>
                                <div className="resize-sensor-expand"
                                     style={{
                                         pointerEvents: "none",
                                         position: "absolute",
                                         left: "0",
                                         top: "0px",
                                         right: "0",
                                         bottom: "0",
                                         overflow: "hidden",
                                         zIndex: "-1",
                                         visibility: "hidden",
                                         maxWidth: "100%"
                                     }}>
                                    <div style={{
                                        position: "absolute",
                                        left: "0",
                                        top: "0",
                                        transition: "all 0s ease 0s",
                                        width: "865px",
                                        height: "350px"
                                    }}>

                                    </div>
                                </div>
                                <div className="resize-sensor-shrink"
                                     style={{
                                         pointerEvents: "none",
                                         position: "absolute",
                                         left: "0",
                                         top: "0",
                                         right: "0",
                                         bottom: "0",
                                         overflow: "hidden",
                                         zIndex: "-1",
                                         visibility: "hidden",
                                         maxWidth: "100%"
                                     }}>
                                    <div style={{
                                        position: "absolute",
                                        left: "0",
                                        top: "0",
                                        transition: "all 0s ease 0s",
                                        width: "200%",
                                        height: "200%"
                                    }}>

                                    </div>
                                </div>
                            </div>
                            <div style={{width: "100%", height: "100%", position: "relative", left: "-0.5"}}>

                            </div>
                        </div>
                    </div>
                    <div className="chart_col currentview">
                        <div className="current_txt" id="current_price" style={{backgroundColor: "rgb(255, 0, 0)"}}>
                            2.03088
                        </div>
                    </div>
                    {/*<div className="tooltip">*/}
                    {/*    <Link to="" className="txt">Tip</Link>*/}
                    {/*</div>*/}
                    {/*<Link to="" className="hidden_tiparea">*/}
                    {/*    <p className="stxt">*/}
                    {/*        현재 FX시티는 1 . 2 . 5분 거래투자하기가 있으며 , 1분게임은 10PIP / 2분게임은 20PIP / 5분게임은 50PIP의 변동값으로 실현/실격이*/}
                    {/*        결정됩니다.*/}
                    {/*    </p>*/}
                    {/*    <p className="stxt">*/}
                    {/*        상품의 계약실현/실격의 마감은 상품시작시간 시작가를 기준으로 하나금융투자의 차트값대로 진행합니다.*/}
                    {/*        매수(고가기준PIP변동), 매도(저가기준PIP변동) 값에 도달했을 때까 결과처리값 기준입니다.*/}
                    {/*    </p>*/}
                    {/*    <h4 className="hd4">EX)1분투자</h4>*/}
                    {/*    <p className="stxt">*/}
                    {/*        매수 시작가 1.00050 에서 10PIP 이 증가한 1.00060까지 도달햇을경우 결과값 매수처리*/}
                    {/*    </p>*/}
                    {/*    <p className="stxt">*/}
                    {/*        매도 시작가 1.00050 에서10PIP 이 감소한 1.00040 까지 도달햇을경우 결과값 매도처리*/}
                    {/*    </p>*/}
                    {/*</Link>*/}
                </div>
                <Link to="" className="hidden_tiparea"/>

            </div>
            <div className="graph_infoset">
                <div className="titset">
                    <h3 className="hd3">종목 GBP/AUD</h3>
                </div>
                <div className="innercont">
                    <div className="ovscroll">
                        <div className="tb_frm">
                            <table>
                                <colgroup>
                                    <col width="40%"/>
                                    <col width="32%"/>
                                    <col width="28%"/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th scope="col">진행시간</th>
                                    <th scope="col">시가</th>
                                    <th scope="col">진행사항</th>
                                </tr>
                                </thead>
                                <tbody id="resultList">
                                <tr>
                                    <td>09일 10시 51분</td>
                                    <td/>
                                    <td><span className="btn progress">진행중</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 50분</td>
                                    <td>2.00809</td>
                                    <td><span className="btn buy">매수</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 49분</td>
                                    <td>2.00775</td>
                                    <td><span className="btn buy">매수</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 48분</td>
                                    <td>2.00620</td>
                                    <td><span className="btn buy">매수</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 47분</td>
                                    <td>2.00575</td>
                                    <td><span className="btn sell">매도</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 46분</td>
                                    <td>2.00076</td>
                                    <td><span className="btn buy">매수</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 45분</td>
                                    <td>2.00019</td>
                                    <td><span className="btn sell">매도</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 44분</td>
                                    <td>2.00731</td>
                                    <td><span className="btn buy">매수</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 43분</td>
                                    <td>1.99781</td>
                                    <td><span className="btn buy">매수</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 42분</td>
                                    <td>1.99374</td>
                                    <td><span className="btn buy">매수</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 41분</td>
                                    <td>1.99229</td>
                                    <td><span className="btn buy">매수</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 40분</td>
                                    <td>1.99146</td>
                                    <td><span className="btn buy">매수</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 39분</td>
                                    <td>1.99147</td>
                                    <td><span className="btn sell">매도</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 38분</td>
                                    <td>1.99204</td>
                                    <td><span className="btn sell">매도</span></td>
                                </tr>
                                <tr>
                                    <td>09일 10시 37분</td>
                                    <td>1.98955</td>
                                    <td><span className="btn sell">매도</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="btnset ct">
                        <a href="#fsModal" className="btn co3 arr" data-toggle="modal">나의 거래내역</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Graph;