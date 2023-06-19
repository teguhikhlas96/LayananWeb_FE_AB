import React from 'react';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UserDataPage from './UserDataPage';
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <Router>
        <AuthProvider> {/* Bungkus komponen dengan AuthProvider */}
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/user-data" element={<UserDataPage/>} />
        </Routes>
      </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
