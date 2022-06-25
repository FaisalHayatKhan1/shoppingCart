import React, { Fragment, useState } from "react";
import "./AddToCart.css";
const AddToCart = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Fragment>
      <div className="cart">
        <button
          className="btn text-white Cart-button fs-3"
          onClick={() => setIsClicked(true)}
        >
          Cart <span>0</span>
        </button>
      </div>
      {isClicked && (
        <div className="CartContainer position-absolute">
          <div className="Header">
            <h3 className="Heading">Shopping Cart</h3>
            <h5 className="Action">Remove all</h5>
          </div>

          <div className="Cart-Items">
            <div className="image-box">
              <img alt="" src="images/apple.png" />
            </div>
            <div className="about">
              <h1 className="title">Apple Juice</h1>
              <h3 className="subtitle">250ml</h3>
              <img alt="" src="images/veg.png" />
            </div>
            <div className="counter">
              <div className="btn">+</div>
              <div className="count">2</div>
              <div className="btn">-</div>
            </div>
            <div className="prices">
              <div className="amount">$2.99</div>
              <div className="save">
                <u>Save for later</u>
              </div>
              <div className="remove">
                <u>Remove</u>
              </div>
            </div>
          </div>

          <div className="Cart-Items pad">
            <div className="image-box">
              <img alt="" src="images/grapes.png" />
            </div>
            <div className="about">
              <h1 className="title">Grapes Juice</h1>
              <h3 className="subtitle">250ml</h3>
              <img alt="" src="images/veg.png" />
            </div>
            <div className="counter">
              <div className="btn">+</div>
              <div className="count">1</div>
              <div className="btn">-</div>
            </div>
            <div className="prices">
              <div className="amount">$3.19</div>
              <div className="save">
                <u>Save for later</u>
              </div>
              <div className="remove">
                <u>Remove</u>
              </div>
            </div>
          </div>

          <div className="checkout">
            <div className="total">
              <div>
                <div className="Subtotal">Sub-Total</div>
                <div className="items">2 items</div>
              </div>
              <div className="total-amount">$6.18</div>
            </div>
            <button className="button">Checkout</button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AddToCart;
