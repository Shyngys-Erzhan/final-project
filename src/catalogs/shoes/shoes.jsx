import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from "./shoes.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";





function Shoes() {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('https://api.escuelajs.co/api/v1/products')
      setCategories(res.data)
    }
    getCategories()
  }, [])


  return (
    <>
      <Header />
      <div className={styles.categories_main}>
        {categories.map((categories) => (
          <div key={categories.id}>
            <div className={styles.categories} >
              <div className={styles.categories_bottom} >
                <img src={categories.images} style={{ width: "100px" }} />
                <p>{categories.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Shoes;
