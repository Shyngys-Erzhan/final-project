import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import Products from '../../pages/catalog/products/products';
import styles from "./cart.module.css";

const Cart = () => {
  const getCartItems = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart;
  };

  return (
    <>
      <Header />
      <Products
        products={getCartItems()}
        onProductClick={(productId) => console.log(productId)}
        onRemoveFromCartClick={(productId) => console.log(`Удалить товар с ID ${productId}`)}
        cardClassName={styles.carts}
        cardContent={styles.cart_content}
      />
      <Footer />
    </>
  );
};

export default Cart;

