import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/"; // Redirect to login if no token
    } else {
      axios
        .get("http://localhost:5000/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserData(response.data); // response.data is an array of users
        })
        .catch((error) => {
          console.error("Error fetching user data", error);
        });
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {userData ? (
        <div>
          <h3>User Data</h3>
          <ul>
            {userData.map((user) => (
              <li key={user.id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                {/* Optionally, you can exclude the password */}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
