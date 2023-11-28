import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./catalog.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

async function getUser() {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/categories/1/products?offset=0&limit=5"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

function Catalog() {
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
      <div className={styles.catalog}>
        {products.map((product) => (
          <div key={product.id}>
            <div className={styles.categories}>
              <img src={product.images[0]} alt="" style={{ width: "250px", }} />
              <p>{product.title}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Catalog;
