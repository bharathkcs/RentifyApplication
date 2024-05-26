import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyList from '../components/PropertyList'; 


const BuyerDashboard = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);

  const type = localStorage.getItem("type");
  const id = localStorage.getItem("id");
  console.log(" buyer id:", id)
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else if (type !== "buyer") {
      navigate("/seller");
    } 
  }, [navigate]);


  return (
    <div className="buyer-dashboard">
      <h1>Welcome to Your Buyer Dashboard</h1>
      <p>Explore properties, find details, and discover your perfect home!</p>
      <PropertyList type={type} buyerId={id}/>
    </div>
  );
};

export default BuyerDashboard;
