import React, { Component } from 'react'
import '../css/dash.css'
import '../App.css'
import { Layout, Image, Avatar, Typography } from 'antd';
import { PieChartOutlined, LineChartOutlined, FileTextFilled } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';

import Paper from '@material-ui/core/Paper';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Legend } from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import styled from 'styled-components';
import { chart as data } from '../demo-data/data';
import Header from "../pages/header"
import Sider from "../pages/sider"

import ChartPie from '../img/dash/Chart.svg'
import Speed from '../img/dash/speed.svg'
import ThaiLogo from '../img/dash/ThaiLogo.svg'
import Doc_y from '../img/dash/doc_y.svg'

const { Title, Text } = Typography;
const Nonebackground = styled.div
    `
  .ant-layout {
    background: none;
  }
`;
const TextColor = styled.div
    `
  .ant-typography {
    color: #2A2866;
}
`;
const { Content } = Layout;
const legendStyles = () => ({
    root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
    },
});
const legendRootBase = ({ classes, ...restProps }) => (
    <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
    label: {
        whiteSpace: 'nowrap',
    },
});
const legendLabelBase = ({ classes, ...restProps }) => (
    <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }
    render() {
        const { data: chartData } = this.state;
        return (
            <div className="backgroundDetail">
                <Nonebackground>
                    <Layout>
                        <Sider />
                        <Layout>
                            <Header />
                            <Content style={{ margin: '24px 16px 0' }}  >
                                <div style={{ padding: 24, minHeight: 360 }}>
                                    <TextColor>
                                        <Row gutter={[8, 8]}>
                                            <Col className="gutter-row" span={6} >
                                                <div className="box4">
                                                    <Title level={2} className="font">ผลสัมฤทธิ์</Title>
                                                    <img width={150} src={ChartPie} className="icon-style" />
                                                    <h2>100</h2>
                                                    <h2>maysa</h2>
                                                    <h2>100</h2>

                                                </div>
                                            </Col>
                                            <Col className="gutter-row" span={6}>
                                                <div className="box4">
                                                    <Title level={2} className="font">สัดส่วนร้อยละ</Title>
                                                    <img width={150} src={Speed} className="icon-style" />
                                                    <div>เปอร์เซ็น
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className="gutter-row" span={6}>
                                                <div className="box4">
                                                    <Title level={2} className="font">สัดส่วนร้อยละ</Title>
                                                    <img width={150} src={Speed} className="icon-style" />
                                                    <div>เปอร์เซ็น

                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className="gutter-row" span={6}>
                                                <div className="box4">
                                                    <Title level={2} className="font">สัดส่วนร้อยละ</Title>
                                                    <img width={150} src={Speed} className="icon-style" />
                                                    <div>เปอร์เซ็น
                                                
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TextColor>
                                    <Row gutter={[6, 16]}>
                                        <Col className="gutter-row" span={6}>
                                            <Col style={{ marginBottom: -5 }}>
                                                <TextColor>
                                                    <div className="box-2">
                                                        <img width={100} src={ThaiLogo} className="set-center" />
                                                        {/* <Avatar size={64} src={ThaiLogo} className="set-center" /> */}
                                                        <Title level={4} className="font text-center">สมาคมกีฬาฟุตบอลแห่งประเทศไทย</Title>
                                                        <Text>
                                                        <div><b>เบอร์โทรติดต่อ : </b>02 186 7581</div>
                                                        <div><b>อีเมล์ : </b>user1@gmail.com</div>
                                                        <div><b>สถานที่ติดต่อ : </b>บ้าน</div>
                                                        <div><b>ชื่อผู้ประสานงาน : </b>User1 Thailand</div>
                                                        </Text>

                                                    </div>
                                                </TextColor>
                                            </Col>
                                            <Col className="gutter-row" span={24}>
                                                <div className="box-2">
                                                    <center>
                                                        <TextColor>
                                                            <Title level={5} className="font" >
                                                                <img width={20} src={Doc_y} style={{ marginRight: 10 }} />
                                                                อยู่ระหว่างเก็บหลักฐาน
                                                            </Title>
                                                        </TextColor>
                                                        <Divider />
                                                        {/* <Text type="danger"> สถานะปัจจุบัน</Text> */}
                                                        <Title level={5} className="font text-center" type="danger">สถานะปัจจุบัน</Title>
                                                    </center>
                                                </div>
                                            </Col>
                                        </Col>
                                        <Col className="gutter-col " span={18}>
                                            <Paper>
                                                <Chart
                                                    data={chartData}
                                                >
                                                    <ArgumentAxis />
                                                    <ValueAxis />
                                                    <BarSeries
                                                        name="ค่าที่ได้"
                                                        valueField="value"
                                                        argumentField="year"
                                                        color="#EB2227"
                                                    />
                                                    <BarSeries
                                                        name="ค่ากลาง"
                                                        valueField="mean"
                                                        argumentField="year"
                                                        color="#2A2866"
                                                    />
                                                    <Animation />
                                                    <Legend position="right" rootComponent={Root} labelComponent={Label} />
                                                    <Text />
                                                    <Stack />
                                                </Chart>
                                            </Paper>
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
export default Dashboard;
