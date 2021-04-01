import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
  const { id } = useParams()
  const [products, setProducts] = useState({});

  useEffect(() => {
    const url = `http://localhost:5055/pruducts?${id}`
    fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data[1]))
  }, [id])

  const [loginUser, setLoginUser] = useContext(UserContext);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data)
    const orderDetails = { ...loginUser, ...setProducts, orderTime: new Date() }
    fetch('http://localhost:5055/addOrders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('your order placed successfully');
        }
      })
  };
  console.log(watch("example"));
  return (
    <div className="container ">
      <h2 className="text-center mt-3">Book About & Order</h2>

      <div className="row mt-5">
        <div className="col-md-5 card">
          <h3>Book: {products.name}</h3>
          <h5>By- {products.author}</h5>
          <h5 className="border-bottom mb-3 pb-3">Tk. {products.price}</h5>
          <h4>Total: {products.price} Tk</h4>
        </div>

        <div className="col-md-6">
          <form className="card p-3" onSubmit={handleSubmit(onSubmit)}>

            <input className="form-control m-2" name="name" defaultValue={loginUser.name} ref={register({ required: true })} placeholder="name" />
            {errors.name && <span>name is required</span>}

            <input className="form-control m-2" name="email" defaultValue={loginUser.email} ref={register({ required: true })} placeholder="email" />
            {errors.email && <span>name is required</span>}

            <input className="form-control m-2 " name="address" ref={register({ required: true })} placeholder="address" />
            {errors.address && <span>name is required</span>}

            <input className="form-control m-2" name="phone" ref={register({ required: true })} placeholder="phone number" />
            {errors.phone && <span>name is required</span>}

            <input className="btn btn-primary mx-auto" type="submit" />
          </form>

        </div>
      </div>
    </div>
  );
};

export default CheckOut;