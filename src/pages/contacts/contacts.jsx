import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./contacts.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

function Contacts() {

  return (
    <>
      <Header />
      <div className={styles.contacts}>
        <div className={styles.contacts_container_ul}>
          <ul className={styles.contacts_ul}>
            <li data-icon={FaInstagram}><a href="https://www.instagram.com/erzhan.shyngyss/">Instagram</a></li>
            <li data-icon={FaGithub}><a href="https://github.com/Shyngys-Erzhan">GitHub</a></li>
            <li data-icon={FaLinkedin}><a href="https://www.linkedin.com/in/shyngys-erzhan-b74b54287/">Linkedin</a></li>
            <li data-icon={BsTelegram}><a href="https://t.me/shyngys_erzhan">Telegram</a></li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacts;