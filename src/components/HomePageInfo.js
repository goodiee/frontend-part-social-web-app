import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const HomePageInfo = () => {
    return (
        <div>
            <div className="card" style={{marginRight: '10px'}}>
                <div className="card-body">
                    {/* Use Link instead of a regular div for the username */}
                    <Link to="/profile" style={{textDecoration: 'none'}}>
                        <div className="h5" style={{textAlign: 'left'}}>@UserName</div>
                    </Link>
                    <div className="h7 text-muted" style={{textAlign: 'left'}}>Fullname : Maksym</div>
                </div>
                <ul className="list-group list-group-flush" style={{textAlign: 'left'}}>
                    <li className="list-group-item">
                        <div className="h6 text-muted">Friends:</div>
                        <div className="h5">125</div>
                    </li>
                    <li className="list-group-item">
                        <div className="h6 text-muted">Place of living:</div>
                        <div className="h5">Kyiv</div>
                    </li>
                    <li className="list-group-item">Peace for world</li>
                </ul>
            </div>
            {/* Replace the small button with a Link to the LoginForm */}
            <Link to="/">
                <button className="btn btn-light p-0 border-0 bg-transparent ">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/000/375/972/small/Basic_Elements__28151_29.jpg"
                        alt="Button"
                        style={{width: '50px', height: '50px', marginTop: "10px"}} // Adjust size as needed
                    />
                </button>
            </Link>
        </div>
    );
};

export default HomePageInfo;
