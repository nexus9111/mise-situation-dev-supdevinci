import { Button, Checkbox, Form, Input } from "antd";
import Header from "../components/Header";
import Konami from "react-konami-code";

const onFinish = (value) => {
  console.log("Success:", value);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Home = () => {
  const easterEgg = () => {
    alert("Vous avez débloqué un secret ! Félicitations pour avoir maîtrisé le Konami Code et découvert notre Easter Egg caché.");
  };

  return (
    <>
      <Header />
      <h1>Home</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
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
      <Konami action={easterEgg}></Konami>
    </>
  );
};

export default Home;
