import React, { useEffect, useState } from 'react';

const UserDataPage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from API after login
    fetch('http://localhost:8000/userData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add authentication headers if required
        // e.g., 'Authorization': `Bearer ${token}`
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        setUserData(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API request
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>User Data</h2>
      <table>
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
