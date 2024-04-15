import React from "react";
import "./ProfilePhotos.css"
import {Link} from "react-router-dom";
const ProfilePhotos = () => {
    return (
        <div className="container-fluid">
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
                        <li className="nav-item active show">
                            {/* Update link to navigate to /profilephotos */}
                            <Link to="/profilephotos" className="nav-link">PHOTOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profilefriends" className="nav-link">FRIENDS</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <div className="tab-pane active show" id="profile-photos">
                            <ul className="img-grid-list">
                                <a href="#"><img src="https://www.bootdey.com/image/150x150/008B8B/000000" alt=""
                                                 className="img-portrait"/></a>
                                <a href="#"><img src="https://www.bootdey.com/image/150x150/6495ED/000000" alt=""
                                                 className="img-portrait"/></a>
                                <a href="#"><img src="https://www.bootdey.com/image/150x150/6495ED/000000" alt=""
                                                 className="img-portrait"/></a>
                                {/* Add other image elements here */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="tab-pane active show" id="profile-photos">
                            <ul className="img-grid-list">
                                <a href="#"><img src="https://www.bootdey.com/image/150x150/008B8B/000000" alt=""
                                                 className="img-portrait"/></a>
                                <a href="#"><img src="https://www.bootdey.com/image/150x150/6495ED/000000" alt=""
                                                 className="img-portrait"/></a>
                                <a href="#"><img src="https://www.bootdey.com/image/150x150/6495ED/000000" alt=""
                                                 className="img-portrait"/></a>
                                {/* Add other image elements here */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="tab-pane active show" id="profile-photos">
                            <ul className="img-grid-list">
                                <a href="#"><img src="https://www.bootdey.com/image/150x150/008B8B/000000" alt=""
                                                 className="img-portrait"/></a>
                                <a href="#"><img src="https://www.bootdey.com/image/150x150/6495ED/000000" alt=""
                                                 className="img-portrait"/></a>
                                <a href="#"><img src="https://www.bootdey.com/image/150x150/6495ED/000000" alt=""
                                                 className="img-portrait"/></a>
                                {/* Add other image elements here */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfilePhotos;