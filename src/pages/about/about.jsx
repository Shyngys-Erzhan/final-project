import PropTypes from 'prop-types';
import { Typography, Card } from 'antd';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import styles from './about.module.css';
import { Link } from 'react-router-dom';
import { BiCategory } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { RiContactsBook2Line } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdOutlinePercent } from "react-icons/md";





// import { FaHtml5 } from "react-icons/fa";
// import { SiCss3 } from "react-icons/si";
// import { SiJavascript } from "react-icons/si";
// import { TbBrandRedux } from "react-icons/tb";
// import { FaReact } from "react-icons/fa";
// import { SiAntdesign } from "react-icons/si";
// import { IoLogoVue } from "react-icons/io5";
// import { AboutBgImage } from '../../assets/images/backgroundForAbout.jpg'
// , Row, Col, Divider, Space
import MetaVerse from '../../assets/images/Tokyo.jpeg'

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
      <div className={styles.container}>
        <Header />
        <div className={styles.about_header}>
          <div className={styles.about_header_content}>
            <Link to="/" className={styles.link} >Back to Home</Link>
          </div>
          <img src={MetaVerse} alt={MetaVerse} className={styles.header_img} />
        </div>


        <div className={styles.about_body}>
          <div className={styles.card1}><Link to="/catalog" className={styles.cart_link}>Variety of categories </Link><BiCategory className={styles.card_icons} /></div>
          <div className={styles.card3}><Link to="/cart" className={styles.cart_link}>Convenient shopping cart</Link><LuShoppingCart className={styles.card_icons} /></div>
          <div className={styles.card2}><Link to="/contacts" className={styles.cart_link}>Brand-name products</Link><RiContactsBook2Line className={styles.card_icons} /> </div>
          <div className={styles.card4}><p className={styles.cart_link}>Quality guarantee</p><FaRegCircleCheck className={styles.card_icons} /></div>
          <div className={styles.card5}><p className={styles.cart_link}> Brand-name products</p><TbShoppingBagCheck className={styles.card_icons} /></div>
          <div className={styles.card6}><p className={styles.cart_link}>Promotions and discounts</p><MdOutlinePercent className={styles.card_icons} /></div>


        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
