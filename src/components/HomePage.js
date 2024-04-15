import React from 'react';
import Navbar from './Navbar';
import HomePageInfo from './HomePageInfo';
import HomePagePosts from './HomePagePosts';
import HomePageWeather from "./HomePageWeather";
import HomePagePost from "./HomePagePost";

const HomePage = () => {
    return (
        <div>
            {/* General Container */}
            <div className="container-fluid bg-light" style={{ paddingTop: '20px' }}>
                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <div className="row mt-4">
                    {/* Home Page Info */}
                    <div className="col-2">
                        <HomePageInfo />
                    </div>

                    {/* Home Page Posts (more towards the right) */}
                    <div className="col-md-8">
                        <HomePagePosts />
                        {/*<HomePagePost/>*/}
                    </div>

                    {/* Empty Space for HomePageWeather */}
                    <div className="col-md-2">
                        <HomePageWeather />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
