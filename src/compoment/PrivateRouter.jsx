import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Check authentication status
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRouter;
