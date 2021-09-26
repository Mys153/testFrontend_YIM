import React, { Component } from 'react'
import '../css/sider.css'
import '../App.css'
import { Layout, Menu } from 'antd';
import { PieChartOutlined, FileTextOutlined, ExceptionOutlined, PhoneOutlined, } from '@ant-design/icons';

const {Sider} = Layout;

class Sidebar extends Component {
    render() {
        return (
            <Sider className="sidebar">
                <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <a href={"/dashboard"}>แดชบอร์ด</a>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FileTextOutlined />}>
                        การประเมินผลสัมฤทธิ์
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ExceptionOutlined />}>
                        <a href={"/checklist"}>คู่มือการประเมิน</a>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<PhoneOutlined />}>
                        02 186 7111
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
export default Sidebar;