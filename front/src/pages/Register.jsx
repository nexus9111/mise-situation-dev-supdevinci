import React from 'react';
import { useState } from 'react';
import {Input, Form, Button} from 'antd'
const FormItem = Form.Item;
const {password1, setPassword1}= useState("");
const {password2, setPassword2}= useState("");

const onFinish1 = (value) => {
    setPassword1(value.password1);
    console.log(value);
}

const onFinish2 = (value) => {
    setPassword2(value.password2);
    console.log(value);
}

const onFinish = (values) => {
    if (password1 != password2) {
        message.error("mot de passe ne correspond pas");
        return;
    }
    console.log('Success:', values);
}

const onFinishFiled = (error) => {
    console.log(error);
}


const Register = () => {
    return (
        <div>
            <Form
                name= 'register'
                onFinish={onFinish}
                onFinishFailed={onFinishFiled}
            >
                <FormItem
                    name="username"
                    label="Entrez votre nom d'utilisateur"
                    rules={[
                        {
                            required: true,
                            message: 'Entrez votre nom d\'utilisateur'
                        }
                    ]}
                    >
                        <Input />
                </FormItem>

            
                <FormItem
                    name="password1"
                    onFinish={onFinish1}
                    label="Entrez votre mot de passe"
                    rules={[
                        {
                            required: true,
                            message: 'Entrez votre mot de passe'
                        }
                    ]}
                >
                    <Input.Password />
                </FormItem>
                <FormItem
                    name="password2"
                    onFinish={onFinish2}
                    label="Entrez votre mot de passe"
                    rules={[
                        {
                            required: true,
                            message: 'Entrez votre mot de passe'
                        }
                    ]}
                >
                    <Input.Password />

                </FormItem>
            </Form>
            
        </div>
    );
};

export default Register;