import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./shoes.module.css";

function Shoes() {

  return (
    <>
      <Header />
      <div className={styles.catalog}></div>
      <Footer />
    </>
  );
}

export default Shoes;
