import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = ({ cartLength, setSearchTerm, setSortOrder }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <Link to="/" className="navbar-brand">
        Product Store
      </Link>
      <div className="d-flex w-100 justify-content-end align-items-center">
        <input
          type="text"
          placeholder="Search for a product..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control w-25 mx-2"
        />

        <div className="ml-3">
          <select
            className="form-select"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="descending">Sort by Price: High to Low</option>
            <option value="ascending">Sort by Price: Low to High</option>
          </select>
        </div>

        <Link to="/cart" className="btn btn-light d-flex align-items-center">
          <div style={{ position: "relative", fontSize: "1.5rem" }}>
            <FaShoppingCart />
            {cartLength > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-15px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "5px 10px",
                  fontSize: "12px",
                }}
              >
                {cartLength}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
