import axios from "axios";


export const getTopProducts = async (offset) => {
  const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=5`
  );
  return response.data;
}






