import axios from "axios";

export const getCategories = async () => {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/categories"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};