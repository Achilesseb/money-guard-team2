import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSlice';
import { Navigate } from 'react-router-dom';

function HomePage() {
  const isAuth = useSelector(selectIsLoggedIn);
  return isAuth ? (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  ) : (
    <Navigate to="/register" replace />
  );
}

export default HomePage;
