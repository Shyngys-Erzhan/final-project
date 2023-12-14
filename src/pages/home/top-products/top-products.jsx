
import { useEffect, useState } from "react"
import { getTopProducts } from "../../../api/get-top-products";
import style from "./top-products.module.css"


function TopProducts() {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);


  async function displayTopProducts(offset) {
    try {
      const response = await getTopProducts(
        offset
      );
      if (response) {
        setProducts(response);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function arrowLeft() {
    if (offset === 0) return;
    setOffset(offset - 1);
  }

  function arrowRight() {
    setOffset(offset + 1);
  }

  useEffect(() => {
    displayTopProducts(offset);
  }, [offset]);



  return (
    <>
      <div className={style.content}>
        <button onClick={arrowLeft}>Left</button>
        {products.map((categories) => (
          <div key={categories.id}>
            <img src={categories.images} />
            <p>{categories.title}</p>
          </div >
        ))
        }
        <button onClick={arrowRight}>Right</button>
      </div>
    </>
  );
}

export default TopProducts;