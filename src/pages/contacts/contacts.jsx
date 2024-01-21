import { Typography, Space, Divider, Form, Input, Button } from 'antd';
import {
  GithubOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  PhoneOutlined,
  MailOutlined,
  UserOutlined,
  HomeOutlined,
  ProfileOutlined,
  FacebookOutlined,
} from '@ant-design/icons';

import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

const { Title, Paragraph } = Typography;

const Contacts = () => {
  const onFinish = (values) => {
    console.log('Полученные значения:', values);
  };
  return (
    <>
      <Header />

      <Title level={3} className="subtitle">
        Мои соц.сети
      </Title>

      <Space style={{ fontSize: '30px', display: 'block' }}>
        <a target='blank' href="https://github.com/Shyngys-Erzhan" style={{ textDecoration: 'none', color: 'black' }}>
          <GithubOutlined className="icon" style={{ color: '#080808', backgroundColor: '#fff' }} /> GitHub
        </a>
        <a target='blank' href="https://www.instagram.com/erzhan.shyngyss/" style={{ textDecoration: 'none', color: 'black' }}>
          <InstagramOutlined className="icon" style={{ backgroundColor: '#bc2a8d', color: '#fff' }} /> Instagram
        </a>
        <a target='blank' href="https://t.me/shyngys_erzhan" style={{ textDecoration: 'none', color: 'black' }}>
          <TwitterOutlined className="icon" style={{ backgroundColor: '#fff', color: '#23B9EC' }} /> Twitter
        </a>
        <a target='blank' href="https://www.linkedin.com/in/shyngys-erzhan-b74b54287/" style={{ textDecoration: 'none', color: 'black' }}>
          <LinkedinOutlined className="icon" style={{ backgroundColor: '#087EBB', color: '#fff' }} /> LinkedIn
        </a>
        <a target='blank' href="https://www.facebook.com/shyngys.erzhan.1" style={{ textDecoration: 'none', color: 'black' }}>
          <FacebookOutlined className="icon" style={{ backgroundColor: '#083DC3', color: '#fff' }} /> Facebook
        </a>
      </Space>
      <Divider />

      <Paragraph className="paragraph" style={{ fontSize: '18px' }}>
        Если у вас есть вопросы или предложения, вы можете связаться с нами по следующим контактам:
      </Paragraph>

      <Space className="contact-info" style={{ fontSize: '30px' }}>
        <PhoneOutlined /> +7 (708) 848-85-90
        <PhoneOutlined /> +7 (708) 572-51-45
      </Space>

      <Divider />


      <Space className="contact-info" style={{ marginTop: '10px', fontSize: '30px' }}>
        <MailOutlined /> shyngyserzhan200505@gmail.com
      </Space>

      <Divider />

      <Space className="contact-info" style={{ marginTop: '10px', fontSize: '30px' }}>
        <HomeOutlined /> 123 Main Street, City, Country
      </Space>

      <Divider />

      <Space className="contact-info" style={{ marginTop: '10px', fontSize: '30px' }}>
        <UserOutlined /> Shyngys Erzhan
      </Space>

      <Divider />

      <Paragraph className="paragraph" style={{ fontSize: '18px', marginTop: '10px' }}>
        Мы доступны для связи с понедельника по пятницу с 9:00 до 18:00.
      </Paragraph>

      <Space style={{ fontSize: '20px', display: 'block', marginTop: '10px' }}>
        <a target='blank' href="https://www.linkedin.com/in/shyngys-erzhan-b74b54287/" style={{ textDecoration: 'none', color: 'black' }}>
          <ProfileOutlined className="icon" /> Портфолио
        </a>
      </Space>


      <Form
        name="feedbackForm"
        onFinish={onFinish}
        style={{ maxWidth: '400px', margin: '20px auto' }}
      >
        <Form.Item
          label="Ваше имя"
          name="name"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите ваше имя!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ваш Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите ваш Email!',
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ваше сообщение"
          name="message"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите ваше сообщение!',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>


      <Footer />
    </>
  );
}

export default Contacts;

