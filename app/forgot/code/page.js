"use client";
import { Button, Flex, Form, Input, Typography } from "antd";
import Link from "next/link";

import "../../globals.css";

const { Text, Title } = Typography;

/**
 * Code Page
 * @returns {JSX.Element} The Code component JSX
 */
const Forgot = () => {
  return (
    <Flex className="code" vertical justify="center">
      <Typography>
        <Text>
          If you entered the email that associated with an account, you should
          have received a code. Please enter the code to continue with password
          recovery process.
        </Text>
      </Typography>

      <Form name="code" className="code-form">
        <Form.Item name="verification-code">
          <Input placeholder="Verification Code" />
        </Form.Item>
        <Button>Next</Button>
      </Form>
    </Flex>
  );
};

export default Forgot;
