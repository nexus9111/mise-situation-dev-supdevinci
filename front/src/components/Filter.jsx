import { Button, Form, Input, Select } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import apiController from "../services/apiSearchHelper";

import "../styles/searchPage.css";

const { Option } = Select;

const Filter = ({ setfilters, setAfficherMenu, afficherMenu, marginBlock }) => {
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
    <div className="filter-container">
      <div>
        {marginBlock !== 0 ? (
          <Button
            type="primary"
            className="filterOpen"
            onClick={() => setAfficherMenu(!afficherMenu)}
          >
            {afficherMenu ? <LeftOutlined /> : <RightOutlined />} Filtes
          </Button>
        ) : (
          <div
            style={{
              height: "40px",
            }}
          ></div>
        )}
    
        {afficherMenu && (
          <div>
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
              className="filter-form"
              onFinish={handleSubmit}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Nom"
                name="name"
                className="filter-input"
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
                className="filter-input"
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
                className="filter-input"
                name="department"
                rules={[
                  {
                    message: "Departement",
                  },
                ]}
              >
                <Input
                  style={{
                    width: 200,
                  }}
                />
              </Form.Item>

              <Form.Item
                name="activity"
                label="Activity"
                rules={[{}]}
                className="filter-input activite"
              >
                <Select
                  placeholder="Activity"
                  allowClear
                  style={{
                    width: 250,
                  }}
                >
                  {apiController.getActivitySections().map((section) => {
                    return (
                      <Option key={section} value={section}>
                        {apiController.getActivitySectionValue(section)}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
