import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Admin from "./pages/Admin";
import DashboardForm from "./components/Admin/DashboardForm";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import DashboardCategory from "./components/Admin/Category/DashboardCategory";
import DashboardProduct from "./components/Admin/Product/DashboardProduct";

function App() {
  return (
    //<CartProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/categories" element={<DashboardCategory />} />
        <Route path="/admin/product" element={<DashboardProduct />} />
        <Route path="/admin/form-product/new" element={<DashboardForm />} />
        <Route path="/admin/form-product/edit/:id" element={<DashboardForm />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </Router>
    //</CartProvider>
    
    // <>
    // <Test />
    // </>
  );
}

export default App;
