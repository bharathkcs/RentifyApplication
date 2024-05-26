import React from 'react';
import { expressInterest } from '../api/api'; 

const Property = ({ property, type, buyerId }) => {
  console.log("Type:", type)

  const handleLike = async () =>{
    try {
      const result = await expressInterest({propertyId: property._id, buyerId});
      alert(`Details sent to your email: ${result.data.message}`);
    } catch (error) {
      console.error('Failed to express interest:', error.response.data.message);
    }
  }


  return (
    <div>
      <h3>{property.title}</h3>
      <p>Location: {property.location}</p>
      <p>Price: {property.price}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Type: {property.type}</p>
      <p>Amenities: {property.amenities}</p>
      {type === "buyer" &&<button onClick={handleLike}>I'm Interested</button>}
      {type === "seller" &&<button onClick={() => alert(`pending`)}>Update</button>}
    </div>
  );
};

export default Property;
