import React, { Component } from 'react'
import '../App.css'
import '../css/check.css'
import 'antd/dist/antd.css';
import PDFLogo from '../img/check/PDF.svg'

import { Layout, Progress, Typography } from 'antd';
import { Row, Col, Divider } from 'antd';
import Header from "../pages/header"
import Sider from "../pages/sider"
import { CaretRightFilled, CaretLeftFilled, InboxOutlined, UploadOutlined } from '@ant-design/icons';

import { Steps, Button, message, Upload, Radio } from 'antd';
import styled from 'styled-components';
import Title from 'antd/lib/skeleton/Title';

const style = { background: '#0092ff', padding: '8px 0' };
const { Dragger } = Upload;
const { Text } = Typography;
const NoneBackground = styled.div
    `
  .ant-layout {
    background: none;
  }
`;
const ButtonContainer = styled.div
    `
  .ant-btn-primary {
    background-color: #2A2866;
    border-color: #2A2866
  }
`;
const BoxColor = styled.div
    `
  .ant-upload.ant-upload-drag {
    background-color: #ffffff;
    border: 1px dashed green;
  }
`;
const { Content } = Layout;
const { Step } = Steps;

const steps = [
    {
        title: '',
        content: 'First-content',
    },
    {
        title: '',
        content: 'Second-content',
    },
    {
        title: '',
        content: 'Last-content',
    },
    {
        title: '',
        content: 'Last-content',
    },
    {
        title: '',
        content: 'Last-content',
    },
];

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const Checklist = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    }
    
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
                                    <Col className="gutter-row" span={8}>
                                        <div className="box4">
                                            <Text level={2} className="font font-size"><b>ระดับความสมบูรณ์</b></Text>
                                            <Row gutter={16}>
                                                <Col className="gutter-row" span={20}>
                                                    <Progress percent={50} size="small" status="active" />
                                                </Col>
                                                <Col className="gutter-row" span={4}>
                                                    <Button type="primary" icon={<UploadOutlined />} >
                                                        
                                                    </Button>
                                                </Col>
                                            </Row>

                                            <Divider />
                                            <Text level={2} className="font font-size"><b>ตัวชี้วัด</b></Text>
                                            <Divider />
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={16}>
                                        <div className="box4">
                                            <Steps current={current}>
                                                {steps.map(item => (
                                                    <Step key={item.title} title={item.title} />
                                                ))}
                                            </Steps>
                                            <Divider />
                                            <Row gutter={[16, 24]}>
                                                <Col className="gutter-row" span={24}>
                                                    <div className="content-box-title padding-text">
                                                        col-6
                                                    </div>
                                                </Col>
                                                <Col className="gutter-row" span={24}>
                                                    <div className="content-box">
                                                        <div className="content-box-title padding-text">
                                                            col-6
                                                        </div>
                                                        <Row className="forRow">
                                                            <Col className="content-box-title margin-box padding-text" span={5}>
                                                                {/* <Radio.Group name="radiogroup" defaultValue={1}>
                                                                    <Radio value={1}>มี</Radio>
                                                                    <Radio value={2}>ไม่มี</Radio>
                                                                </Radio.Group> */}
                                                                มี
                                                            </Col>
                                                            <Col className="white-box-background margin-box padding-text" span={5}>
                                                                {/* <Radio.Group name="radiogroup" defaultValue={1}>
                                                                    <Radio value={2}>ไม่มี</Radio>
                                                                </Radio.Group> */}
                                                                ไม่มี
                                                            </Col>
                                                        </Row>
                                                        <BoxColor>
                                                            <Dragger {...props} className="white-box-background">
                                                                <div className="ant-upload-drag-icon " style={{ color: 'green', backgroundColor: 'white' }}>
                                                                    <UploadOutlined style={{ fontSize: '16px', color: 'green', marginRight: '10px' }} />
                                                                    อัพโหลดไฟล์
                                                                </div>
                                                                {/* <p className="ant-upload-text">Click or drag file to this area to upload</p> */}
                                                            </Dragger>
                                                        </BoxColor>

                                                    </div>

                                                </Col>
                                            </Row>
                                            {/* <div className="steps-content">{steps[current].content}</div> */}
                                            <Divider />
                                            <div className="steps-action">
                                                <Row>
                                                    <Col span={12}>
                                                        {current > 0 && (
                                                            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                                                <CaretLeftFilled />
                                                                ก่อนหน้า
                                                            </Button>
                                                        )}
                                                    </Col>
                                                    <Col span={12} className="button-end">
                                                        {current < steps.length - 1 && (
                                                            <ButtonContainer >
                                                                <Button type="primary" onClick={() => next()}>
                                                                    ถัดไป
                                                                    <CaretRightFilled />
                                                                </Button>
                                                            </ButtonContainer>
                                                        )}
                                                        {current === steps.length - 1 && (
                                                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                                                Done
                                                            </Button>
                                                        )}
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </NoneBackground>
        </div>
    )

}
export default Checklist;