import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import Categories from "./categories/categories";
import TopProducts from "./top-products/top-products";
import styles from "./home.module.css";
import videoBg from "../../assets/videos/home_background.mp4"

function Home() {

  return (
    <>
      <Header />
      <div className={styles.container} >

        <div className={styles.video_content}>
          <video src={videoBg} autoPlay loop muted />


          <div className={styles.text_content}>
            <h1>
              Добро пожаловать в наш уникальный онлайн магазин, где стиль встречается с удобством,
              а разнообразие товаров подчеркивает вашу индивидуальность!
              Исследуйте наши категории и обнаружьте мир возможностей для трансформации вашей повседневной жизни.
            </h1>

          </div>


        </div>


        <div className={styles.content}>
          <h2>Categories</h2>
          <Categories />
        </div>
        <h2>Top products</h2>
        <TopProducts />
      </div>
      <Footer />
    </>
  );
}

export default Home;
