import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for logged-in user
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button 
          className="navbar-brand btn btn-link text-decoration-none" 
          onClick={() => navigate('/')}
        >
          MyApp
        </button>
        

        <div className="d-flex">
          {user ? (
            <>
              <span className="navbar-text me-3">Welcome, {user.name}</span>
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                className="btn btn-outline-primary me-2" 
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button 
                className="btn btn-outline-success" 
                onClick={() => navigate('/signup')}
              >
                Signup
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
