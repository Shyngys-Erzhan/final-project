// Catalog.jsx
import { useEffect, useState } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import CatalogHeader from './catalog-components/catalog-header/catalog-header';
import CatalogContent from './catalog-components/catalog-content/catalog-content';
import styles from "./catalog.module.css";
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const loadCategories = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories?offset=0&limit=5');
      const data = await response.json();
      setCategories(data);
      if (data.length > 0) {
        setSelectedCategory(data[0].id);
      }
    } catch (error) {
      console.error('Ошибка при загрузке категорий:', error);
    }
  };

  const loadProducts = async (categoryId) => {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Ошибка при загрузке товаров:', error);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/catalog/v1/products/${productId}`);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    navigate(`/catalog/${categoryId}`);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onClearSearch = () => {
    setSearchValue('');
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory !== null) {
      loadProducts(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <CatalogHeader
          categories={categories}
          onCategoryClick={handleCategoryClick}
          searchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          onClearSearch={onClearSearch}
        />
        <CatalogContent filteredProducts={filteredProducts} onProductClick={handleProductClick} />
      </div>
      <Footer />
    </>
  );
};

export default Catalog;