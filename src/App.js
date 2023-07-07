import React from "react";
import { Routes, Route } from "react-router-dom";
//import Loader from "./Components/Loader";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Pagenotfound from "./Components/Pagenotfound";
import Product from "./Components/Product";
import ProductDetail from "./Components/ProductDetail";
import { Provider } from "react-redux";
import store from "./Components/store/store";

const App = () => {
  return (
    <>
      {/* <Loader /> */}
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Provider>
    </>
  );
};
export default App;
