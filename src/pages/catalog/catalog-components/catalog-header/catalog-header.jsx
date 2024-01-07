import styles from "./catalog-header.module.css";
import Input from '../../input/input';
import CatalogCategories from '../catalog-categories/catalog-categories';
import PropTypes from 'prop-types';

const CatalogHeader = ({ categories, onCategoryClick, searchValue, onChangeSearchInput, onClearSearch }) => {
  return (
    <div className={styles.page_header}>
      <CatalogCategories categories={categories} onCategoryClick={onCategoryClick} />
      <div className={styles.content}>
        <p>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все футболки'}</p>
        <Input value={searchValue} onChange={onChangeSearchInput} onClear={onClearSearch} />
      </div>
    </div>
  );
};
CatalogHeader.propTypes = {
  categories: PropTypes.array.isRequired, // Add prop type for 'categories'
  onCategoryClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  onChangeSearchInput: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
};

export default CatalogHeader;