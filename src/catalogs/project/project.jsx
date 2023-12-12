import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./project.module.css";
import { useState, } from "react";



function Project() {
  const [categories, setCategories] = useState([]);
  fetch("https://api.escuelajs.co/api/v1/categories?offset=0&limit=5")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setCategories(json);
    });



  return (
    <>
      <Header />
      <div className={styles.categories_main}>
        {categories.map((categories) => (
          <div key={categories.id}>

            <div className={styles.categories}>
              <div className={styles.card_top}>
                <img src={categories.image} alt="" style={{ width: "200px" }} />
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

export default Project;
