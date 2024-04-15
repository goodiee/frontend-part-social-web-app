import React from 'react';
import { Link } from 'react-router-dom';
import HomePagePost1 from "./HomePagePost1";
import HomePagePost2 from "./HomePagePost2";
import HomePagePost from "./HomePagePost";


const Profile = () => {
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
                            <span className="nav-link active show">TIMELINE</span>
                        </li>
                        <li className="nav-item">
                            {/* Update link to navigate to /profilephotos */}
                            <Link to="/profilephotos" className="nav-link">PHOTOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profilefriends" className="nav-link">FRIENDS</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-xl-3 left-wrapper ">
                        <div className="About card bg-light text-black ">
                            <div className="card-body">
                                <h4 className="card-title">About the User</h4>
                                <div className="row">
                                    <div className="col-6">Joined:</div>
                                    <div className="col-6">12.05.2024</div>
                                </div>
                                <div className="row">
                                    <div className="col-6">Birth:</div>
                                    <div className="col-6">15.01.2003</div>
                                </div>
                                <div className="row">
                                    <div className="col-6">Place of Living:</div>
                                    <div className="col-6">Kyiv</div>
                                </div>
                                <div className="row">
                                    <div className="col-6">Email:</div>
                                    <div className="col-6">max@yahoo.com</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <HomePagePost1/>
                        <div className="py-4"></div>
                        <HomePagePost2/>
                        <div className="py-4"></div>
                        <HomePagePost/>
                    </div>
                    <div className="col-md-3">
                        <div className="latest-photos card bg-light text-black">
                            <div className="card-body">
                                <h6 className="card-title mb-3">Latest Photos</h6>
                                {/* Photos content */}
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="API-news card bg-light text-black">
                                <div className="card-body">
                                    <h6 className="card-title mb-3">News</h6>
                                    <p>This section will display news fetched from the API.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
