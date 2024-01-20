import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
// import { useState, useEffect } from "react";
import styles from "./cart.module.css";

function Cart() {
  // const [cart, setCart] = useState([]);
  // const [loading, setLoading] = useState(true);



  // const fetchCart = async () => {
  //   try {
  //     const response = await fetch('https://api.escuelajs.co/api/v1/categories/6');
  //     const data = await response.json();
  //     setCart(data);
  //   } catch (error) {
  //     console.error('Ошибка при загрузке корзины:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  // useEffect(() => {
  //   fetchCart();
  // }, []);

  return (
    <>
      <Header />
      <div className={styles.card}></div>
      <Footer />
    </>
  );
}

export default Cart;
