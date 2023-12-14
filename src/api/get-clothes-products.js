import axios from "axios";


export const getClothes = async () => {
  const response = await axios.get("https://api.escuelajs.co/api/v1/categories/1/products?offset=0&limit=5"
  );
  return response.data;
}