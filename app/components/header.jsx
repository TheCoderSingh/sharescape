"use client";
import { Flex, Typography } from "antd";
import Link from "next/link";
const { Title } = Typography;

import "../globals.css";

const Header = () => {
  return (
    <div className="header">
      <Flex justify="space-between" className="inner">
        <Typography>
          <Title level={2}>Sharescape</Title>
        </Typography>
        <Flex gap={14} align="center">
          <div>
            <Link href="/buddies">Find Buddies</Link>
          </div>
          <div>
            <Link href="/profile">Profile</Link>
          </div>
          <div>
            <Link href="/messages">Messages</Link>
          </div>
          <div>
            <Link href="/settings">Settings</Link>
          </div>
          <div>
            <Link href="/logout">Logout</Link>
          </div>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;
