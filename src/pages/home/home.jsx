import { useEffect, useState } from "react";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
// import { getCategories } from "../../api/get-categories";
// import { getItems } from "../../api/get-items";
import styles from "./home.module.css";
import axios from "axios";
import videoBg from "../../assets/videos/home_background.mp4"


async function getUser() {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=30"
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}

function Home() {
  const [products, setProducts] = useState([]);
  console.log(products);

  const displayItems = async () => {
    const response = await getUser();
    if (response) {
      setProducts(response.data);
    }
  };

  useEffect(() => {
    displayItems();
  }, []);


  return (
    <>
      <Header />
      <div className={styles.home}>

        <div className={styles.video_content}>
          <video src={videoBg} autoPlay loop muted />
          <div className={styles.video_text}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt neque accusamus animi sapiente voluptatibus at molestiae autem ducimus esse.
              Fuga impedit a illum aut nostrum dolores deserunt quam ratione omnis.</p>
          </div>
        </div>

        <div className={styles.home_container} style={{ display: "flex", flexWrap: "wrap", gap: "30px" }} >
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.images[0]} alt="" style={{ width: "200px" }} />
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
