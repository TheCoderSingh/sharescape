"use client";
import { Button, Flex, Form, Input, Typography } from "antd";
import Link from "next/link";

import "../globals.css";

const { Text, Title } = Typography;

/**
 * Forgot Page
 * @returns {JSX.Element} The Forgot component JSX
 */
const Forgot = () => {
  return (
    <Flex className="forgot" vertical justify="center">
      <Typography>
        <Title level={4}>
          Let&apos;s help you recover your <span>Sharescape</span> account
        </Title>
      </Typography>

      <Form name="forgot" className="forgot-form">
        <Form.Item name="username">
          <Input placeholder="What's your Email?" />
        </Form.Item>
        <Button>Next</Button>
      </Form>

      <Flex className="bottom-links" justify="center" gap={5}>
        <Typography>
          <Text>
            Want to
            <Link href="/login"> Login </Link>
            or
            <Link href="/signup"> Signup </Link>
            instead?
          </Text>
        </Typography>
      </Flex>
    </Flex>
  );
};

export default Forgot;
