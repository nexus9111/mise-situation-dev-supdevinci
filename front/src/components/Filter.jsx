import { Button, Checkbox, Form, Input, Select } from 'antd';
import apiController from '../services/auth';

const { Option } = Select

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const Filter = ({setfilters}) => {
    const handleSubmit = (values) => {
        values.preventDefault();
        setfilters(values.Nom, values.CodePostal, values.Departement, values.Activity);
    }

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
                display: 'flex',
                textAlign: 'left',
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
                name="Nom"
                style={{
                    minWidth: 250,
                }}
                rules={[
                    {
                        message: 'Nom',
                    },
                ]}
            >
                <Input
                    style={{
                        width: 150,
                    }} />
            </Form.Item>

            <Form.Item
                label="Code Postal"
                name="Code Postal"
                style={{
                    minWidth: 250,
                }}
                rules={[
                    {
                        message: 'Code Postal',
                    },
                ]}
            >
                <Input
                    style={{
                        width: 150,
                    }} />
            </Form.Item>

            <Form.Item
                label="Departement"
                name="Departement"
                style={{
                    minWidth: 250,
                }}
                rules={[
                    {
                        message: 'Departement',
                    },
                ]}
            >
                <Input
                    style={{
                        width: 150,
                    }} />
            </Form.Item>

            <Form.Item name="Activity" label="Activity" rules={[{}]}>
                <Select
                    placeholder="Activity"
                    // onChange={onActivityChange}
                    allowClear
                >
                    {apiController.getActivitySections().map((section) => {
                        <Option value={section[0]}>{section[1]}</Option>
                    })}
                </Select>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" onSub>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}


export default Filter;