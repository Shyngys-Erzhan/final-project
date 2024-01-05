import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
// import styles from "./catalog.module.css";
import CategoriesPage from "./categories/categories-page";

function Catalog() {

  return (
    <>
      <Header />
      <CategoriesPage />
      <Footer />
    </>
  );
}

export default Catalog;
