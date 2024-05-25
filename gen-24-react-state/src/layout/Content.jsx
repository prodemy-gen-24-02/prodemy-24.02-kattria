import React from "react";
import MainContent from "../components/MainConten";
import products from "../data/product";
import ProductCard from "../components/ProductCard";

const Content = () => {
  const productCopy = [...products];
  const similarProduct = productCopy.slice(0, 4);
  const recently = productCopy.slice(4,9);

  return (
    <div>
      <MainContent />
      <div className="p-[50px] bg-white shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Similar Items You Might Like</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {similarProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="p-[50px] bg-white shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Recently Viewed</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {recently.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Content;
