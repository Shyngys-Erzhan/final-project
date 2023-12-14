
import { useEffect, useState } from "react"
import { getCategories } from "../../../api/get-categories";
import { Link } from "react-router-dom";
import styles from "./categories.module.css";


function Categories() {
  const [categories, setCategories] = useState([])


  async function displayCategories() {
    try {
      const response = await getCategories(
      );
      if (response) {
        setCategories(response);
      }
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    displayCategories();
  }, []);


  return (
    <>
      <div className={styles.container} >
        {categories.map((categories) => (
          <Link className={styles.link} key={categories.id} to={`/catalog/${categories.id}`}>
            <img src={categories.image} alt={categories.name} />
            <p>{categories.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Categories;