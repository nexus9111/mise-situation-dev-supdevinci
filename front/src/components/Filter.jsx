import { Button, Checkbox, Form, Input, Select } from "antd";

import apiController from "../services/apiSearchHelper";

const { Option } = Select;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Filter = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      Width: 600,
      display: "flex",
      textAlign: "left",
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Nom"
      name="Nom"
      style={{
        minWidth: 250,
      }}
      rules={[
        {
          message: "Nom",
        },
      ]}
    >
      <Input
        style={{
          width: 150,
        }}
      />
    </Form.Item>

    <Form.Item
      label="Code Postal"
      name="Code Postal"
      style={{
        minWidth: 250,
      }}
      rules={[
        {
          message: "Code Postal",
        },
      ]}
    >
      <Input
        style={{
          width: 150,
        }}
      />
    </Form.Item>

    <Form.Item
      label="Department"
      name="Department"
      style={{
        minWidth: 250,
      }}
      rules={[
        {
          message: "Department",
        },
      ]}
    >
      <Input
        style={{
          width: 150,
        }}
      />
    </Form.Item>

    <Form.Item name="Activité" label="Activité" rules={[{}]}>
      <Select
        placeholder="Activité"
        // onChange={onActivityChange}
        allowClear
      >
        {apiController.getActivitySections().map((sectionCode) => {
          return (
            <Option value={sectionCode}>
              {apiController.getActivitySectionValue(sectionCode)}
            </Option>
          );
        })}
      </Select>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default Filter;
