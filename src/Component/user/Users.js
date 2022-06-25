import React, { Fragment } from "react";
const Users = () => {
  const cartValue = [
    {
      img: "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png",
      name: "nike shoe",
      price: "20",
      detail:
        "The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements.Z",
    },
    {
      img: "https://m.media-amazon.com/images/I/811-0kItnvL._AC_SX679_.jpg",
      name: "key Board",
      price: "29",
      detail:
        "The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements.Z",
    },
  ];
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          {cartValue.map((item) => {
            return (
              <div className="col-12 col-sm-8 col-md-6 col-lg-4 my-3 p-4">
                <div className="card">
                  <img className="card-img" src={item.img} alt="Vans" />
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Style: VA33TXRJ5
                    </h6>
                    <p className="card-text">{item.detail}</p>
                    <div className="buy d-flex justify-content-between align-items-center">
                      <div className="price text-success">
                        <h5 className="mt-4">${item.price}</h5>
                      </div>
                      <button className="btn btn-danger mt-3">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Users;
