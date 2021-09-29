import React, { Component } from 'react'
import '../css/content.css'
import '../css/image.css'
import '../App.css'
import { Layout, Image } from 'antd';
import { PieChartOutlined, LineChartOutlined, FileTextFilled } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import { Link } from "react-router-dom";
import { mockdata } from '../demo-data/mockdata'
import Paper from '@material-ui/core/Paper';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Title, Legend } from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import styled from 'styled-components';
import { chart as data } from '../demo-data/data';
import Sider from "./sider"
import Header from "../pages/headermain"
import Lockicon from '../img/icon/Lock.svg'

const Nonebackground = styled.div
    `
  .ant-layout {
    background: none;
  }
`;

const { Content } = Layout;


class Achievement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }
    render() {
        return (
            <div className="background">
                <Nonebackground>
                    {/* <Header /> */}
                    <Layout>
                        <div>                        
                        <Sider />
                        </div>
                        <Layout>
                            <div>
                                <div className="maintext font">
                                    การประเมินผลสัมฤทธิ์
                                </div>
                                <div className="subtext font">สมาคมกีฬาอาชีพฟุตบอล</div>
                            </div>
                            <Content style={{ margin: '34px 16px 0' }}  >
                                <div style={{ padding: 24, minHeight: 360 }}>
                                    <Row gutter={[8, 8]}>
                                        <Col >
                                            <div className="boxcontent">
                                                <div className="texthead font"
                                                    style={{
                                                        padding: 60,

                                                    }}>ปีการประเมินผลสัมฤทธิ์
                                                </div>
                                                <Row>
                                                    <Col className="cradcreateboxtop">
                                                        <div className="textboxtop font">สร้างแบบประเมินผลสัมฤทธิ์</div>
                                                    </Col>
                                                </Row>
                                                {mockdata.map((data, key) => {
                                                    return (
                                                        <div key={key}>
                                                            <Stock
                                                                key={key}
                                                                company={data.company}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </Col>
                                    </Row>

                                </div>

                            </Content>

                        </Layout>

                    </Layout>
                </Nonebackground>
            </div>

        )
    }
}
const Stock = ({ company }) => {
    if (!company) return <div />;
    return (
        <div>
            <Row>
                <Col className="crad" >
                    <div className="textbox font"
                        style={{
                            margin: '20px 30px',
                        }}>{company}
                        <div >
                            <img className="Lockicon" src={Lockicon} />
                        </div>
                    </div>
                    <Row>
                        <Col className="cradcreate">
                            <div >
                               
                                <h5 className="textcrad font">สร้างแบบประเมินล่วงหน้า</h5>
                                </div>
                                <img className="Lockiconback" src={Lockicon} />
                             
                             
                           
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <Row>
                <Col className="cradcreate">
                    <h5 className="textbox font"></h5>
                </Col>
            </Row> */}


        </div>
    );
};
export default Achievement;