/** @format */

import React, { Fragment } from "react";
import "./AddToCart.css";
import { useSelector } from "react-redux/es/exports";
const CartModal = (props) => {
  const itemToCart = useSelector((data) => data.cart.items);
  let sum = itemToCart.reduce(function (prev, current) {
    return prev + +current.totalPrice;
  }, 0);
    return (
      <Fragment>
        <div className='cart-modal'>
          <div className='card'>
            <div className='row'>
              <div className=' cart'>
                <div className='title'>
                  <div className='row'>
                    <div className='col'>
                      <h4>
                        <b>Shopping Cart</b>
                      </h4>
                    </div>
                    <div className='col align-self-center text-right text-muted'>
                      3 items
                    </div>
                  </div>
                </div>
                {itemToCart.map((item) => {
                  return (
                    <div key={item.id} className='row border-top border-bottom'>
                      <div className='row main align-items-center'>
                        <div className='col-2'>
                          <img className='img-fluid' src={item.img} />
                        </div>
                        <div className='col'>
                          <div className='row'>{item.name}</div>
                        </div>
                        <div className='col'>
                          <a href='#'>-</a>
                          <a href='#' className='border'>
                            {item.quantity}
                          </a>
                          <a href='#'>+</a>
                        </div>
                        <div className='col'>${item.totalPrice}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className='row'>
                <div className='col'>TOTAL PRICE</div>
                <div className='col text-right'>${sum}</div>
              </div>
              <div className='back-to-shop'>
                <a
                  onClick={() => props.goBack(false)}
                  type='link'
                  className='link'>
                  Go to Shop
                </a>
                <button className='btn w-25 my-2 text-white mx-auto'>
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
};

export default CartModal;
