import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { BiCategory } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { RiContactsBook2Line } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdOutlinePercent } from "react-icons/md";
import { SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiThenorthface } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import MetaVerse from '../../assets/images/Tokyo.jpeg'
import Anime from '../../assets/images/anime.jpg'
import styles from './about.module.css';


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
          <div className={styles.card1}><Link to="/catalog" style={{ marginBottom: '20px' }} className={styles.cart_link}>Variety of categories </Link><BiCategory className={styles.card_icons} /></div>
          <div className={styles.card2}><Link to="/contacts" style={{ marginBottom: '20px' }} className={styles.cart_link}>Brand-name products</Link><RiContactsBook2Line className={styles.card_icons} /> </div>
          <div className={styles.card3}><Link to="/cart" style={{ marginBottom: '20px' }} className={styles.cart_link}>Convenient shopping cart</Link><LuShoppingCart className={styles.card_icons} /></div>
          <div className={styles.card4}><p className={styles.cart_link}>Quality guarantee</p><FaRegCircleCheck className={styles.card_icons} /></div>
          <div className={styles.card5}><p className={styles.cart_link}> Brand-name products</p><TbShoppingBagCheck className={styles.card_icons} /></div>
          <div className={styles.card6}><p className={styles.cart_link}>Promotions and discounts</p><MdOutlinePercent className={styles.card_icons} /></div>
        </div>

        <div className={styles.about_body2}>
          <div className={styles.body2_card1}>
            <div className={styles.body2_card1_content}>
              <h1 className={styles.body2_card1_title}>Our Mission</h1>
              <p className={styles.body2_card1_text1}>Our mission is to provide the best online shopping experience to our customers. We are committed to providing the best customer service, highest quality products, and the most convenient shopping experience possible.</p>
              <p className={styles.body2_card1_text2}>We are committed to providing the best customer service, highest quality products, and the most convenient shopping experience possible.</p>
              <div className={styles.body2_card1_icons}>
                <div className={styles.body2_card1_icon1}><SiNike className={styles.body2_icons} /></div>
                <div className={styles.body2_card1_icon2}><SiAdidas className={styles.body2_icons} /></div>
                <div className={styles.body2_card1_icon3}><SiThenorthface className={styles.body2_icons} /></div>
              </div>
            </div>
          </div>
          <img src={Anime} alt={Anime} className={styles.anime} />
        </div>

        <div className={styles.about_body3}>
          <h2>
            <span className={styles.strike_through}>yesterday </span><br />
            Now.<br />
            <span className={styles.strike_through}> tomorrow</span>
          </h2>
        </div>

        <div className={styles.about_body4}>
          <FaHtml5 className={styles.icon} style={{ color: '#F75421' }} />
          <SiCss3 className={styles.icon} style={{ color: '#0870C2' }} />
          <SiJavascript className={styles.icon} style={{ color: '#FFE008', backgroundColor: '#000' }} />
          <FaReact className={styles.icon} style={{ color: '#61DBFB' }} />
          <SiAntdesign className={styles.icon} style={{ color: '#1890FF' }} />
          <TbBrandRedux className={styles.icon} style={{ color: '#7A50BE' }} />
          <IoLogoVue className={styles.icon} style={{ color: '#41B883', backgroundColor: 'black' }} />
        </div>

        <Footer />

      </div>
    </>
  );
};

export default About;
