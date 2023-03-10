import React from "react";
import { useNavigate } from "react-router";
import { Button, Checkbox, Form, Input, Col, Row, notification } from "antd";
import authController from "../services/auth";
import HeaderComponent from "../components/Header";
import { Link } from "react-router-dom";

const LOGIN_REDIRECT = "/";

const LoginPages = ({ setToken }) => {
  const navigate = useNavigate();

  const onFinish = async (value) => {
    try {
      await authController.login(value.email, value.password);
    } catch (error) {
      console.log(error);
      notification.open({
        message: "⚠️ Erreur",
        description: "Email ou mot de passe incorrect",
      });
      return;
    }
    const token = sessionStorage.getItem("token");
    setToken(token);
    console.log("Success:", value);
    navigate(LOGIN_REDIRECT);
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
                  type: "email",
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
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox> Remember me </Checkbox>
            </Form.Item>
            <Form.Item style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
              <Link to="/register" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>Je n'ai pas de compte et je veux en créer un</Link>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LoginPages;
