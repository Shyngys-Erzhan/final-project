import axios from "axios";

export const getItems = async () => {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
