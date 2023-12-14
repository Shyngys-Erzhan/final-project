import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { useEffect, useState } from "react"
import { getClothes } from "../../api/get-clothes-products";
import style from "../clothes/clothes.module.css";

function Clothes() {
  const [products, setProducts] = useState([])


  async function displayCategories() {
    try {
      const response = await getClothes(
      );
      if (response) {
        setProducts(response);
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
      <Header />
      <div className={style.container}>
        {products.map((products) => (
          <div key={products.id}>
            <img src={products.images} alt={products.name} />
            <p>{products.title}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Clothes;