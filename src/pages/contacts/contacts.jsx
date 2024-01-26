import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import Tokyo1 from "../../assets/images/tokyo1.jpeg";
import Tokyo2 from "../../assets/images/tokyo2.jpeg";
import Tokyo3 from "../../assets/images/tokyo3.jpeg";
import main_img from "../../assets/images/contacts_tokyo.jpeg";
import CyberPunk from "../../assets/images/cyberpunk-urban-scenery.jpg";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

import { Input, Form, Button } from 'antd';
import { Input as AntdInput } from 'antd';
import style from "./contacts.module.css";

const Contacts = () => {
  const onFinish = (values) => {
    console.log('Полученные значения:', values);
  };

  return (
    <>

      <div className={style.contacts_main}>
        <Header />
        <div className={style.contacts_header}>
          <img src={main_img} alt={main_img} style={{ width: "600px" }} />
          <h1 className={style.h1_text}>Contacts</h1>
        </div>

        <div style={{ width: "1440px", height: '300px', overflow: 'hidden', margin: '0 auto', marginTop: '60px' }}>
          <img src={CyberPunk} alt={CyberPunk} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>



        <div className={style.contacts_body}>
          <div className={style.text_block}>
            <h3>Front-end Developer</h3>
            <p>Name:<span>Shyngys</span></p>
            <p>Surname:<span>Erzhan</span></p>
            <p>Age:<span>18</span></p>
            <h3 style={{ marginTop: '20px' }}>Contacts</h3>
            <p>Phone:<span> +7 708 848 85 90</span></p>
            <p>Phone:<span> +7 708 572 51 45</span></p>
            <p>Email:<span>shyngyserzhan200505@gmail.com</span></p>
            <h3 style={{ marginTop: '20px' }}>Address</h3>
            <p>Address:<span>Kazakhstan, Almaty</span> </p>
            <p>Qamalladin University</p>
          </div>
          <div className={style.image_container}>
            <img src={Tokyo1} alt={Tokyo1} className={style.cover_image} />
          </div>
        </div>

        <div className={style.contacts_body2}>
          <div className={style.image_container}>
            <img src={Tokyo2} alt={Tokyo2} className={style.cover_image} />
          </div>
          <div className={style.text_block_href}>
            <h3>Follow me</h3>
            <div className={style.media}>
              <a
                className={style.CMmedia}
                href="https://www.instagram.com/erzhan.shyngyss/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className={style.CMmedia}
                href="https://github.com/Shyngys-Erzhan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className={style.CMmedia}
                href="https://www.linkedin.com/in/shyngys-erzhan-b74b54287/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className={style.CMmedia}
                href="https://t.me/shyngys_erzhan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className={style.contacts_body3}>
          <div className={style.form_container}>
            <h3>Send me a message</h3>
            <Form
              name="feedbackForm"
              onFinish={onFinish}
              style={{ maxWidth: '400px', margin: '20px auto' }}
              className={style.form}
            >
              <Form.Item
                label={<span style={{ color: '#fff' }}>Ваше имя:</span>}
                name="name"
                rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}>
                <Input className={style.input_field} />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: '#fff' }}>Ваш Email:</span>}
                name="email"
                rules={[{ required: true, message: 'Пожалуйста, введите ваш Email!' }]}>
                <Input type="email" className={style.input_field} />
              </Form.Item>
              <Form.Item
                label={<span style={{ color: '#fff' }}>Ваше сообщение:</span>}
                name="message"
                rules={[{ required: true, message: 'Пожалуйста, введите ваше сообщение!' }]}>
                <AntdInput.TextArea style={{ height: '20px' }} className={style.textarea_field} />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={style.submit_button} >
                  Отправить
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className={style.image_container}>
            <img src={Tokyo3} alt={Tokyo3} className={style.cover_image} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Contacts;





