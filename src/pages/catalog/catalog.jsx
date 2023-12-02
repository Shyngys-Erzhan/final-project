import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./catalog.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import { getCategories } from "../../api/get-categories";
// import { getItems } from "../../api/get-items";

async function getUser() {
  try {
    const response = await axios
      .get(
        "https://api.escuelajs.co/api/v1/categories?offset=0&limit=5"
      );
    return response;
  } catch (error) {
    console.error(error);
  }
}

function Categories() {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  const displayItems = async () => {
    const response = await getUser();
    if (response) {
      setCategories(response.data);
    }
  };

  useEffect(() => {
    displayItems();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.catalog}>
        <div className={styles.catalog_content}>
          <h1>Categories</h1>
        </div>
        <div className={styles.categories_main}>
          {categories.map((categories) => (
            <div key={categories.id}>
              <div className={styles.categories}>
                <img src={categories.image} alt="" style={{ width: "200px" }} />
                <div className={styles.categories_bottom}>
                  <p>{categories.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Categories;
