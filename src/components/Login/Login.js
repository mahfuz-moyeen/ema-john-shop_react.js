import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>

                <form >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required/>
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to ema-john? <Link to='/signup' className='form-link'>Create an account</Link>
                </p>
            </div>
        </div >
    );
};

export default Login;