import React, { useState } from 'react';
import { registerUser } from '../api/api';

const RegisterForm = ({ onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    userType: ''  // Added userType to the state
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerUser(formData);
      console.log(response)
      onRegisterSuccess(response.data);
    } catch (error) {
      console.error('Registration failed:', error.response);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ fontFamily: 'Arial, sans-serif' }}> 
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <select name="userType" value={formData.userType} onChange={handleChange} required>  // Dropdown for user type
        <option value="">Select User Type</option>
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
