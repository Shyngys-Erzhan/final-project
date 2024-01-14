import { Card } from 'antd';
import PropTypes from 'prop-types';
import { TbBrandShopee } from "react-icons/tb";
import styles from './products.module.css';

const { Meta } = Card;

const Products = ({ products, onProductClick }) => {
  return (
    <div className={styles.product_content}>
      {products.map((product) => (
        <Card
          key={product.id}
          hoverable
          style={{ width: 240 }}
          cover={<img alt={product.title} src={Array.isArray(product.images) ? product.images[0] : product.images} />}
          onClick={() => onProductClick(product.title)}
        >
          <Meta title={product.title} description={`${product.price}$`} />
          <div className={styles.card_shop}>
            <TbBrandShopee size="25" color="white" />
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