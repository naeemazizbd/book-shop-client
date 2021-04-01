import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Product = ({ product }) => {
    const [products, setProducts] = useState([])
    const history = useHistory();
    const showDetail = _id => {
        const url = `product/${_id}`
        history.push(url)
    }

    return (
        <div className="col-md-4 col-lg-4 col-md-6 col-sm-12 mt-5 ">
            <div className=" p-2 card text-center rounded   m-3">
                <img className="mx-auto rounded mt-4 " style={{ height: '300px', width: '250px ' }} src={product.imageURL} alt="" />
                <div className="mb-3 mt-2 bg-light p-2 rounded">
                    <h4>{product.name} </h4>
                    <h5><i class="fas fa-pen-square"></i> {product.author}</h5>
                    <div className="d-flex mx-4 mb-2">
                        <h5>Tk. {product.price}</h5>
                        <button onClick={() => showDetail(product._id)} className=" btn btn-primary ms-auto">
                            <i class="fas fa-cart-plus"></i>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;