import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import axios from "axios";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onFinish(e) {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users/register', {
            name,
            email,
            password
        })
        alert('User registered successfully')
    } catch(e) {
        console.log(e)
        alert('User already exists')
    }
}


  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Register</h1>
        <form onSubmit={onFinish}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
          <button type="submit">Register</button>
          <div>
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

