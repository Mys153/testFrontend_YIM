import React, { Component } from 'react'
import '../css/headermain.css'
import '../App.css'
import { Layout, Menu, Dropdown, Button, Avatar, Image } from 'antd';
import { Row, Col, Divider } from 'antd';
import { DownOutlined, LockOutlined, UserOutlined, ExportOutlined, } from '@ant-design/icons';

const { Header } = Layout;

const profile = (
    <Menu className="font">
        <Menu.Item key="1" >
            <UserOutlined />
            โปรไฟล์ของฉัน
        </Menu.Item>
        <Menu.Item danger key="2" >
            <ExportOutlined />
            <a href={"/"}>ออกจากระบบ</a>
        </Menu.Item>
    </Menu>
);

class Headbar extends Component {
    render() {
        return (
            
                <Row justify="space-around">                   
                    <Col span={4}>  
                    </Col>
                    <Col span={4}></Col>
                    <Col span={4}>
                        <Avatar size={40} src="https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2019/03/%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AA%E0%B8%B1%E0%B8%9A-1.jpg" />
                        <Dropdown overlay={profile} trigger={['click']}>
                            <a className="profile" onClick={e => e.preventDefault()}>
                                User1
                                <DownOutlined className="gab" />
                            </a>
                        </Dropdown>
                    </Col>
                </Row>
            
        )
    }
}
export default Headbar;