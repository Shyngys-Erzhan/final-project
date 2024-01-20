import { useState } from 'react';
import { Card, Button } from 'antd';
import PropTypes from 'prop-types';
import { TbBrandShopee } from 'react-icons/tb';
import styles from './products.module.css';
import { useTheme } from '../../../contexts/themeUtils';
import { useEffect } from 'react';

const { Meta } = Card;

const Products = ({ products, onProductClick }) => {
  const [categoryData, setCategoryData] = useState({
    name: 'Card',
    image: 'https://placeimg.com/640/480/any',
    products: [],
  });


  const { themeState } = useTheme();
  const { darkMode } = themeState;



  useEffect(() => {
    console.log("Theme updated in Footer:", darkMode);
  }, [darkMode]);


  const handleCreateCategory = async (productId) => {
    try {
      if (!categoryData.products.includes(productId)) {
        const productToAdd = products.find((product) => product.id === productId);

        const categoryId = 'Card';

        const requestData = {
          name: categoryId,
          image: productToAdd.images[0],
          product: {
            id: productToAdd.id,
            title: productToAdd.title,
            price: productToAdd.price,
          },
        };

        if (!requestData.name) {
          console.error('Ошибка: поле name не должно быть пустым');
          return;
        }

        const response = await fetch(`https://api.escuelajs.co/api/v1/cards/1`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });

        if (response.ok) {
          console.log('Товар успешно добавлен в категорию');
          setCategoryData({ ...categoryData, products: [...categoryData.products, productId] });
        } else {
          console.error('Ошибка при добавлении товара в категорию');
          console.error(await response.text());
        }
      } else {
        console.log('Товар уже добавлен в категорию');
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };




  return (
    <div className={`${styles.product_content} ${darkMode ? styles.darkMode : ""}`}>
      {products.map((product) => (
        <Card
          key={product.id}
          hoverable
          style={{ width: 240, margin: 10 }}
          cover={<img alt={product.title} src={Array.isArray(product.images) ? product.images[0] : product.images} />}
          onClick={() => onProductClick(product.id)}
        >
          <Meta title={product.title} description={`${product.price}$`} />
          <div className={styles.card_shop}>
            <Button onClick={() => handleCreateCategory(product.id)}>
              <TbBrandShopee size="25" color="black" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
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
  onProductClick: PropTypes.func.isRequired,
};

export default Products;

