import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./project.module.css";



function Project() {



  return (
    <>
      <Header />
      <div className={styles.project}></div>
      <Footer />
    </>
  );
}

export default Project;

