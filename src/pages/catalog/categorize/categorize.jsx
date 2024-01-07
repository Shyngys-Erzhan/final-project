import styles from './categorize.module.css';
import PropTypes from 'prop-types';


const Categorize = ({ categories, onCategoryClick }) => {
  return (
    <div className={styles.page_categories_container}>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => onCategoryClick(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
Categorize.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default Categorize;