import React from 'react';
import {Button, Checkbox, From, Imput} from 'antd';
import { Form } from 'react-router-dom';


const onFinish = (values) => {
    console.log('Success:', values);
}

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
}

const LoginPages = () => {
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete= "off" 
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'please input your username!'
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'please input your password!'
                        },
                    ]}
                >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="remember"
                    valuePropName='checked'
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox> Remember me </Checkbox>
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPages;