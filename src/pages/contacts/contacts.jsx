import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./contacts.module.css";


function Contacts() {

  return (
    <>
      <Header />
      <div className={styles.contacts}>
        <div className={styles.contacts_container_ul}>
          <ul className={styles.contacts_ul}>
            <li data-icon="&#xf015"><a href="#">Instagram</a></li>
            <li data-icon="&#xf2bb"><a href="#">GitHub</a></li>
            <li data-icon="&#xf03a"><a href="#">Linkedin</a></li>
            <li data-icon="&#xf07c"><a href="#">Telegram</a></li>
            <li data-icon="&#xe533"><a href="#">Vk</a></li>
            <li data-icon="&#x40"><a href="#">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacts;