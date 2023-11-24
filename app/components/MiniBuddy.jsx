import Image from "next/image";
import ProfilePicture from "../assets/profile.jpeg";
import { Typography } from "antd";
import Link from "next/link";

const MiniBuddy = () => {
  return (
    <div className="mini-buddy">
      <Link href="">
        <div className="mini-profile-picture">
          <Image src={ProfilePicture} alt="profile" />
        </div>
        <Typography.Text>Jaskaran</Typography.Text>
      </Link>
    </div>
  );
};

export default MiniBuddy;
