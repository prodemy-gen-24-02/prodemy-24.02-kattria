import React from "react";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Button from "./components/Button";
import background from "./assets/1.jpg";
import products from "./data/products";
import ProductCard from "../../gen-24-react-component/src/components/ProductCard";
import Footer from "./layout/Footer";
import Credit from "./layout/Credit";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div
        className="flex flex-col justify-center items-start px-[50px] bg-[length:200vh_95vh] h-[95vh] bg-no-repeat lg:bg-repeat z-0"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="text-[50px] font-bold text-green-900">
          Grab Upto 50% off On <br /> Selected Headphone
        </h1>
        <p className="py-[35px] text-[20px] font-semibold text-green-900">
          Shopping is a bit of a relaxing hobby for me, which <br />
          is sometimes troubling for the bank balance.
        </p>
        <Button
          type="button"
          className=" px-[50px] py-3 bg-green-900 text-white text-[16px] hover:bg-white  hover:text-black outline-none"
          >
          Buy Now!
        </Button>
      </div>
      <div className="p-[50px] bg-white">
        <h1 className="text-3xl font-bold mb-6">Headphones For You!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
          <Credit/>
          <Footer />
    </div>
  );
}

export default App;
