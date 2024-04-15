import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        <>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />

            <nav className="navbar navbar-light bg-white">
                <a href="#" className="navbar-brand">Social Media</a>
                <form className="form-inline">
                    <div className="input-group">
                        <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="button" id="button-addon2">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </nav>
        </>
    );
};

export default Navbar;
