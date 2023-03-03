import React from "react";
import { useNavigate } from "react-router";
import { Button, Checkbox, Form, Input, Col, Row } from "antd";
import authController from "../services/auth";
import HeaderComponent from "../components/Header";

const REGISTER_REDIRECT = "/";

const RegisterPages = ({ setToken }) => {
  const navigate = useNavigate();
  const onFinish = async (value) => {
    if (value.retypedPassword !== value.password) {
      alert("Password does not match");
      return;
    }
    try {
      await authController.register(
        value.email,
        value.username,
        value.password
      );
    } catch (error) {
      console.log(error);
      alert("Register failed");
      return;
    }
    const token = sessionStorage.getItem("token");
    setToken(token);
    console.log("Success:", value);
    navigate(REGISTER_REDIRECT);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <HeaderComponent />
      <Row justify={"center"}>
        <Col span={10}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "please input your username!",
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
                  message: "please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Retype Password"
              name="retypedPassword"
              rules={[
                {
                  required: true,
                  message: "please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox> Remember me </Checkbox>
            </Form.Item>
            <Form.Item  style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default RegisterPages;
