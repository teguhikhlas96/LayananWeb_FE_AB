import React from 'react';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

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
          <Route exact path="/login" component={<Login/>} />
          <Route exact path="/register" component={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
