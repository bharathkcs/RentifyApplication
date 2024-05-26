import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()

  const handleRegisterSuccess = (user) => {
    console.log('Registration Successful', user);
    navigate('/login');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2 style={{ color: '#4A90E2' }}>Register</h2>
      <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
      <Link to="/login" style={{ color: '#4A90E2', textDecoration: 'none' }}>Already have an account? Log in</Link>
    </div>
  );
};

export default Register;
