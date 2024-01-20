import PropTypes from 'prop-types';
import { Typography, Card, Row, Col, Divider } from 'antd';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import styles from './about.module.css';

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
          Мы - команда энтузиастов, создавших React Shop с любовью к качественным продуктам и современным технологиям. Наш магазин предоставляет широкий выбор товаров в пяти удобных категориях: Одежда, Электроника, Обувь, Разное. Мы стремимся удовлетворить потребности наших клиентов, предлагая только лучшие продукты по доступным ценам.
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

        <Paragraph className={styles.custom_paragraph}>
          Спасибо, что выбрали React Shop! Мы постоянно совершенствуемся, чтобы предоставлять вам лучший опыт покупок. Если у вас есть какие-либо вопросы или комментарии, не стесняйтесь обращаться!
        </Paragraph>
      </div>
      <Footer />
    </>
  );
};

export default About;
