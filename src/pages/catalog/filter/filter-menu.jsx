import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './filter-menu.module.css';
import { BsX } from 'react-icons/bs';
import FilterButton from './filter-button/filter-button';

const FilterMenu = ({ onFilter, onClose }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterClick = () => {
    onFilter({ minPrice, maxPrice });
  };

  const handleClearClick = () => {
    setMinPrice('');
    setMaxPrice('');
    onFilter({});
  };

  return (
    <div className={styles.filterMenu}>
      <div className={styles.filterHeader}>
        <button className={styles.clearButton} onClick={onClose}>
          <BsX size="20" color='red' />
        </button>
      </div>
      <div className={styles.filterContent}>
        <label>
          Минимальная цена:
          <input
            type="number"
            placeholder="введите текст"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>
        <label>
          Максимальная цена:
          <input
            type="number"
            placeholder="введите текст"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.buttonContainer}>
        <FilterButton label="Применить" onClick={handleFilterClick} />
        <FilterButton label="Очистить" onClick={handleClearClick} />
      </div>
    </div>
  );
};

FilterMenu.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FilterMenu;