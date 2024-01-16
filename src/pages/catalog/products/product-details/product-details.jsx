import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Typography, Spin } from 'antd';
import { Header } from '../../../../components/header/header';
import { Footer } from '../../../../components/footer/footer';
import styles from './product-details.module.css';

const { Title, Text } = Typography;

const ProductDetails = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Ошибка при загрузке деталей продукта:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();

    return () => {
      setProduct(null);
    };
  }, [productId]);

  if (loading) {
    return (
      <>
        <Header />
        <Spin tip="Loading...">
          <div style={{ height: '200px' }} />
        </Spin>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={styles.product_content}>
        {product ? (
          <Card
            className={styles.product_card}
            hoverable
            style={{ width: 300 }}
            cover={<img alt={product.title} src={product.images[0]} />}
          >
            <Title level={4}>{product.title}</Title>
            <Text strong>{`${product.price}$`}</Text>
          </Card>
        ) : (
          <p>No product details available</p>
        )}
      </div>
      <Footer />
    </>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default ProductDetails;

