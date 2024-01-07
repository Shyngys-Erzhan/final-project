import styles from './products.module.css';
import PropTypes from 'prop-types';

const Products = ({ products, onProductClick }) => {
  return (
    <div className={styles.product_content}>
      {products.map((product) => (
        <div className={styles.card} key={product.id} onClick={() => onProductClick(product.title)}>
          <img src={Array.isArray(product.images) ? product.images[0] : product.images} alt={product.title} />
          <p>{product.title}</p>
          <p className={styles.title}>{product.price}$</p>
        </div>
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