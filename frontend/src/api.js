import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(`${API_URL}/products`, product);
  return response.data;
};

export const getSales = async (startDate, endDate) => {
  const response = await axios.get(`${API_URL}/sales`, { params: { startDate, endDate } });
  return response.data;
};

export const addSale = async (sale) => {
  const response = await axios.post(`http://localhost5000/sales`, sale);
  return response.data;
};
