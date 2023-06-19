import React from 'react';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UserDataPage from './UserDataPage';

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
