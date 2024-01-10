// import { useState } from 'react';
// import styles from './filter-menu.module.css';
// import PropTypes from 'prop-types';

// const FilterMenu = ({ onFilter }) => {
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');

//   const handleFilter = () => {
//     onFilter({
//       minPrice: parseFloat(minPrice) || 0,
//       maxPrice: parseFloat(maxPrice) || Infinity,
//     });
//   };

//   return (
//     <div className={styles.filterMenu}>
//       <label htmlFor="minPrice">Минимальная цена:</label>
//       <input
//         type="number"
//         id="minPrice"
//         value={minPrice}
//         onChange={(e) => setMinPrice(e.target.value)}
//       />
//       <label htmlFor="maxPrice">Максимальная цена:</label>
//       <input
//         type="number"
//         id="maxPrice"
//         value={maxPrice}
//         onChange={(e) => setMaxPrice(e.target.value)}
//       />
//       <button onClick={handleFilter}>Применить</button>
//     </div>
//   );
// };

// FilterMenu.propTypes = {
//   onFilter: PropTypes.func.isRequired,
// };

// export default FilterMenu;