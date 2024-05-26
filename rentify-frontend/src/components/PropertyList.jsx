import React, { useEffect, useState } from 'react';
import { fetchProperties, fetchSellerProperties } from '../api/api';
import Property from './Property';

const PropertyList = ({type, buyerId = undefined, sellerId = undefined}) => {
  console.log("sellerID", sellerId)
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const response = await fetchProperties();
        setProperties(response.data);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      }
    };

    const getSellerProperties = async () =>{
      try {
        const response = await fetchSellerProperties(sellerId)
        setProperties(response.data);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      }
    }

    if(type === "buyer"){
      getProperties();
    } else {
      getSellerProperties();
    }
    
  }, []);

  return (
    <div>
      {properties.map(property => (
        <Property key={property._id} property={property} type={type} buyerId={buyerId}/>
      ))}
    </div>
  );
};

export default PropertyList;
