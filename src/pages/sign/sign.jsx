import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./sign.module.css"

function Sign() {
  return (
    <>
      <Header />
      <div className={styles.w}></div>
      <Footer />
    </>
  );
}

export default Sign;
