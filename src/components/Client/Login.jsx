import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
        
            if (emailRef.current.value === 'user@example.com' && passwordRef.current.value === 'password') {
                navigate("/admin/*", { replace: true });
                setShowSuccess(true);
            } else {
                throw new Error('Invalid email or password');
            }
        } catch (error) {
            setError('Failed to log in: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        console.log("Google login");
    };

    const handleFacebookLogin = () => {
        console.log("Facebook login");
    };

    return (
        <div className="login-main">
            <div className="login-container">
                <div className="login-form">
                    <div className="login-header">
                        <h2 className='login-sub-text'>Log In</h2>
                        {error && <div className="login-alert">{error}</div>}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="login-textfields">
                            <input type="email" placeholder='Email' ref={emailRef} required />
                            <input type="password" placeholder='Password' ref={passwordRef} required />
                        </div>
                        <div className="login-footer">
                            <button className='login-btn' disabled={loading}>Log In</button>
                            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                        </div>
                    </form>
                    <div className="login-social-login">
                        <button className="login-google-btn" onClick={handleGoogleLogin}>Continue with Google</button>
                        <button className="login-facebook-btn" onClick={handleFacebookLogin}>Continue with Facebook</button>
                    </div>
                </div>
            </div>
            {showSuccess && (
                <div className="login-success-popup">
                    <p>Login successful!</p>
                </div>
            )}
        </div>
    );
}
