import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const navigate = useNavigate();

    const handleRegistrationSubmit = () => {
        // Your registration logic goes here

        // Redirect to the Navbar after successful registration
        navigate('/home');
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="col-md-6 text-center">
                    <div className="form-registration">
                        <h2 className="form-registration-heading">Sign up</h2>
                        <small className="text-muted">Create a new account</small>
                        <br/><br/>
                        <div className="mt-3">
                            <input className="form-control registration-input smaller-input" placeholder="Email Address"
                                   type="email"/>
                        </div>
                        <div className="mt-3">
                            <input className="form-control registration-input smaller-input" placeholder="Full Name"
                                   type="text"/>
                        </div>
                        <div className="mt-3">
                            <input className="form-control registration-input smaller-input" placeholder="Password"
                                   type="password"/>
                        </div>
                        <div className="mt-3">
                            <input className="form-control registration-input smaller-input" placeholder="Phone Number"
                                   type="tel"/>
                        </div>
                        <div className="mt-3">
                            <label style={{marginRight: '20px'}}>Gender:</label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="male" value="male"/>
                                <label className="form-check-label" htmlFor="male">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="female"
                                       value="female"/>
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                        </div>


                        <button className="btn btn-lg btn-primary btn-block mt-3"
                                onClick={handleRegistrationSubmit}>Sign up
                        </button>
                        <br/>
                        <small className="login-link text-muted">Already have an account? <Link to="/">Sign
                            in</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;
