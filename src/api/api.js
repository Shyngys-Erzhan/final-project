// api.js
import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1"; // Замените на базовый URL вашего сервера

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Добавьте другие заголовки, если необходимо
  },
});

// Функция для аутентификации пользователя
export const authenticateUser = async (userData) => {
  try {
    const response = await api.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Функция для регистрации пользователя
export const registerUser = async (userData) => {
  try {
    const response = await api.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Добавьте другие функции для выхода и других запросов, если необходимо
// Например:

// export const logoutUser = async () => {
//   try {
//     const response = await api.post('/api/logout');
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
