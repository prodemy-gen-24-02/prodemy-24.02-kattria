import React, { useEffect, useState } from "react";

const ProductForm = ({ onSubmit, product }) => {
  const [name, setName] = useState(product ? product.name : " ");
  const [price, setPrice] = useState(product ? product.price : " ");
  const [description, setDesc] = useState(product ? product.description : " ");
  const [image, setImage] = useState(product ? product.image : " "); 
  const [color, setColor] = useState(product ? product.color.map(color => color.name).join(', ') : " ");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDesc(product.description);
      setPrice(product.price);
      setImage(product.image);
     setColor(product.color.map(color => color.name).join(', '));
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const colorArray = color.split(",").map(color =>({ name:color.trim()}));
    const priceValue = parseFloat(price)
    if(!isNaN(priceValue)){
      onSubmit({ name, description, price: priceValue, image, color:colorArray });
    }
    
    setName("");
    setDesc("");
    setPrice("");
    setImage("");
   setColor("");
  };
  const handlePriceChange = (e) =>{
    const value = e.target.value;
    setPrice(value === ''? "":parseFloat(value))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 px-4">
      <div>
        <label className="block">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border"
          required
        />
      </div>
      <div>
        <label className="block">Descriptrion</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-2 border"
          required
        />
      </div>
      <div>
        <label className="block">Price</label>
        <input
          type="number"
          value={price}
          onChange= {handlePriceChange}
          className="w-full p-2 border"
          step="0.01"
          min="0"
          required
        />
      </div>
      <div>
        <label className="block">Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border"
          required
        />
      </div>
      <div>
        <label className="block">Color (comma separated)</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full p-2 border"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-green-900 text-white">
        {product ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default ProductForm;
