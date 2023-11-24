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

      <Flex className="bottom-links">
        <Typography>
          <Text>
            <Link href="/forgot">
              <span>Forgot username or password</span>
            </Link>
            ? | Don&apos;t have an account?{" "}
            <Link href="/signup">
              <span>Signup</span>
            </Link>
          </Text>
        </Typography>
      </Flex>
    </Flex>
  );
};

export default Login;
