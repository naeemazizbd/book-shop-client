import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const NotMatch = () => {
    return (
        <div className="container text-center mt-5">
            <h1> This page not pound-error 404. Please Click <Link to="/home" >Home</Link> </h1>
            <img src="https://assets.prestashop2.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln" alt="" />
            <Footer />
        </div>
    );
};

export default NotMatch;