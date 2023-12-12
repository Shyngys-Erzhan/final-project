import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./miscellaneous.module.css";
import { useEffect, useState } from "react";
import axios from "axios";


async function getUser() {
  try {
    const response = await axios
      .get(
        "https://api.escuelajs.co/api/v1/categories"
      );
    return response;
  } catch (error) {
    console.error(error);
  }
}


function Miscellaneous() {
  const [categories, setCategories] = useState([])

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
      <Footer />
    </>
  );
}

export default Miscellaneous;