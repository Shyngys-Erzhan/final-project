import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import Categories from "./categories/categories";
import TopProducts from "./top-products/top-products";
import HomeHeader from "./home-header/home-header";
import styles from "./home.module.css";

function Home() {

  return (
    <>
      <Header />
      <HomeHeader />
      <h2 className={styles.container}>Categories</h2>
      <Categories />
      <h2>Top products</h2>
      <TopProducts />
      <Footer />
    </>
  );
}

export default Home;
