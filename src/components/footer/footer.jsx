import styles from "./footer.module.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <p>QAMALLADIN University 2023</p>
        <p>Made by Shyngys</p>
      <div className={styles.contacts}>
        <a
          className={styles.footer_contacts_instagram}
          href="https://www.instagram.com/erzhan.shyngyss/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className={styles.footer_contacts_github}
          href="https://github.com/Shyngys-Erzhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className={styles.footer_contacts_linkedin}
          href="https://www.linkedin.com/in/shyngys-erzhan-b74b54287/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className={styles.footer_contacts_telegram}
          href="https://t.me/shyngys_erzhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTelegram />
        </a>
      </div>
    </div>
  );
};