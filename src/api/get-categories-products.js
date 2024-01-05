import axios from "axios";

export const getCategoriesProducts = async () => {
  const response = await axios.get("https://api.escuelajs.co/api/v1/categories/1/products");
  return response.data;
}