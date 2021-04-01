import React, { useEffect, useState } from 'react';

const Deshboard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('http://localhost:5055/pruducts')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const deleteBook = id => {
    fetch(`http://localhost:5055/pruducts/${id}`, {
      method: 'DELETE'

    }).then(() => {
      console.log('removed');
    }).catch(err => {
      console.error(err)
    });
  }

  return (
    <div >
      {
        products.map(product =>
          <div className=" row ">
            <div className="card d-flex content-align-center">
              <p className="m-3 p-2 me-auto ">Book: {product.name}- Author: {product.author}- Price: {product.price} Tk
             <i onClick={() => deleteBook(product._id)} className="fas fa-trash-alt ms-5">
                  <i class="fas fa-edit ms-5"></i> </i>
              </p>
            </div>
          </div>)
      }
    </div>
  );
};

export default Deshboard;