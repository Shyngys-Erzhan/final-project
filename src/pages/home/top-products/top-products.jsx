
import { useEffect, useState } from "react"
import { getTopProducts } from "../../../api/get-top-products";
import style from "./top-products.module.css"
import left from "../../../assets/images/arrow-left-circle-svgrepo-com.svg"
import right from "../../../assets/images/arrow-right-circle-svgrepo-com.svg"


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
        <button onClick={arrowLeft}>
          <img className={style.img_left} src={left} />
        </button>
        {products.map((products) => (
          <div className={style.card} key={products.id}>
            <img src={products.images} />
            <p>{products.title}</p>
            <p className={style.title}>{products.price}$</p>
          </div >
        ))
        }
        <button onClick={arrowRight}>
          <img className={style.img_right} src={right} />
        </button>
      </div>
    </>
  );
}

export default TopProducts;