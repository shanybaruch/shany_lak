import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Replace with your backend URL

// Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API Calls
const userAPI = {
  // Get all users
  getAllUsers: async () => {
    try {
      const response = await api.get('/users');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Register user
  register: async (userData) => {
    try {
      const response = await api.post('users/register', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Verify authentication code
  verifyCode: async (verificationData) => {
    try {
      const response = await api.post('users/verify', verificationData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Login user
  login: async (loginData) => {
    try {
      const response = await api.post('users/login', loginData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default userAPI;
