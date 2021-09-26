import '../css/login.css'
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Space, Image } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

class Login extends Component {
  render() {
    return (
      <div class="backgroundcolor">
        <div>
          <div class="box">
            <div class="center">
              {/* <Image
                width={200}
                height={200}
                src="D:\YIM\Test\testforreact\src\img\Logo.png"
              /> */}
              <h3 className="">
                เข้าสู่ระบบ
              </h3>
              <Space direction="vertical" className="font">
                <Form>
                  <div>
                    อีเมล
                  </div>
                  <Input placeholder="your email" />
                </Form>
                <Form>
                  <div>
                    รหัสผ่าน
                  </div>
                  <Input.Password placeholder="xxxxxxxxxxx" className="inputBox"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Form>
              </Space>
              <div className="">
                <h3>
                  จดจำรหัสผ่าน
                </h3>
                <h3>
                  ลืมรหัสผ่าน
                </h3>
              </div>
              <Button type="primary" className="button font" block>เข้าสู่ระบบแอดมิน</Button>
              <Button block className="button font" href={"/dashboard"}>เข้าสูระบบสมาคมฟุตบอล</Button>
              <Button block className="button font">เข้าสู่ระบบเจ้าหน้าที่</Button>
              <Button block className="button font">เข้าสู่ระบบภาคส่วน</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;