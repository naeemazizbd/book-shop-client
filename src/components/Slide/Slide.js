import React from 'react';

const Slide = () => {
    return (
        <div className="mt-4 container">
            <div className="row w-100 h-50 bg-light p-3" >
                <div className="col-md-8 mt-5 mb-5 text-center">
                    <h1 className="display-3 fw-bold">A <span className="text-warning">half-read book</span><br /> is a half-finished <br /> <span className="text-primary">love affair</span> <i className="fas fa-heart text-warning"></i></h1>
                    <form className="form-control mx-auto d-flex w-75 mt-5 m-4">
                        <input className="form-control  border-0" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary d-flex  px-2" type="submit"> Search</button>
                    </form>
                </div>
                <div className="mx-auto p-4 col-md-4 bg-light" >
                    <img className=" " src="https://i.ibb.co/SsGsnWy/29080174.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Slide;