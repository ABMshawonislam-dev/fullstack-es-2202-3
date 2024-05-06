import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Alert, Space } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activeUser } from "../src/slices/userSlice";

const Login = () => {
  let [loading, setLoading] = useState(false);
  let [msg, setMsg] = useState("");

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    setLoading(true);

    let data = await axios.post("http://localhost:8000/api/v1/auth/login", {
      email: "shawon.cit.bd@gmail.com",
      password: "789654",
    });

    console.log(data);
    dispatch(activeUser(data.data));
    localStorage.setItem("user", JSON.stringify(data.data));
    setMsg(data.data.success);
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
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
