import React, { createContext, useState } from 'react';

// Buat context AuthContext
export const AuthContext = createContext();

// Buat provider AuthProvider untuk menyimpan state token
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
