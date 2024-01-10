import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header } from '../../../../components/header/header';
import { Footer } from '../../../../components/footer/footer';
import styles from './product-details.module.css';

const ProductDetails = () => {
  const { categoryId, productId: ProductId } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products/${ProductId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error loading product details:', error);
      }
    };
    fetchProductDetails();
  }, [categoryId, ProductId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <div className={styles.product_content}>
        <div className={styles.card} key={product.id} >
          <img src={Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : 'default-image-url'} alt={product.title} />
          <p>{product.name}</p>
          <p className={styles.title}>{product.price}$</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default ProductDetails;