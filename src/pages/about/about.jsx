import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./about.module.css";

function About() {
  return (
    <>
      <Header />
      <div className={styles.about}>
        <h1 className={styles.firstName}>Shyngys</h1>
      </div>
      <Footer />
    </>
  );
}

export default About;
