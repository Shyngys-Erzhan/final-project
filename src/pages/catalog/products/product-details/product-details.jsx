import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Typography, Spin, Button } from 'antd';
import { Header } from '../../../../components/header/header';
import { Footer } from '../../../../components/footer/footer';
import styles from './product-details.module.css';
// import { TbBrandShopee } from "react-icons/tb";


const { Title, Text } = Typography;

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);



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

  const nextImage = () => {
    if (product && product.images.length > 0) {
      const newIndex = (currentImageIndex + 1) % product.images.length;
      setCurrentImageIndex(newIndex);
    }
  };

  const prevImage = () => {
    if (product && product.images.length > 0) {
      const newIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
      setCurrentImageIndex(newIndex);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <Spin tip="Loading...">
          <div style={{ width: '200px', height: '200px' }} />
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
          <div className={styles.product_details}>
            <div className={styles.product_image}>
              <img alt={product.title} src={product.images[currentImageIndex]} />
              <div>
                <Button onClick={prevImage}>Previous</Button>
                <Button onClick={nextImage}>Next</Button>
              </div>
            </div>
            <div className={styles.product_info}>
              <Card className={styles.product_card} hoverable style={{ width: 300 }} >
                <Title level={4}>{product.title}</Title>
                <p>{product.description}</p>
                <Text strong>Category: {product.category.name}</Text>
                <p >Price: {product.price}$</p>
                <div className={styles.card_shop}>

                </div>
              </Card>
            </div>
          </div>
        ) : (
          <div className={styles.loading_container}>
            <Spin tip="Loading...">
              <div style={{ width: '200px', height: '200px' }} />
              <p>Product not found</p>
            </Spin>
          </div>
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
