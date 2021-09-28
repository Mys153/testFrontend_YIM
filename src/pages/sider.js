import React, { Component } from 'react'
// import '../css/sider.css'
import '../App.css'
import { Layout, Menu, Row, Col, } from 'antd';
import { PieChartOutlined, FileTextOutlined, ExceptionOutlined, PhoneOutlined, } from '@ant-design/icons';

import '../css/pare.css'
import Logo from '../img/Logo.svg';
import one from '../img/icon/1.svg';
import two from '../img/icon/2.svg';
import three from '../img/icon/3.svg';
import { Link } from "react-router-dom";
import styled from 'styled-components';
const NoneBackground = styled.div
    `
  .ant-layout {
    background: none;
  }
`;

const { Sider } = Layout;

class Sidebar extends Component {
    render() {
        return (
            // <Sider className="sidebar">
            //     <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
            //         <Menu.Item key="1" icon={<PieChartOutlined />}>
            //             <a href={"/dashboard"}>แดชบอร์ด</a>
            //         </Menu.Item>
            //         <Menu.Item key="2" icon={<FileTextOutlined />}>
            //             การประเมินผลสัมฤทธิ์
            //         </Menu.Item>
            //         <Menu.Item key="3" icon={<ExceptionOutlined />}>
            //             <a href={"/checklist"}>คู่มือการประเมิน</a>
            //         </Menu.Item>
            //         <Menu.Item key="4" icon={<PhoneOutlined />}>
            //             02 186 7111
            //         </Menu.Item>
            //     </Menu>
            // </Sider>
            <Sider className="sidetab">
                <div className="image">
                    <img src={Logo}
                    />
                </div>
                {/* <Link to="/"> */}
                <Row>
                    <Col className="boxmenu">
                        <img className="iconmenu" src={one} />
                        <div className="textone font"
                        >แดชบอร์ด</div>
                    </Col>
                </Row>
                {/* </Link> */}
                {/* <Link to="/page2"> */}
                <Row>
                    <Col className="boxmenu">
                        <img className="iconmenu" src={two} />
                        <div className="texttwo font">การประเมินผลสัมฤทธิ์</div>
                    </Col>
                </Row>
                {/* </Link> */}
                {/* <Link to="/page15"> */}
                <Row>
                    <Col className="boxmenupic">
                        <img className="iconmenu" src={three} />
                        <div className="textpic font">คู่มือการประเมิน</div>
                    </Col>
                </Row>
                {/* </Link> */}
            </Sider>

        )
    }
}
export default Sidebar;