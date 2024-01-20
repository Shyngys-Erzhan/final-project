import { Typography, Space, Divider } from 'antd';
import {
  GithubOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  PhoneOutlined,
  MailOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiPreact } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";


const { Title, Paragraph } = Typography;

function Contacts() {
  return (
    <>
      <Header />

      <Title level={3} className="subtitle">
        Мои соц.сети
      </Title>

      <Space style={{ fontSize: '20px' }}>
        <a target='blank' href="https://github.com/Shyngys-Erzhan" style={{ textDecoration: 'none', color: 'black' }}>
          <GithubOutlined className="icon" /> GitHub
        </a>
        <a target='blank' href="https://www.instagram.com/erzhan.shyngyss/" style={{ textDecoration: 'none', color: 'black' }}>
          <InstagramOutlined className="icon" /> Instagram
        </a>
        <a target='blank' href="https://t.me/shyngys_erzhan" style={{ textDecoration: 'none', color: 'black' }}>
          <TwitterOutlined className="icon" /> Twitter
        </a>
        <a target='blank' href="https://www.linkedin.com/in/shyngys-erzhan-b74b54287/" style={{ textDecoration: 'none', color: 'black' }}>
          <LinkedinOutlined className="icon" /> LinkedIn
        </a>
      </Space>
      <Divider />

      <Title level={3} className="subtitle" style={{ marginTop: '20px', fontSize: '24px' }}>
        Что я использовал для создания этого сайта?
      </Title>
      <Space style={{ fontSize: '20px' }}>
        <FaHtml5 className="icon" /> HTML
        <SiCss3 className="icon" /> CSS
        <SiJavascript className="icon" /> JavaScript
        <TbBrandRedux className="icon" /> Redux
        <SiPreact className="icon" /> React
        <SiAntdesign className="icon" /> Ant Design
      </Space>
      <Divider />

      <Paragraph className="paragraph" style={{ fontSize: '18px' }}>
        Если у вас есть вопросы или предложения, вы можете связаться с нами по следующим контактам:
      </Paragraph>

      <Space className="contact-info" style={{ fontSize: '20px' }}>
        <PhoneOutlined /> +7 (708) 848-85-90
      </Space>

      <Space className="contact-info" style={{ marginTop: '10px', fontSize: '20px' }}>
        <MailOutlined /> shyngyserzhan200505@gmail.com
      </Space>

      <Space className="contact-info" style={{ marginTop: '10px', fontSize: '20px' }}>
        <UserOutlined /> Shyngys Erzhan
      </Space>
      <Footer />
    </>
  );
}

export default Contacts;

