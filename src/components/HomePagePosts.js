import React, { useState, useEffect } from 'react';
import './HomePagePosts.css'; // Import the CSS file for styling
import HomePagePost from "./HomePagePost"; // Import the HomePagePost component
import HomePagePost1 from "./HomePagePost1"; // Import the HomePagePost1 component
import HomePagePost2 from "./HomePagePost2"; // Import the HomePagePost2 component

const HomePagePosts = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const closeDropdown = (event) => {
            if (!event.target.closest('#btnGroupDrop1')) {
                setDropdownOpen(false);
            }
        };

        document.body.addEventListener('click', closeDropdown);

        return () => {
            document.body.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center"> {/* Center horizontally */}
                <div className="col-md-8 gedf-main"> {/* Adjust width */}
                    <div className="card gedf-card">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="posts-tab" data-bs-toggle="tab" href="#posts" role="tab"
                                       aria-controls="posts" aria-selected="true">Make a publication</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="images-tab" data-bs-toggle="tab" role="tab" aria-controls="images"
                                       aria-selected="false" href="#images">Images</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="posts" role="tabpanel"
                                     aria-labelledby="posts-tab">
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="message">post</label>
                                        <textarea className="form-control" id="message" rows="3"
                                                  placeholder="What are you thinking?"></textarea>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                                    <div className="form-group">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="customFile" />
                                            <label className="custom-file-label" htmlFor="customFile">Upload image</label>
                                        </div>
                                    </div>
                                    <div className="py-4"></div>
                                </div>
                            </div>
                            <div className="btn-toolbar justify-content-between">
                                <div className="btn-group">
                                    {/* Moved the Share button here */}
                                    <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>Share</button>
                                </div>
                                <div className="btn-group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-link"
                                            onClick={toggleDropdown}
                                            aria-haspopup="true" aria-expanded={dropdownOpen}>
                                        <i className="fa fa-globe"></i>
                                    </button>
                                    <div className={`dropdown-menu dropdown-menu-right ${dropdownOpen ? 'show' : ''}`} aria-labelledby="btnGroupDrop1">
                                        <a className="dropdown-item" href="#"><i className="fa fa-globe"></i> Public</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-users"></i> Friends</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-user"></i> Just me</a>
                                        <a className="dropdown-item" href="#"><i className="fa fa-users"></i> Friends' friends</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add space between HomePagePosts and HomePagePost */}
            <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                    <div className="py-2"></div> {/* Add padding to create space */}
                </div>
            </div>
            {/* Insert the HomePagePost components here */}
            <div className="row justify-content-center">
                <div className="col-md-9"> {/* Adjust width */}
                    <HomePagePost1 />
                    <div className="py-4"></div> {/* Add space between HomePagePost1 and HomePagePost2 */}
                    <HomePagePost2 />
                    <div className="py-4"></div> {/* Add space between HomePagePost2 and HomePagePost */}
                    <HomePagePost />
                </div>
            </div>
        </div>
    );
};

export default HomePagePosts;
