"use client";
import { Button, Flex, Form, Input, Typography } from "antd";
import Link from "next/link";

import "../../globals.css";

const { Text, Title } = Typography;

/**
 * Success Page
 * @returns {JSX.Element} The Success component JSX
 */
const Success = () => {
  return (
    <Flex className="success" vertical justify="center">
      <Typography>
        <Title level={4}>Reset your pasword</Title>
      </Typography>

      <Form name="success" className="success-form">
        <Form.Item name="new-password">
          <Input placeholder="New Password" />
        </Form.Item>
        <Form.Item name="confirm-new-password">
          <Input placeholder="Confirm New Password" />
        </Form.Item>
        <Button>Submit</Button>
      </Form>

      {/* Success */}
      <Typography>
        <Title level={4}>Your password has been changed successfully.</Title>
      </Typography>
    </Flex>
  );
};

export default Success;
