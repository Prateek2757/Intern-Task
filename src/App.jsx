import React, { useEffect, useState } from "react";
import ProductCard from "./component/cardProduct";
import Cart from "./component/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("descending");
  const url = "http://localhost:5000/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const product = await response.json();
        // const sortedProducts = [...product].sort((a, b) => b.price - a.price);
        setProducts(product);
      } catch (error) {
        console.log("Fail to fetch");
      }
    };
    fetchData();
  }, [url]);

  const addToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart((prevCart) => [...prevCart, product]);
    } else {
      alert("Product already in cart!");
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <Router>
      <div className="container my-5">
        <NavBar
          cartLength={cart.length}
          setSortOrder={setSortOrder}
          setSearchTerm={setSearchTerm}
        />{" "}
        {/* Pass search function to Navbar */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1 className="text-center my-4">Product List</h1>
                <div className="row justify-content-center">
                  {sortedProducts.length > 0 ? (
                    sortedProducts.map((product) => (
                      <div
                        className="col-md-4 d-flex justify-content-center mb-4"
                        key={product.id}
                      >
                        <ProductCard
                          product={product}
                          isInCart={cart.some((item) => item.id === product.id)}
                          addToCart={addToCart}
                          removeFromCart={removeFromCart}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="col-12 text-center">
                      <p>No products found</p>
                    </div>
                  )}
                </div>
              </div>
            }
          />
          {/* Cart Route */}
          <Route
            path="/cart"
            element={<Cart cartItems={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
