import { useEffect, useState } from "react"
import styles from './categories-page.module.css'
import { FaRegWindowClose } from "react-icons/fa";


const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("")


  const loadCategories = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories?offset=0&limit=5');
      const data = await response.json();
      setCategories(data);
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
  }



  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );


  return (
    <div className={styles.container}>
      <div className={styles.page_header}>

        <div className={styles.page_categories_container}>
          <ul>
            {categories.map((category) => (
              <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.content}>
          <p>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все футболки"}</p>
          <div className={styles.input_content}>
            {searchValue &&
              <FaRegWindowClose style={{ width: "20px", height: "20px" }}
                className={styles.closeButton}
                onClick={() => setSearchValue("")}
              />
            }
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                onChange={onChangeSearchInput}
                value={searchValue}
                placeholder="Поиск...">
              </input>
            </div>
          </div>
        </div>

      </div>


      <div className={styles.product_content}>
        {filteredProducts.map(product => (
          <div className={styles.card} key={product.id}>
            <img src={product.images} />
            <p>{product.title}</p>
            <p className={styles.title}>{product.price}$</p>
          </div >
        ))
        }
      </div>

    </div>
  );
};


export default CategoriesPage;