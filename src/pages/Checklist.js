import React, { Component } from 'react'
import '../App.css'

import { Layout } from 'antd';
import { Row, Col, Divider } from 'antd';
import Header from "./header"
import Sider from "./sider"

import { Steps, Button, message } from 'antd';
import styled from 'styled-components';

const NoneBackground = styled.div
    `
  .ant-layout {
    background: none;
  }
`;
const { Content } = Layout;
const style = { background: '#0092ff', padding: '8px 0' };

class Checklist extends Component {
    render() {
        return (
            <div className="backgroundDetail">
                <NoneBackground>
                    <Layout>
                        <Sider />
                        <Layout>
                            <Header />
                            <Content>
                                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                    <Row gutter={16}>
                                        <Col className="gutter-row" span={24}>
                                            <div className="box4">
                                                col-6
                                                <Divider />
                                            </div>
                                        </Col>
                                        {/* <Col className="gutter-row" span={16}>
                                            <div className="box4">
                                                col-6
                                                <Divider />
                                            </div>
                                        </Col> */}
                                    </Row>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </NoneBackground>
            </div>
        )
    }
}
export default Checklist;