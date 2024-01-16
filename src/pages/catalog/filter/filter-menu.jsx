import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, InputNumber } from 'antd';
import styles from './filter-menu.module.css';

const FilterMenu = ({ onFilter, onClose }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    // Загрузка данных из localStorage при монтировании компонента
    const savedMinPrice = localStorage.getItem('minPrice');
    const savedMaxPrice = localStorage.getItem('maxPrice');

    if (savedMinPrice !== null) {
      setMinPrice(savedMinPrice);
    }

    if (savedMaxPrice !== null) {
      setMaxPrice(savedMaxPrice);
    }
  }, []);

  const handleFilterClick = () => {
    onFilter({ minPrice, maxPrice });
    saveToLocalStorage(); // Сохранение данных в localStorage при применении фильтра
    onClose(); // Закрыть модальное окно после применения фильтра
  };

  const handleClearClick = () => {
    setMinPrice('');
    setMaxPrice('');
    clearLocalStorage(); // Очистка данных в localStorage при очистке фильтра
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('minPrice', minPrice);
    localStorage.setItem('maxPrice', maxPrice);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('minPrice');
    localStorage.removeItem('maxPrice');
  };

  return (
    <Modal
      title="Фильтр"
      visible={true}
      onCancel={onClose}
      footer={[
        <Button key="clear" onClick={handleClearClick}>
          Очистить
        </Button>,
        <Button key="apply" type="primary" onClick={handleFilterClick}>
          Применить
        </Button>,
      ]}
    >
      <div className={styles.filterContent}>
        <div className={styles.filterItem}>
          <label>Минимальная цена:</label>
          <InputNumber
            style={{ width: '100%' }}
            placeholder="Введите минимальную цену"
            value={minPrice}
            onChange={(value) => setMinPrice(value)}
          />
        </div>
        <div className={styles.filterItem}>
          <label>Максимальная цена:</label>
          <InputNumber
            style={{ width: '100%' }}
            placeholder="Введите максимальную цену"
            value={maxPrice}
            onChange={(value) => setMaxPrice(value)}
          />
        </div>
      </div>
    </Modal>
  );
};

FilterMenu.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FilterMenu;
