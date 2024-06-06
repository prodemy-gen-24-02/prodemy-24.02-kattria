import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Admin from "./pages/Admin";
import DashboardCategory from "./components/Admin/DashboardCategory";
import DashboardProduct from "./components/Admin/DashboardProduct";
import DashboardForm from "./components/Admin/DashboardForm";
import Test from "./components/Test";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/detail/:id" element={<Detail />} />
    //     <Route path="/admin" element={<Admin />} />
    //     <Route path="/admin/categories" element={<DashboardCategory />} />
    //     <Route path="/admin/product" element={<DashboardProduct />} />
    //     <Route path="/admin/form-product/new" element={<DashboardForm />} />
    //     <Route path="/admin/form-product/edit/:id" element={<DashboardForm />} />

    //   </Routes>
    // </Router>
    <>
    <Test />
    </>
  );
}

export default App;
