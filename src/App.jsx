import { useState, useEffect, useReducer, createContext, useContext } from "react";
import Navbar from "./components/Navbar.jsx";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import { CartContext,CartReducer,initialState } from "./store.jsx";


function App() {
  const cartReducer = useReducer(CartReducer,initialState)
  
  return (
    <CartContext.Provider value={cartReducer}>
      <Navbar></Navbar>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <Product></Product>
          </div>
          <div className="col-md-5">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}


export default App;
