import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Slide from '../Slide/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/pruducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className=" container">
            <Slide />
            <div className="row  ">
                {
                    products.length === 0 &&
                    <div className="mx-auto text-center m-5">
                        <CircularProgress disableShrink />
                    </div>
                }

                {
                    products.map(product =>
                        <Product product={product}></Product>
                    )
                }
            </div>
        </div>
    );
};

export default Home;