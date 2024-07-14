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
        <div className='login-container'>
            <div className='login-form'>
                <h1 className='login-text'> Login</h1>

                <form onSubmit={loginSubmit}>
                    <input type="email" 
                    placeholder="Email Address" 
                    value = {email} 
                    onChange={ev => setEmail(ev.target.value)}
                    />

                    <input type="password" 
                    placeholder="Password"
                    onChange={ev => setPassword(ev.target.value)} 
                    value = {password}
                    />

                    <button type="submit">Login</button>
                </form>

                <div> Don't have an account yet ? 
                    <Link to='/'> Register</Link>
                </div>

            </div>
        </div>
    )
}

export default Login
