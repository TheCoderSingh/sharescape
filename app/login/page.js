"use client";
import { Button, Col, Divider, Flex, Form, Input, Row, Typography } from "antd";
import Link from "next/link";

import "../globals.css";
import { GoogleLogin } from "@react-oauth/google";

const { Text, Title } = Typography;

/**
 * Login Page
 * @returns {JSX.Element} The Login component JSX
 */
const Login = () => {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <Flex className="login" vertical justify="center">
      <Typography>
        <Title>
          Welcome to <span>Sharescape</span>
        </Title>
      </Typography>

      <Form name="login" className="login-form">
        <Form.Item name="username">
          <Input placeholder="Username/Email" />
        </Form.Item>
        <Form.Item name="password">
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Button>Login</Button>
      </Form>

      <div className="socials">
        <Flex justify="space-between">
          <Divider className="divider" />
          <Typography className="divider-text">
            <Text>OR</Text>
          </Typography>
          <Divider className="divider" />
        </Flex>
        <Flex>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          <Link href="">F</Link>
          <Link href="">X</Link>
        </Flex>
      </div>

      <Flex vertical className="bottom-links">
        <ul>
          <li>
            <Link href="/forgot">
              Forgot your <span>username/password?</span>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              Don&apos;t have an account? <span>Signup</span>
            </Link>
          </li>
        </ul>
      </Flex>
    </Flex>
  );
};

export default Login;
