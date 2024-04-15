import React from "react";
import {Link} from "react-router-dom";


const ProfileFriends = () => {
    return (
        <div className="main-container">
            <div className="profile" style={{padding: '20px', maxWidth: '1000px', margin: '0 auto'}}>
                <div className="profile-header d-flex align-items-center">
                    <div className="profile-header-content col-1">
                        {/* Wrap the image inside a Link component */}
                        <Link to="/home">
                            <div className="profile-header-img">
                                <img className="rounded-circle" width="45"
                                     src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg"
                                     alt=""/>
                            </div>
                        </Link>
                    </div>
                    <div className="profile-header-info col-1" style={{marginLeft: '-10px'}}>
                        <h5 className="m-t-1 m-b-1">Maksym</h5>
                    </div>
                </div>
                <div className="profile-header-tab nav nav-tabs justify-content-center">
                    <ul className="profile-header-tab nav nav-tabs col-4">
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">TIMELINE</Link>
                        </li>
                        <li className="nav-item">
                            {/* Update link to navigate to /profilephotos */}
                            <Link to="/profilephotos" className="nav-link">PHOTOS</Link>
                        </li>
                        <li className="nav-item active show">
                            <Link to="/profilefriends" className="nav-link">FRIENDS</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="bg-gradient text-dark p-3 mb-3">
                            <h1 className="mb-0">Friend list</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row row-space-2">
                    {/* First column */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="col-md-6 m-b-2">
                            <div className="friend-box bg-light rounded p-2 d-flex align-items-center mb-3">
                                <div className="col-6">
                                    <img className="friend-photo mr-2" src="placeholder.jpg" alt="Friend 1"/>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="friend-name">Friend 1</div>
                                </div>
                            </div>
                            <div className="friend-box bg-light rounded p-2 d-flex align-items-center mb-3">
                                <div className="col-6">
                                    <img className="friend-photo mr-2" src="placeholder.jpg" alt="Friend 1"/>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="friend-name">Friend 1</div>
                                </div>
                            </div>
                        </div>
                        {/* Add more friend boxes in the first column */}
                    </div>

                    {/* Second column */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="col-md-6 m-b-2">
                            <div className="friend-box bg-light rounded p-2 d-flex align-items-center mb-3">
                                <div className="col-6">
                                    <img className="friend-photo mr-2" src="placeholder.jpg" alt="Friend 2"/>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="friend-name">Friend 2</div>
                                </div>
                            </div>
                            <div className="friend-box bg-light rounded p-2 d-flex align-items-center mb-3">
                                <div className="col-6">
                                    <img className="friend-photo mr-2" src="placeholder.jpg" alt="Friend 2"/>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="friend-name">Friend 2</div>
                                </div>
                            </div>
                        </div>
                        {/* Add more friend boxes in the second column */}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProfileFriends; // Export ProfileFriends instead of Profile
