import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Alert, Space } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  let [loading, setLoading] = useState(false);
  let [msg, setMsg] = useState("");

  let navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    setLoading(true);

    let data = await axios.post(
      "http://localhost:8000/api/v1/auth/registration",
      {
        name: values.username,
        email: values.email,
        password: values.password,
      }
    );

    console.log(data);
    setLoading(false);

    setMsg("Registration Successfull. Please check your email!");
    // setTimeout(() => {
    //   navigate(`/otpverification/${values.email}`);
    // }, 1500);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {msg && <Alert message={msg} type="success" showIcon closable />}

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
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
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
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
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={loading}
          >
            Submit
          </Button>
          <Link to="/forgotpass">Forgot Password</Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default Registration;
