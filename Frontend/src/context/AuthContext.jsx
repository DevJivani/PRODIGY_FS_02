import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('http://localhost:5000/api/auth/user', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem('token');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const { data } = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
    });
    localStorage.setItem('token', data.token);
    const userData = await axios.get('http://localhost:5000/api/auth/user', {
      headers: { Authorization: `Bearer ${data.token}` },
    });
    setUser(userData.data);
  };

  const register = async (username, email, password) => {
    await axios.post('http://localhost:5000/api/auth/register', {
      username,
      email,
      password,
    });
    // Don't automatically log in after registration
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;