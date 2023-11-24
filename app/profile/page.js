"use client";
import { Col, Divider, Flex, Row, Typography } from "antd";
import Header from "../components/Header";
import ProfilePicture from "../assets/profile.jpeg";
import Image from "next/image";
import MiniBuddy from "../components/MiniBuddy";

const { Text, Title } = Typography;

const Profile = () => {
  return (
    <div className="profile">
      <Header />

      <Flex className="inner">
        <div className="profile-left">
          <div className="profile-picture">
            <Image src={ProfilePicture} alt="Profile" />
          </div>
          <div className="profile-header">
            <Divider className="header-divider" orientation="left">
              <Typography>
                <Text>BUDDIES</Text>
              </Typography>
            </Divider>
            <div className="buddies">
              <Row gutter={24}>
                <Col span={8}>
                  <MiniBuddy />
                </Col>
                <Col span={8}>
                  <MiniBuddy />
                </Col>
                <Col span={8}>
                  <MiniBuddy />
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}>
                  <MiniBuddy />
                </Col>
                <Col span={8}>
                  <MiniBuddy />
                </Col>
                <Col span={8}>
                  <MiniBuddy />
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="profile-right">
          <div className="profile-details">
            <Typography>
              <Title>Jaskaran Singh</Title>
            </Typography>
            <Typography>
              <Text>Vancouver, Canada</Text>
            </Typography>
          </div>
          <div className="profile-about">
            <Divider orientation="left">
              <Typography>
                <Title level={4}>ABOUT</Title>
              </Typography>
            </Divider>
            <Typography>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas a nisl in massa pharetra molestie sit amet mattis
                ipsum. Nam sagittis quis nisl at faucibus. Praesent iaculis ex
                vel erat laoreet, a rhoncus velit mattis. Nam eros odio,
                faucibus vitae suscipit ac, euismod ut mauris. Maecenas
                scelerisque sodales sem, ut vulputate libero porttitor quis.
              </Text>
            </Typography>
          </div>

          <div className="profile-bottom-details">
            <Typography>
              <Text>Birthday: January 1, 1993</Text>
            </Typography>
            <Typography>
              <Text>Gender: Male</Text>
            </Typography>
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default Profile;
