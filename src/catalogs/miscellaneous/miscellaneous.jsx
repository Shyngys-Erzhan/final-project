import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./miscellaneous.module.css";

function Miscellaneous() {

  return (
    <>
      <Header />
      <div className={styles.catalog}></div>
      <Footer />
    </>
  );
}

export default Miscellaneous;