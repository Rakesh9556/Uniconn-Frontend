import axios from "axios";

const BASE_URL = 'http://localhost:8000/user';

// Function to store tokens in local storage
const storeTokens = (accessToken, refreshToken) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};


// for handelling user registration
export const register = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Registration failed');
    }
  };
  



// for handelling user login
  export const login = async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { email, password });
      sessionStorage.setItem('isLoggedIn', 'true'); // Set the logged-in flag in sessionStorage
      const { accessToken, refreshToken } = response.data;
      // Store tokens in local storage
      storeTokens(accessToken, refreshToken);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Login failed');
    }
  };


  // for handelling logout
  export const logout = async () => {
    try {
      // Remove tokens from local storage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      const response = await axios.post(`${BASE_URL}/logout`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Logout failed');
    }
  };