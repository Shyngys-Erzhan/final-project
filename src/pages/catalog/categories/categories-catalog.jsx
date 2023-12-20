import { useEffect, useState } from "react"
import { getCategories } from "../../../api/get-categories";
import { Link } from "react-router-dom";
import styles from "./categories-catalog.module.css";
import { FaRegWindowClose } from "react-icons/fa";


function CategoriesCatalog() {
  const [categories, setCategories] = useState([])
  const [searchValue, setSearchValue] = useState("")


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


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }


  useEffect(() => {
    displayCategories();
  }, []);


  return (
    <>
      <div className={styles.container} >
        <div className={styles.categories}>
          {categories.map((categories) => (
            <Link className={styles.link} key={categories.id} to={`/catalog/${categories.id}`}>
              <p>{categories.name}</p>
            </Link>
          ))}
        </div>
        <div className={styles.content}>
          <p>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все футболки"}</p>
          <div className={styles.input_content}>
            {searchValue &&
              <FaRegWindowClose style={{ width: "20px", height: "20px" }}
                className={styles.closeButton}
                onClick={() => setSearchValue("")}
              />
            }
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                onChange={onChangeSearchInput}
                value={searchValue}
                placeholder="Поиск...">
              </input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesCatalog;