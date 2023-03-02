import { Button, Form, Input, Select } from "antd";
import apiController from "../services/apiSearchHelper";

const { Option } = Select;

const Filter = ({ setfilters }) => {

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (values) => {
    setfilters(
      values.name,
      values.postalCode,
      values.department,
      values.activity
    );
  };

  return (
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
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Nom"
        name="name"
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
        name="postalCode"
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
        label="Departement"
        name="department"
        style={{
          minWidth: 150,
        }}
        rules={[
          {
            message: "Departement",
          },
        ]}
      >
        <Input
          style={{
            width: 150,
          }}
        />
      </Form.Item>

      <Form.Item name="Activity" label="activity" rules={[{}]}>
        <Select placeholder="Activity" allowClear style={{
          width: 250,
        }}>
          {apiController.getActivitySections().map((section) => {
            return <Option key={section} value={section}>{apiController.getActivitySectionValue(section)}</Option>;
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
};

export default Filter;
