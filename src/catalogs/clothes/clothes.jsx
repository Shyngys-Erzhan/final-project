import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { useEffect, useState } from "react"
import { getClothes } from "../../api/get-clothes-products";
import style from "../clothes/clothes.module.css";
import { FaRegWindowClose } from "react-icons/fa";


function Clothes() {
  const [products, setProducts] = useState([])
  const [searchValue, setSearchValue] = useState("")


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

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    displayCategories();
  }, []);


  return (
    <>
      <Header />
      <div className={style.content}>
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все футболки"}</h1>
        <div className={style.input_content}>
          {searchValue &&
            <FaRegWindowClose style={{ width: "20px", height: "20px" }}
              className={style.closeButton}
              onClick={() => setSearchValue("")}
            />
          }
          <div className={style.inputWrapper}>
            <input
              className={style.input}
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск...">
            </input>
          </div>
        </div>
      </div>
      <div className={style.container}>
        {products.map((products) => (
          <div className={style.card} key={products.id}>
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