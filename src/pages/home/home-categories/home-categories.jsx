import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styles from "./home-categories.module.css";
import { getCategories } from "../../../api/get-categories";

const { Meta } = Card;

function Categories() {
  const [categories, setCategories] = useState([]);

  async function displayCategories() {
    try {
      const response = await getCategories();
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
      <div className={styles.container}>
        {categories.map((category) => (
          <Link className={styles.link} key={category.id} to={`/catalog`} >
            <Card hoverable style={{ width: 240 }} cover={<img alt={category.name} src={category.image} />} >
              <Meta title={category.name} />
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Categories;