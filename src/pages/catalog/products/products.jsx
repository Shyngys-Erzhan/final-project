import { Card, Button, message } from 'antd';
import PropTypes from 'prop-types';
import { TbBrandShopee } from 'react-icons/tb';
import { MdDeleteForever } from "react-icons/md";
import styles from './products.module.css';
import { useTheme } from '../../../contexts/themeUtils';
import { useEffect, useState } from 'react';

const { Meta } = Card;

const Products = ({ products, onProductClick, onRemoveFromCartClick, cardClassName, cardContent }) => {
  const { themeState } = useTheme();
  const { darkMode } = themeState;

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (productId) => {
    if (!cart.find(item => item.id === productId)) {
      const selectedProduct = products.find(product => product.id === productId);
      const newCart = [...cart, { id: productId, title: selectedProduct.title, price: selectedProduct.price, images: selectedProduct.images }];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      message.success('Продукт добавлен в корзину');
    }
  }

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    onRemoveFromCartClick && onRemoveFromCartClick(productId);
    message.error('Продукт удален из корзины');
  }

  return (
    <div className={`${styles.product_content} ${darkMode ? styles.darkMode : ""} ${cardContent}`}>
      {products.map((product) => (
        <Card
          key={product.id}
          hoverable
          style={{ width: 240, margin: 10 }}
          className={`${styles.productCard} ${darkMode ? styles.darkMode : ""} ${cardClassName}`}
          cover={<img alt={product.title} src={Array.isArray(product.images) ? product.images[0] : product.images} onClick={() => onProductClick(product.id)}
          />}
        >
          <Meta title={product.title} description={`${product.price} $`} />
          <div className={styles.card_shop}>
            <Button onClick={() => addToCart(product.id)} type='primary' style={{ backgroundColor: cart.find(item => item.id === product.id) ? 'blue' : 'white' }}
            >
              <TbBrandShopee size="25" color="black" />
            </Button>
            <Button onClick={() => removeFromCart(product.id)} type='danger' >
              <MdDeleteForever size="25" color="red" />
            </Button>
          </div>
        </Card>
      ))
      }
    </div >
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      images: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveFromCartClick: PropTypes.func,
  onProductClick: PropTypes.func.isRequired,
  cardClassName: PropTypes.string,
  cardContent: PropTypes.string,
};

export default Products;