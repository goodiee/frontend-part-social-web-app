import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importing useNavigate hook
import './LoginForm.css';

const LoginForm = () => {
    const navigate = useNavigate(); // Initializing the navigate function

    // Function to handle sign in button click
    const handleSignIn = () => {
        // Your sign in logic goes here

        // Redirect to the Navbar after successful sign in
        navigate('/home'); // Use navigate function to redirect
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="col-md-6 text-center">
                    <form className="form-signin">
                        <h2 className="form-signin-heading">Sign in</h2>
                        <small className="text-muted">Connect [your service] with your favorite social network</small>
                        <br /><br />
                        {/* Google social login button */}
                        <a
                            className="social-login-btn"
                            href="#/auth/google"
                        >
                            <img
                                src="https://cdn.dribbble.com/users/904380/screenshots/2230701/google-logo-revised-spinner_still_2x.gif?resize=400x300&vertical=center"
                                alt="Google Logo"
                                style={{ width: '200px', height: '150px', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
                            />
                        </a>
                        {/* Inputs for email and password */}
                        <div className="mt-3">
                            <input className="form-control login-input smaller-input" placeholder="Email Address" type="email" />
                        </div>
                        <div className="mt-3">
                            <input className="form-control login-input-pass smaller-input" placeholder="Password" type="password" />
                        </div>
                        {/* Sign in button */}
                        <button className="btn btn-lg btn-primary btn-block mt-3" type="button" onClick={handleSignIn}>Sign in</button>
                        <br />
                        {/* Create account link */}
                        <small className="create-account text-muted">Don't have a [your service] or social network account? <Link to="/register"> Sign Up </Link></small>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
