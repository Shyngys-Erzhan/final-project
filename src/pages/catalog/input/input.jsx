import styles from './input.module.css';
import PropTypes from 'prop-types';
import { FaRegWindowClose } from 'react-icons/fa';



const Input = ({ value, onChange, onClear }) => {
  return (
    <div className={styles.input_content}>
      {value && (
        <FaRegWindowClose
          style={{ width: '20px', height: '20px' }}
          className={styles.closeButton}
          onClick={onClear}
        />
      )}
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          onChange={onChange}
          value={value}
          placeholder="Поиск..."
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default Input;