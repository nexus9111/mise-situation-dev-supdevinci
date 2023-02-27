import { Button, Checkbox, Form, Input, Col, Row } from "antd";

const onFinish = (value) => {
  if (value.retypedPassword !== value.password) {
    alert("Password does not match");
    return;
  }
  console.log("Success:", value);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Home = () => {
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

export default Home;
