import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./contacts.module.css";
function Contacts() {
  return (
    <>
      <Header />
      <h1 className={styles}></h1>
      <Footer />
    </>
  );
}

export default Contacts;