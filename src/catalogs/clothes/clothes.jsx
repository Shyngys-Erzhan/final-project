import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import axios from "axios";
// import styles from "./clothes.module.css";
import { useEffect, useState } from "react";


async function getUser() {
  try {
    const response = await axios
      .get(
        "https://api.escuelajs.co/api/v1/categories/1/products"
      );
    return response;
  } catch (error) {
    console.error(error);
  }
}


function Clothes() {
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
      {categories.map((categories) => (
        <div key={categories.id}>
          <p>{categories.name}</p>
          <img src={categories.image} style={{ width: "200px" }} />
          <p>{categories.price}</p>
          <p>{categories.title}</p>
        </div>
      ))}
      <Footer />
    </>
  );
}

export default Clothes;