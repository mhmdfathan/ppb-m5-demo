import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios"; // Import axios
import "./Login.css"; // Add styles for the form

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]); // State for storing users from the API
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch users from the API when the component mounts
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        setUsers(response.data.data); 
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError("Failed to fetch users. Please try again.");
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.first_name === username && u.last_name === password
    );

    if (user) {
      alert("Login successful!");
      navigate("/movie");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username (First Name)</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password (Last Name)</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
