import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addProperty, fetchSellerProperties } from '../api/api'; 
import PropertyList from '../components/PropertyList'; 

const SellerDashboard = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    type: '',
    amenities: ''
  });

  const id = localStorage.getItem("id");
  console.log(" seller id:", id)
  const type = localStorage.getItem("type");

  useEffect(() => {
    const token = localStorage.getItem("token");
    

    if (!token) {
      navigate("/login");
    } else if (type !== "seller") {
      navigate("/buyer");
    } else {
      loadProperties();
    }
  }, [navigate]);

  const loadProperties = async () => {
    const fetchedProperties = await fetchSellerProperties();
    setProperties(fetchedProperties.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProperty = await addProperty({...formData, sellerId: id});
      setFormData({
        title: '',
        location: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        type: '',
        amenities: ''
      });
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  return (
    <div className="seller-dashboard">
      <h1>Seller Dashboard</h1> | <Link to="/logout">Logout</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Property Title" value={formData.title} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input type="number" name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} required />
        <input type="number" name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} required />
        <input type="text" name="type" placeholder="Type (Flat/Independent)" value={formData.type} onChange={handleChange} required />
        <input type="text" name="amenities" placeholder="Amenities (e.g., Swimming Pool)" value={formData.amenities} onChange={handleChange} required />
        <button type="submit">Add Property</button>
      </form>
      <PropertyList type={type} sellerId={id}/>
    </div>
  );
};

export default SellerDashboard;
