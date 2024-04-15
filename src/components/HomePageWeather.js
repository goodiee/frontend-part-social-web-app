import React from 'react';

const HomePageWeather = () => {
    return (
        <div className="card" style={{  overflowY: 'auto', marginRight: "15px" }}> {/* Add overflowY for vertical scrolling */}
            <div className="card-header" style={{ textAlign: 'left' }}>
                <h5 className="card-title">Weather Forecast</h5>
            </div>
            <div className="card-body" style={{ textAlign: 'left' }}>
                {/* Space for future weather API integration */}
                {/* Add more content to increase length */}
                <p>This is where the weather forecast will be displayed once integrated with an API.</p>
                <p>You can add more content here to make the card longer.</p>
                <p>For example, additional weather information, graphics, or forecasts.</p>
            </div>
        </div>
    );
};

export default HomePageWeather;

