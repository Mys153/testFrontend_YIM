import React, { Component } from 'react'
import '../css/content.css'
import '../css/image.css'
import '../App.css'
import { Layout, Image } from 'antd';
import { PieChartOutlined, LineChartOutlined, FileTextFilled } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import { mockdata } from '../demo-data/mockdata'
import Paper from '@material-ui/core/Paper';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Title, Legend } from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import styled from 'styled-components';
import { chart as data } from '../demo-data/data';
import Sider from "../pages/sider"
import Header from "../pages/headermain"
import Lockicon from '../img/icon/Lock.svg'

const Nonebackground = styled.div
    `
  .ant-layout {
    background: none;
  }
`;

const { Content } = Layout;


class ManualAchievement extends Component {
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
                        <Sider />
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
export default ManualAchievement;
