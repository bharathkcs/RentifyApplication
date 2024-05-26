import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const loginUser = (userData) => axios.post(`${API_URL}/api/auth/login`, userData);
export const registerUser = (userData) => axios.post(`${API_URL}/api/auth/register`, userData);
export const fetchProperties = () => axios.get(`${API_URL}/api/properties`);

export const addProperty = (propertyData) => axios.post(`${API_URL}/api/properties`, propertyData);

export const fetchSellerProperties = (sellerId) => axios.get(`${API_URL}/api/properties/seller/${sellerId}`);
export const updateProperty = (id, propertyData) => axios.patch(`${API_URL}/api/properties/${id}`, propertyData);
export const deleteProperty = (id) => axios.delete(`${API_URL}/api/properties/${id}`);

export const expressInterest = ({propertyId, buyerId}) => axios.post(`${API_URL}/api/properties/interest/${propertyId}`, {buyerId});
