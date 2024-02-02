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
                <div className={styles.body2_card1_icon1}><a target='blank' className={styles.logo_href} href='https://www.nike.com/'> <SiNike className={styles.body2_icons} /></a></div>
                <div className={styles.body2_card1_icon2}><a target='blank' className={styles.logo_href} href='https://www.adidas.com/us'><SiAdidas className={styles.body2_icons} /></a ></div>
                <div className={styles.body2_card1_icon3}><a target='blank' className={styles.logo_href} href="https://www.thenorthface.com/en-us"><SiThenorthface className={styles.body2_icons} /></a ></div>
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
          <a target='blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML'><FaHtml5 className={styles.icon} style={{ color: '#F75421' }} /></a>
          <a target='blank' href='https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics'><SiCss3 className={styles.icon} style={{ color: '#0870C2' }} /></a>
          <a target='blank' href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_operators'><SiJavascript className={styles.icon} style={{ color: '#FFE008', backgroundColor: '#000' }} /></a>
          <a target='blank' href='https://ru.legacy.reactjs.org/'><FaReact className={styles.icon} style={{ color: '#61DBFB' }} /></a>
          <a target='blank' href='https://ant.design/'><SiAntdesign className={styles.icon} style={{ color: '#1890FF' }} /></a>
          <a target='blank' href='https://redux.js.org/'><TbBrandRedux className={styles.icon} style={{ color: '#7A50BE' }} /></a>
        </div>

        <Footer />

      </div >
    </>
  );
};

export default About;
