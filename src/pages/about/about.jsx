import PropTypes from 'prop-types';
import { Typography, Card, Row, Col, Divider, Space } from 'antd';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import styles from './about.module.css';
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";


const { Title, Paragraph } = Typography;

const FeatureCard = ({ title, description }) => (
  <Card className="feature-card">
    <Title level={3} className="subtitle">
      {title}
    </Title>
    <Paragraph className="paragraph">{description}</Paragraph>
  </Card>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Title level={2} className="title">
          Добро пожаловать на страницу React Shop!
        </Title>

        <Paragraph className={styles.custom_paragraph}>
          Мы - команда энтузиастов, создавших React Shop с любовью к качественным продуктам и современным технологиям. Наш магазин предоставляет широкий выбор товаров в пяти удобных категориях: Clothes, Electronics, Furniture, Shoes, Miscellaneous
          . Мы стремимся удовлетворить потребности наших клиентов, предлагая только лучшие продукты по доступным ценам.
        </Paragraph>
        <Divider />

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <FeatureCard
              title="Инновации и Технологии"
              description="Мы гордимся тем, что предлагаем современные электронные устройства, ультрасовременные тренды в одежде и высококачественную обувь. В нашем ассортименте вы найдете продукты, соответствующие последним технологическим достижениям."
            />
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <FeatureCard
              title="Дизайн с учетом пользователя"
              description="Мы используем библиотеку Ant Design для создания красивого и интуитивно понятного интерфейса нашего магазина. Наша цель - сделать покупки в React Shop приятным и легким процессом для каждого клиента."
            />
          </Col>
        </Row>
        <Divider />


        <Title level={2} className="subtitle" style={{ marginTop: '20px', fontSize: '24px' }}>
          Что я использовал для создания этого сайта?
        </Title>
        <Space style={{ fontSize: '60px' }} className={styles.icons}>
          <FaHtml5 className="icon" style={{ color: '#F75421' }} />
          <SiCss3 className="icon" style={{ color: '#0870C2' }} />
          <SiJavascript className="icon" style={{ color: '#FFE008', backgroundColor: '#000' }} />
          <FaReact className="icon" style={{ backgroundColor: '#61DBFB', color: '#fff' }} />
          <SiAntdesign className="icon" style={{ color: '#1890FF' }} />
          <TbBrandRedux className="icon" style={{ color: '#7A50BE' }} />
          <IoLogoVue className="icon" style={{ color: '#41B883', backgroundColor: 'black' }} />
        </Space>
        <Divider />


        <Paragraph className={styles.custom_paragraph}>
          Спасибо, что выбрали React Shop! Мы постоянно совершенствуемся, чтобы предоставлять вам лучший опыт покупок. Если у вас есть какие-либо вопросы или комментарии, не стесняйтесь обращаться!
        </Paragraph>
      </div>
      <Footer />
    </>
  );
};

export default About;
