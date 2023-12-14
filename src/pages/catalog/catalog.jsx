import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./catalog.module.css";
import Categories from "../../pages/home/categories/categories";

function Catalog() {

  return (
    <>
      <Header />
      <div className={styles.catalog}>
        <div className={styles.catalog_content}>
          <h1>Categories</h1>
        </div>
        <Categories />
      </div>
      <Footer />
    </>
  );
}

export default Catalog;
