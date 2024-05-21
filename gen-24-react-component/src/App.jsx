import React from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/Button";
import Header from "./layout/Header";

import image1 from './assets/2.png';
import image2 from './assets/3.png';
import image3 from './assets/4.png';
import image4 from './assets/6.png';
import image5 from './assets/7.png';
import image6 from './assets/9.png';
import image7 from './assets/10.png';
import background from './assets/1.jpg';



function App(){
  const products =[
    {
      id : 1,
      name: 'Bose BT Earphones',
      description:'Table with purifier, stained verner/black',
      price: 500.00,
      image: image1,
      reviews: 121,
      rating:4,
    },
    {
      id : 2,
      name: 'HIFI Stereo Headphone',
      description: 'Bluetooth Headphone Music Headset, stained verner/black',
      price: 500.00,
      image: image2,
    },
    {
      id : 3,
      name: 'Zebronics Zeb-Thunder',
      description: 'Wireless BT Headphone with Built-In Fm',
      price: 500.00,
      image: image3,
    },
    {
      id : 4,
      name: 'Sony Headphone',
      description: 'Headphone with memory card slot',
      price: 500.00,
      image: image4,
    },
    {
      id : 5,
      name: 'Another Headphone',
      description: 'Amazing sound quality and comfort',
      price: 500.00,
      image: image5,
    },
    {
      id : 6,
      name: 'Zebronics Zeb-Thunder',
      description: 'Wireless BT Headphone with Built-In Fm',
      price: 500.00,
      image: image6,
    },
    {
      id : 7,
      name: 'Zebronics Zeb-Thunder',
      description: 'Wireless BT Headphone with Built-In Fm',
      price: 500.00,
      image: image7,
    },
    {
      id : 8,
      name: 'Zebronics Zeb-Thunder',
      description: 'Wireless BT Headphone with Built-In Fm',
      price: 500.00,
      image: image3,
    },
  ];
    
  return(
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col justify-center items-start px-[50px] bg-[length:200vh_95vh] h-[95vh] "style={{ backgroundImage: `url(${background})` }}>
        <h1 className="text-[50px] font-bold text-green-900 ">Grab Upto 50% Off On <br />
            Selected Headphone</h1>
        <p className="desc py-[35px] text-[20px] font-semibold text-green-900">
            Shopping is a bit of a relaxing hobby for me, which <br />is sometimes
            troubling for the bank balance.
       </p>
        <Button type="button" className="bg-green-900 text-white  hover:bg-white  hover:text-black outline-none">
          Buy Now!
        </Button>
      </div>
      <div className=" p-[50px] bg-white">
        <h1 className="text-3xl font-bold mb-6">Headphones For You!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {products.map((product) => (
          <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;