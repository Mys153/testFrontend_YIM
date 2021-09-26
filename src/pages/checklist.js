import React, { Component } from 'react'

import { Layout } from 'antd';
import { Row, Col, Divider } from 'antd';
import Header from "../pages/header"
import Sider from "../pages/sider"

import { Steps, Button, message } from 'antd';

const { Content } = Layout;
const style = { background: '#0092ff', padding: '8px 0' };



class Checklist extends Component {
    render() 
    
    {
        return (
            <Layout>
                <Sider />
                <Layout>
                    <Header />
                    <Content>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={8}>
                            <div className="box4">
                                col-6
                                <Divider />
                            </div>
                        </Col>
                        <Col className="gutter-row" span={16}>
                            <div className="box4">
                                col-6
                                <Divider />
                            </div>
                        </Col>
                    </Row>
                    </div>
                    </Content>  
                </Layout>
            </Layout>
        )
    }
}
export default Checklist;