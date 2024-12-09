import React from "react";

const ProductCard = ({ product, isInCart, addToCart, removeFromCart }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{
          height: "200px",
          objectFit: "contain",
          backgroundColor: "#f8f9fa",
        }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price.toFixed(2)}</p>
        <p className="card-text">{product.description}</p>
        {isInCart ? (
          <button
            className="btn btn-danger"
            onClick={() => removeFromCart(product.id)}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
