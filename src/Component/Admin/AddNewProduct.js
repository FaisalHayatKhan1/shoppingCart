/** @format */

import React, { useState } from "react";

const AddNewProduct = () => {
  const [name, isName] = useState("");
  const [detail, isDetail] = useState("");
  const [img, isImg] = useState("");
  const [price, isPrice] = useState("");
  const productNameHandler = (e) => {
    isName(e.target.value);
  };
  const detailHandler = (e) => {
    isDetail(e.target.value);
  };
  const priceHandler = (e) => {
    isPrice(e.target.value);
  };
  const imageHandler = (e) => {
    isImg(e.target.value);
  };
  let formIsNotValid = true;
  if (name !== "" && detail !== "" && img !== "" && price !== "") {
    formIsNotValid = false;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (formIsNotValid) {
        return;
    }
    
    console.log(name, detail, img, price);
  };
  return (
    <div className='d-flex justify-content-center mt-5 pt-5'>
      <form onSubmit={submitHandler} className='formSingUp'>
        <h1 className='text-white'>Register New Product</h1>
        <div className='form-control-my'>
          <label htmlFor='name'>Product Name</label>
          <input
            type='text'
            className='w-100'
            id='name'
            onChange={productNameHandler}
          />
        </div>
        <div className='form-control-my'>
          <label htmlFor='name'>Product Detail</label>
          <textarea
            className='w-100'
            type='text-area'
            id='name'
            onChange={detailHandler}
          />
        </div>
        <div className='form-control-my'>
          <label htmlFor='name'>Product image</label>
          <input className='w-100' type='file' onChange={imageHandler}></input>
        </div>
        <div className='form-control-my'>
          <label htmlFor='name'>Product Price</label>
          <input
            className='w-100'
            type='number'
            onChange={priceHandler}></input>
        </div>
        <div className='form-actions text-center'>
          <button disabled={formIsNotValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
