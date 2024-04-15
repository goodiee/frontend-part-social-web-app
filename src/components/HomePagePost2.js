import React from 'react';

const HomePagePost2 = () => {
    return (
        <div className="row justify-content-center"> {/* Center horizontally */}
            <div className="col-md-10 gedf-main"> {/* Adjust width */}
                <div className="card gedf-card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mr-2">
                                    <img className="rounded-circle" width="45"
                                         src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg" alt=""/>
                                </div>
                                <div className="ml-2">
                                    <div className="h5 m-0">@user2</div>
                                    <div className="h7 text-muted">User Two</div>
                                </div>
                            </div>
                            {/* Add an icon */}
                            <div>
                                <i className="fa fa-pencil"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="text-muted h7 mb-2"><i className="fa fa-clock-o"></i> 15 min ago</div>
                        <a className="card-title card-link" href="#" style={{textDecoration: "none", color: "blue"}}>
                            <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                        </a>

                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa
                            praesentium esse magnam nemo dolor
                            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-primary card-link"><i className="fa fa-gittip"></i> Like
                        </button>
                        <button className="btn btn-outline-primary card-link"><i className="fa fa-comment"></i> Comment
                        </button>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default HomePagePost2;
