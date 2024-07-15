import React from 'react'
import './Login.css'
import { useContext, useState } from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const { setUser } = useContext(UserContext)

    async function loginSubmit(e) {
        e.preventDefault();
        try {
        const data = await axios.post('http://localhost:5000/users/login', { email, password })
        setUser(data);
      alert('Login successful');
      setRedirect(true);
    } catch (e) {
      alert('Login failed');
    }
}
if (redirect) {
    return <Navigate to={'/account'} />
  }

    return (
        <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={loginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center">
            Don't have an account yet?{' '}
            <Link className="register-link" to="/register">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Login
