
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
      if (response && response.length > 0) {
        setCategories(response);
      } else {
        console.error("Получен пустой ответ от сервера или неверный формат данных.");
      }
    } catch (error) {
      console.error("Произошла ошибка при получении данных:", error);
    }
  }


  useEffect(() => {
    displayCategories();
  }, []);


  return (
    <>
      <div className={styles.container} >
        {categories.map((category) => (
          <Link
            className={styles.link}
            key={category.id}
            to={`/catalog`}
          >
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Categories;