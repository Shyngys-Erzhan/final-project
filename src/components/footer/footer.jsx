import styles from "./footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";


export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>QAMALLADIN University 2023</p>
      <p>Made by Shyngys</p>
      <div className={styles.contacts}>
        <div>
          <a
            className={styles.footer_contacts_instagram}
            href="https://www.instagram.com/erzhan.shyngyss/"
            target="blank"
          ><FaInstagram />
          </a>
        </div>
        <div>
          <a
            className={styles.footer_contacts_github}
            href="https://github.com/Shyngys-Erzhan"
            target="blank">
            <FaGithub />
          </a>
        </div>
        <div>
          <a
            className={styles.footer_contacts_linkedin}
            href="https://www.linkedin.com/in/shyngys-erzhan-b74b54287/"
            target="blank"
          ><FaLinkedin />
          </a>
        </div>
        <div>
          <a
            className={styles.footer_contacts_telegram}
            href="https://t.me/shyngys_erzhan"
            target="blank"          >
            <BsTelegram />
          </a>
        </div>
      </div>
    </div>
  );
};
