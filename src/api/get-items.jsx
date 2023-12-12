import axios from "axios";
import { useEffect, useState } from "react"


async function getUser() {
  try {
    const response = await axios
      .get(
        "https://api.escuelajs.co/api/v1/products/?price_min=500&price_max=1000?offset=0&limit=10"
      );
    return response;
  } catch (error) {
    console.error(error);
  }
}


function Items() {
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
      {categories.map((categories) => (
        <div key={categories.id}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={categories.images} style={{ width: "100px" }} />
            <p style={{ color: "red" }}>{categories.title}</p>
          </div>
        </div >
      ))
      }
    </>
  );
}

export default Items;