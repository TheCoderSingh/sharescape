"use client";
import { Button, Col, Divider, Flex, Form, Input, Row, Typography } from "antd";
import Link from "next/link";

import "../globals.css";
import { GoogleLogin } from "@react-oauth/google";

const { Text, Title } = Typography;

/**
 * Signup Page
 * @returns {JSX.Element} The Signup component JSX
 */
const Signup = () => {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <Flex className="signup" vertical justify="center">
      <Typography>
        <Title>
          Welcome to <span>Sharescape</span>
        </Title>
      </Typography>

      <Form name="signup" className="signup-form">
        <Form.Item name="username">
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password">
          <Input placeholder="Password" />
        </Form.Item>
        <Form.Item name="confirm">
          <Input placeholder="Confirm Password" />
        </Form.Item>
        <Button>Signup</Button>
      </Form>

      <div className="signup-socials">
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

      <Flex vertical className="forgot">
        <ul>
          <li>
            <Link href="/forgot">
              Forgot your <span>username/password?</span>
            </Link>
          </li>
          <li>
            <Link href="/login">
              Already have an account? <span>Login</span>
            </Link>
          </li>
        </ul>
      </Flex>
    </Flex>
  );
};

export default Signup;
