import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
// import styles from "./catalog.module.css";
import CategoriesCatalog from "./categories/categories-catalog";

function Catalog() {

  return (
    <>
      <Header />
      <CategoriesCatalog />
      <Footer />
    </>
  );
}

export default Catalog;
