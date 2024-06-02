import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Admin from "./pages/Admin";
import DashboardCategory from "./components/DashboardCategory";
import DashboardProduct from "./components/DashboardProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/categories" element={<DashboardCategory />} />
        <Route path="/admin/product" element={<DashboardProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
