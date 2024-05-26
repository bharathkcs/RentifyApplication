import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLoginSuccess={(user) => {
        console.log('Login Successful', user);
        if(user.user.userType === "buyer"){
          navigate('/buyer');
        } else {
          navigate('/seller');
        }

        localStorage.setItem("token", user.token)
        localStorage.setItem("type", user.user.userType)
        localStorage.setItem("id", user.user._id)
      }} />
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
