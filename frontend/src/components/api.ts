// src/api/auth.ts
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Update with your backend URL

interface SignUpData {
  name: string;
  email: string;
  phone: string;
  password: string;
  location: string;
  role: string;
}

export const authAPI = {
  signUp: async (userData: SignUpData) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, userData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Signup failed');
      }
      throw new Error('Signup failed');
    }
  },
};