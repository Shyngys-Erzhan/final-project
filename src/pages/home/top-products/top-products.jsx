import { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { getTopProducts } from "../../../api/get-top-products";
import style from "./top-products.module.css";
import left from "../../../assets/images/pointer-left-svgrepo-com.svg";
import right from "../../../assets/images/pointer-right-svgrepo-com.svg";

const { Meta } = Card;

function TopProducts() {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);

  async function displayTopProducts(offset) {
    try {
      const response = await getTopProducts(offset);
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
    <div className={style.content}>
      <Button className={style.arrowButton} onClick={arrowLeft}>
        <img className={style.img_left} src={left} alt="Left Arrow" />
      </Button>
      <div className={style.cardContainer}>
        {products.map((product) => (
          <Card key={product.id} hoverable className={style.productCard}>
            <img src={product.images} alt={product.title} className={style.productImage} />
            <Meta title={product.title} description={`${product.price}$`} className={style.productText}/>
          </Card>
        ))}
      </div>
      <Button className={style.arrowButton} onClick={arrowRight}>
        <img className={style.img_right} src={right} alt="Right Arrow" />
      </Button>
    </div>
  );
}

export default TopProducts;