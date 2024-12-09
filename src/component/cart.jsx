import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">
          Your cart is empty. <Link to="/">Go back to shop!</Link>
        </div>
      ) : (
        <div>
          <div className="container">
            {cartItems.map((item) => (
              <div className="col-md-12" key={item.id}>
                <div className="card mb-4  shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top my-2"
                    style={{
                      height: "200px",
                      objectFit: "contain",
                      maxWidth: "100%",
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price.toFixed(2)}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-4">
            <div className="col-12 text-right">
              <h4>Total Price: ${getTotalPrice()}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
