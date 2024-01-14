import { useState } from 'react';
import styles from './catalog-header.module.css';
import CustomInput from '../../input/input';
import CatalogCategories from '../catalog-categories/catalog-categories';
import PropTypes from 'prop-types';
import FilterMenu from '../../filter/filter-menu';
import { BsFilter } from 'react-icons/bs';

const CatalogHeader = ({
  categories,
  onCategoryClick,
  searchValue,
  onChangeSearchInput,
  onFilter
}) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const handleSearch = (value) => {
    console.log('Выполняется поиск с запросом:', value);
  };

  return (
    <div className={styles.page_header}>
      <CatalogCategories categories={categories} onCategoryClick={onCategoryClick} />
      <div className={styles.content}>
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "All items"}</h1>
        <CustomInput
          value={searchValue}
          onChange={(e) => onChangeSearchInput(e)}
          onSearch={handleSearch}
        />
        <div className={styles.filterIcon} onClick={toggleFilterMenu}>
          <BsFilter size="40" color='#fff' />
        </div>
        {showFilterMenu && <FilterMenu onFilter={onFilter} onClose={() => setShowFilterMenu(false)} />}
      </div>
    </div>
  );
};

CatalogHeader.propTypes = {
  categories: PropTypes.array.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  onChangeSearchInput: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default CatalogHeader;