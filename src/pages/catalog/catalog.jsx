import { useState, useEffect } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import Input from './input/input';
import Categorize from './categorize/categorize';
import Products from './products/products';
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
      console.error('Error loading categories:', error);
    }
  };

  const loadProducts = async (categoryId) => {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };
  const handleProductClick = (productId) => {
    navigate(`/catalog/v1/products/${productId}`);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory !== null) {
      loadProducts(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.page_header}>
          <Categorize categories={categories} onCategoryClick={handleCategoryClick} />

          <div className={styles.content}>
            <p>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все футболки'}</p>
            <Input value={searchValue} onChange={onChangeSearchInput} onClear={() => setSearchValue('')} />
          </div>
        </div>

        <Products products={filteredProducts} onProductClick={handleProductClick} />
      </div>
      <Footer />
    </>
  );
};

export default Catalog;