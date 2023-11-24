"use client";
import { Col, Divider, Flex, Row, Typography } from "antd";
import Header from "../components/Header";
import ProfilePicture from "../assets/profile.jpeg";
import Image from "next/image";
import MiniBuddy from "../components/MiniBuddy";
import { FaLocationDot } from "react-icons/fa6";

const { Text, Title } = Typography;

const Profile = () => {
  return (
    <div className="profile">
      <Header />

      <Flex className="inner" gap={20}>
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
            <Flex gap={2} align="center" className="location">
              <FaLocationDot />
              <Typography>
                <Text>Vancouver, Canada</Text>
              </Typography>
            </Flex>
          </div>
          <div className="profile-about">
            <Divider orientation="left" className="about-divider">
              <Typography>
                <Title level={5}>ABOUT</Title>
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
            <Divider orientation="left" className="about-divider">
              <Typography>
                <Title level={5}>PERSONAL DETAILS</Title>
              </Typography>
            </Divider>

            <div className="personal-details">
              <Flex justify="space-between">
                <div>
                  <div>
                    <Typography>
                      <Text>Birthday</Text>
                    </Typography>
                  </div>
                  <div>
                    <Typography>
                      <Text>Gender</Text>
                    </Typography>
                  </div>
                  <div>
                    <Typography>
                      <Text>Relationship Status</Text>
                    </Typography>
                  </div>
                </div>
                <div>
                  <div>
                    <Typography>
                      <Text>January 3, 1992</Text>
                    </Typography>
                  </div>
                  <div>
                    <Typography>
                      <Text>Male</Text>
                    </Typography>
                  </div>
                  <div>
                    <Typography>
                      <Text>Single</Text>
                    </Typography>
                  </div>
                </div>
              </Flex>
            </div>
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default Profile;
