import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

const UserDataPage = () => {
  const { token } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/all-user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>User Data</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataPage;
