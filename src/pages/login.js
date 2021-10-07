import '../css/login.css'
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Space, Row, Col, Typography, Menu, Dropdown } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, EyeInvisibleFilled, EyeFilled } from '@ant-design/icons';
import Logo from '../img/Logo.svg'
import styled from 'styled-components';

const { Title, Text } = Typography;

const ButtonContainer = styled.div
  `
  .ant-btn-primary {
    background-color: #2A2866;
    border-color: #2A2866
  }
`;
const TextColor = styled.div
  `
  .ant-typography {
    color: #2A2866;
}
`;
const TextColorInput = styled.div
  `
  .ant-input {
    color: #2A2866;
}
`;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" className="font" href="/">
        เข้าสู่ระบบสนามฟุตบอล
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" className="font" href="/">
        เข้าสู่ระบบเจ้าหน้าที่
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" className="font" href="/">
        เข้าสู่ระบบทุกภาคส่วน
      </a>
    </Menu.Item>
  </Menu>
);

class Login extends Component {
  render() {
    return (
      <div class="backgroundLogin">
        <div class="box">
          <div class="center">
            <img width={70} src={Logo} />
            <TextColor>
              <Title level={2} className="font-strong margin-top-logo">
                เข้าสู่ระบบ
              </Title>
              <Space direction="vertical" className="style-inputbox font" >
                <Form size="large" className="style-inputbox">
                  <Title level={4} className="font">อีเมล</Title>
                  <TextColorInput>
                    <Input placeholder="your email" />
                  </TextColorInput>
                </Form>
                <Form size="large" className="style-inputbox">
                  <Title level={4} className="font">รหัสผ่าน</Title>
                  <TextColorInput>
                    <Input.Password placeholder="xxxxxxxxxxx"
                      iconRender={visible => (visible ? <EyeFilled /> : <EyeInvisibleFilled />)}
                    />
                  </TextColorInput>
                </Form>
              </Space>
            </TextColor>
            <div className="font">
              <Row>
                <Col span={12} className="left-text margin-top-bottom">
                  จดจำรหัสผ่าน
                </Col>
                <Col span={12} className="right-text margin-top-bottom">
                  ลืมรหัสผ่าน
                </Col>
              </Row>
            </div>
            <ButtonContainer>
              <Button block className="button font" href={"/dashboard"} type="primary" size="large"><b>เข้าสู่ระบบ</b></Button>
            </ButtonContainer>
            {/* <Button block className="button font" size="large"><b>เข้าสู่ระบบสนามฟุตบอล</b></Button>
            <Button block className="button font" size="large"><b>เข้าสู่ระบบเจ้าหน้าที่</b></Button>
            <Button block className="button font" size="large"><b>เข้าสู่ระบบทุกภาคส่วน</b></Button> */}
            <Dropdown overlay={menu} className="font">
              <Button>เข้าสู่ระบบอื่นๆ</Button>
            </Dropdown>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;