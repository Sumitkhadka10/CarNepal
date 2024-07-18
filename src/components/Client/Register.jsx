import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
    const fullnameRef = useRef();
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);

            if (emailRef.current.value && passwordRef.current.value) {
                navigate("/", { replace: true });
                alert('Registration successful!');
            } else {
                setError('Failed to create account');
            }
        } catch (error) {
            setError('Failed to create account: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-main">
            <div className="register-form-container">
                <div className="register-form">
                    <div className="register-header">
                        <p className='register-sub-text'>Create an Account</p>
                        {error && <div className="register-alert">{error}</div>}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="register-textfields">
                            <input type="text" placeholder='Full Name' ref={fullnameRef} required />
                            <input type="email" placeholder='Email' ref={emailRef} required />
                            <input type="text" placeholder='Username' ref={usernameRef} required />
                            <input type="password" placeholder='Password' ref={passwordRef} required />

                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" id="dob" className='register-input-date' />
                        </div>
                        <div className="register-footer">
                            <button className='register-btn' disabled={loading}>Create Account</button>
                            <p>Already have an account? <Link to="/login">Log in</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
