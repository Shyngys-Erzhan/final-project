import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";



async function getUser() {
  try {
    const response = await axios
      .get(
        "https://api.escuelajs.co/api/v1/categories?offset=0&limit=5"
      );
    return response;
  } catch (error) {
    console.error(error);
  }
}

function Categories() {
  const [categories, setCategories] = useState([])

  const displayItems = async () => {
    const response = await getUser();
    if (response) {
      setCategories(response.data);
    }
  };

  useEffect(() => {
    displayItems();
  }, []);



  return (
    <>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {categories.map((categories) => (
          <Link key={categories.id} to={`/catalog/${categories.id}`} style={{textDecoration:"none"}}>

            <div key={categories.id}>
              <div >
                <img src={categories.image} alt={categories.name} style={{ width: "200px" }} />
                <div>
                  <p style={{ color: "cyan", fontSize: "20px" }}>{categories.name}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Categories;