import { Input, Space } from 'antd';
import PropTypes from 'prop-types';
const { Search } = Input;

const CustomInput = ({ value, onChange, onSearch }) => (
  <Space direction="vertical">
    <Search
      placeholder="Поиск..."
      value={value}
      onChange={onChange}
      onSearch={onSearch}
      enterButton
      allowClear
    />
  </Space>
);

CustomInput.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default CustomInput;