import PropTypes from 'prop-types';
import styles from './filter-button.module.css';

const FilterButton = ({ label, onClick }) => {
  return (
    <button className={styles.filterButton} onClick={onClick}>
      {label}
    </button>
  );
};

FilterButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterButton;