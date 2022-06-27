import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import CartModal from "./CartModal";
const AddToCart = () => {
  const cartItem = useSelector((item) => item.cart.items);
  let totalQuantity=cartItem.reduce(function(prev, current){
    return prev + +current.quantity;
  },0)
  const [isClicked, setIsClicked] = useState(false);
  const ModalHandler=(val)=>{
    setIsClicked(val);
  }
  return (
    <Fragment>
      <div className='cart'>
        <button
          className='btn text-white Cart-button fs-3'
          onClick={() => setIsClicked(true)}>
          Cart <span>{totalQuantity}</span>
        </button>
      </div>
      {isClicked && <CartModal goBack={ModalHandler} />}
    </Fragment>
  );
};

export default AddToCart;
