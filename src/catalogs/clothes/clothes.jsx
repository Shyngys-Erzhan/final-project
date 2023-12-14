import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./clothes.module.css";

function Clothes() {

  return (
    <>
      <Header />
      <div className={styles.catalog}><p style={{ color: "red" }}>dekmk</p></div>
      <Footer />
    </>
  );
}

export default Clothes;