/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import { TbBrandShopee } from "react-icons/tb";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoHome } from "react-icons/io5";



import reactImg from "../../assets/images/react.png";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.wrapper}>

      <div>
        <a className={styles.reactImg}>
          <img
            className={styles.rot}
            src={reactImg}
            alt="react"
            width="30px"
          ></img>
        </a>
      </div>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link to="/" className={styles.link}>
              <IoHome size="30" color="white" />
            </Link>
          </li>
          <li>
            <Link to="/catalog" className={styles.link}>
              Catalog
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Contacts" className={styles.link}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.nav2}>
        <Link to="/Card" className={styles.linkImg}>
          <TbBrandShopee size="30" color="white" />
        </Link>
        <Link to="/Sign" className={styles.sign}>
          <MdOutlineAccountCircle size="25" color="white" />
        </Link>
      </div>
    </div>
  );
};
