import Products from '../../products/products';
import styles from "./catalog-content.module.css";
import PropTypes from 'prop-types';


const CatalogContent = ({ filteredProducts, onProductClick }) => {
  return (
    <div className={styles.content}>
      <Products products={filteredProducts} onProductClick={onProductClick} />
    </div>
  );
};

CatalogContent.propTypes = {
  filteredProducts: PropTypes.array.isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default CatalogContent;