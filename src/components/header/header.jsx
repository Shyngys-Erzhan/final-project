import { Link } from "react-router-dom";
import { TbBrandShopee } from "react-icons/tb";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { Switch } from "antd";
import styles from "./header.module.css";
import reactImg from "../../assets/images/react.png";
import { useTheme } from "../../contexts/themeUtils";


export const Header = () => {
  const { themeState, dispatch } = useTheme();
  const { darkMode } = themeState;

  const toggleThemeHandler = () => {
    dispatch({ type: "TOGGLE_THEME" });


    const body = document.body;
    body.style.backgroundColor = darkMode ? "#57585E" : "linear-gradient(to top right, white, rgb(56, 55, 55))";
  };



  return (
    <div className={`${styles.wrapper} ${darkMode ? styles.darkMode : ""}`}>
      <div>
        <a className={styles.reactImg}>
          <img className={styles.rot} src={reactImg} alt="react" width="30px" />
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
        <Link to="/Cart" className={styles.link}>
          <TbBrandShopee size="30" color="white" />
        </Link>
        <Link to="/Sign" className={styles.link}>
          <MdOutlineAccountCircle size="25" color="white" />
        </Link>
        <Switch defaultChecked={darkMode} onChange={toggleThemeHandler} />
      </div>
    </div>
  );
};
