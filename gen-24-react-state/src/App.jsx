import React from "react";
import Content from "./layout/Content";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Credit from "./components/Credit";

function App() {
  return (
    <div>
      <Header />
      <Navbar/>
      <Content />
      <Credit/>
      <Footer/>
    </div>
  );
}

export default App;
