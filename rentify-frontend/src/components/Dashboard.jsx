import React from 'react';
import PropertyList from './PropertyList';

const Dashboard = ({ userType }) => {
  return (
    <div>
      <h1>{userType === 'seller' ? 'Seller Dashboard' : 'Buyer Dashboard'}</h1>
      <PropertyList userType={userType} />
    </div>
  );
};

export default Dashboard;
