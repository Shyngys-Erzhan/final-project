import { Menu } from 'antd';
import styles from './catalog-categories.module.css';
import PropTypes from 'prop-types';

const CatalogCategories = ({ categories, onCategoryClick }) => {
  const handleClick = (category) => {
    onCategoryClick(category.id);
  };

  return (
    <div className={styles.page_categories_container}>
      <Menu mode="vertical">
        {categories.map((category) => (
          <Menu.Item key={category.id} onClick={() => handleClick(category)} item={category}>
            {category.name}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

CatalogCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default CatalogCategories;
