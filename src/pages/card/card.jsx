import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./card.module.css";

function Card() {
  return (
    <>
      <Header />
      <div className={styles.card}>k</div>
      <Footer />
    </>
  );
}

export default Card;
