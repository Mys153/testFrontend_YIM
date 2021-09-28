import React, { Component } from 'react'
import '../css/dash.css'
// import '../App.css'
import { Layout, Image } from 'antd';
import { PieChartOutlined, LineChartOutlined, FileTextFilled } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';

import Paper from '@material-ui/core/Paper';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Title, Legend, x } from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import styled from 'styled-components';
import { chart as data } from '../demo-data/data';
import Header from "../pages/header"
import Sider from "../pages/sider"

const Nonebackground = styled.div
    `
  .ant-layout {
    background: none;
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
            // <Nonebackground>
            // <Layout >
            //     <Sider />
            //     <Layout>
            //         <Header />
            //         <Content style={{ margin: '24px 16px 0' }}  >
            //             <div className="site-layout-background " style={{ padding: 24, minHeight: 360 }}>
            //                 <Row gutter={[8, 8]}>
            //                     <Col className="gutter-row" span={6} >
            //                         <div className="box4">
            //                             <div>ผลสัมฤทธิ์</div>
            //                             <div>เปอร์เซ็น
            //                                 <PieChartOutlined className="icon-style" />
            //                             </div>
            //                         </div>
            //                     </Col>
            //                     <Col className="gutter-row" span={6}>
            //                         <div className="box4">
            //                             <div>สัดส่วนร้อยละ</div>
            //                             <div>เปอร์เซ็น
            //                                 <LineChartOutlined className="icon-style" />
            //                             </div>
            //                         </div>
            //                     </Col>
            //                     <Col className="gutter-row" span={6}>
            //                         <div className="box4">
            //                             <div>สัดส่วนร้อยละ</div>
            //                             <div>เปอร์เซ็น
            //                                 <LineChartOutlined className="icon-style" />
            //                             </div>
            //                         </div>
            //                     </Col>
            //                     <Col className="gutter-row" span={6}>
            //                         <div className="box4">
            //                             <div>สัดส่วนร้อยละ</div>
            //                             <div>เปอร์เซ็น
            //                                 <LineChartOutlined className="icon-style" />
            //                             </div>
            //                         </div>
            //                     </Col>
            //                 </Row>
            //                 <Row gutter={[6, 16]}>
            //                     <Col className="gutter-row" span={6}>
            //                         <Col style={{ marginBottom: -5 }}>
            //                             <div className="box-2">
            //                                 {/* <Image
            //                                     className="set-center"
            //                                     width={200}
            //                                     height={200}
            //                                     src="https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2019/03/%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AA%E0%B8%B1%E0%B8%9A-1.jpg"
            //                                 /> */}
            //                                 <div style={{ textAlign: 'center' }}>
            //                                     สมาคมกีฬาฟุตบอลแห่งประเทศไทย
            //                                 </div>
            //                                 <div>เบอร์โทรติดต่อ : 02 186 7581</div>
            //                                 <div>อีเมล์ : user1@gmail.com</div>
            //                                 <div>สถานที่ติดต่อ : บ้าน</div>
            //                                 <div>ชื่อผู้ประสานงาน : User1 Thailand</div>
            //                             </div>
            //                         </Col>
            //                         <Col className="gutter-row" span={24}>
            //                             <div className="box-2">
            //                                 <center>
            //                                     <div><FileTextFilled style={{ color: '#FEDD10' }} />อยู่ระหว่างเก็บหลักฐาน</div>
            //                                     <Divider />
            //                                     <div>สถานะปัจจุบัน</div>
            //                                 </center>
            //                             </div>
            //                         </Col>
            //                     </Col>
            //                     <Col className="gutter-col " span={18}>
            //                         <Paper>
            //                             <Chart
            //                                 data={chartData}
            //                             >
            //                                 <ArgumentAxis />
            //                                 <ValueAxis />
            //                                 <BarSeries
            //                                     name="ค่าที่ได้"
            //                                     valueField="value"
            //                                     argumentField="year"
            //                                     color="#EB2227"
            //                                 />
            //                                 <BarSeries
            //                                     name="ค่ากลาง"
            //                                     valueField="mean"
            //                                     argumentField="year"
            //                                     color="#2A2866"
            //                                 />
            //                                 <Animation />
            //                                 <Legend position="right" rootComponent={Root} labelComponent={Label} />
            //                                 <Title text="" />
            //                                 <Stack />
            //                             </Chart>
            //                         </Paper>
            //                     </Col>
            //                 </Row>
            //             </div>
            //         </Content>
            //     </Layout>
            // </Layout >
            // </Nonebackground>

            <div className="background">
                <Nonebackground>
                    <Layout>
                        <Sider />
                        <Layout>
                            <Header />
                            <Content style={{ margin: '24px 16px 0' }}  >
                                <div className="site-layout-background " style={{ padding: 24, minHeight: 360 }}>
                                    <Row gutter={[8, 8]}>
                                        <Col className="gutter-row" span={6} >
                                            <div className="box4">
                                                <div>ผลสัมฤทธิ์</div>
                                                <div>เปอร์เซ็น
                                                    <PieChartOutlined className="icon-style" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="box4">
                                                <div>สัดส่วนร้อยละ</div>
                                                <div>เปอร์เซ็น
                                                    <LineChartOutlined className="icon-style" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="box4">
                                                <div>สัดส่วนร้อยละ</div>
                                                <div>เปอร์เซ็น
                                                    <LineChartOutlined className="icon-style" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="box4">
                                                <div>สัดส่วนร้อยละ</div>
                                                <div>เปอร์เซ็น
                                                    <LineChartOutlined className="icon-style" />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={[6, 16]}>
                                        <Col className="gutter-row" span={6}>
                                            <Col style={{ marginBottom: -5 }}>
                                                <div className="box-2">
                                                    {/* <Image
                                                className="set-center"
                                                width={200}
                                                height={200}
                                                src="https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2019/03/%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AA%E0%B8%B1%E0%B8%9A-1.jpg"
                                            /> */}
                                                    <div style={{ textAlign: 'center' }}>
                                                        สมาคมกีฬาฟุตบอลแห่งประเทศไทย
                                                    </div>
                                                    <div>เบอร์โทรติดต่อ : 02 186 7581</div>
                                                    <div>อีเมล์ : user1@gmail.com</div>
                                                    <div>สถานที่ติดต่อ : บ้าน</div>
                                                    <div>ชื่อผู้ประสานงาน : User1 Thailand</div>
                                                </div>
                                            </Col>
                                            <Col className="gutter-row" span={24}>
                                                <div className="box-2">
                                                    <center>
                                                        <div><FileTextFilled style={{ color: '#FEDD10' }} />อยู่ระหว่างเก็บหลักฐาน</div>
                                                        <Divider />
                                                        <div>สถานะปัจจุบัน</div>
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
                                                    <Title text="" />
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
