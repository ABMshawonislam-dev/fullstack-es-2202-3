import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
const NewPassword = () => {
    let params = useParams()
  let [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);

    setLoading(true);

    let data = await axios.post("http://localhost:8000/api/v1/auth/newpass", {
      password: values.password,
      token: params.token
    });

    console.log(data);
    setLoading(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        label="Password"
        name="password"
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
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          loading={loading}
          disabled={loading}
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewPassword;
