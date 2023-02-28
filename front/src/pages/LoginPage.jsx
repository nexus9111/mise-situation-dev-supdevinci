import React from "react";
import { useNavigate } from "react-router";
import { Button, Checkbox, Form, Input, Col, Row } from "antd";
import authController from "../services/auth";

const LoginPages = ({ setToken }) => {
  const navigate = useNavigate();
  
  const onFinish = async (value) => {
    // if (value.retypedPassword !== value.password) {
      if (!value.password) {
      alert("Password does not match");
      return;
    }
    // register
    try {
      // login
        await authController.login(
        value.email,
        value.password
      )

    } catch (error) {
      console.log(error);
      alert("Login failed");
      return;
    }
    const token = sessionStorage.getItem("token")
    setToken(token)
    // const token = sessionStorage.getItem("token");
    // setToken(token);
    console.log("Success:", value);
    // redirect("/");
    // return <redirect to ="/"/>
    
    navigate("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPages;
