import React, { useEffect, useState } from "react";

const ProductForm = ({ onSubmit, product }) => {
  const [name, setName] = useState(product ? product.name : " ");
  const [price, setPrice] = useState(product ? product.price : " ");
  const [description, setDesc] = useState(product ? product.description : " ");
  const [image, setImage] = useState(product ? product.image : " ");
  const [color, setColor] = useState(product ? product.color : {});
  const [colorName, setColorName] = useState("");
  const [colorUrl, setColorUrl] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDesc(product.description);
      setPrice(product.price);
      setImage(product.image);
      setColor(product.color);
    }
  }, [product]);
  const handleAddColor = () => {
    setColor({
      ...color,
      [colorName]: colorUrl,
    });
    setColorName("");
    setColorUrl("");
  };

  const handleRemoveColor = (colorKey) => {
    const newColors = { ...color };
    delete newColors[colorKey];
    setColor(newColors);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const priceValue = parseFloat(price);
      onSubmit({
        name,
        description,
        price: priceValue,
        image,
        color,
      });
    setName("");
    setDesc("");
    setPrice("");
    setImage("");
    setColor({});
  };
  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(value === "" ? "" : parseFloat(value));
  };

  return (
    <form onSubmit={handleSubmit} className=" m-5 space-y-4 px-4">
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
          onChange={handlePriceChange}
          className="w-full p-2 border"
          step="0.01"
          min="0"
          
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
        <label className="block">Color</label>
        {Object.entries(color).map(([key, value]) => (
          <div key={key} className="flex items-center">
            <span className="mr-2">
              {key}: {value}
            </span>
            <button
              type="button"
              onClick={() => handleRemoveColor(key)}
              className="px-2 py-1 bg-red-500 text-white"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="mt-2">
          <input
            type="text"
            placeholder="Color Name"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            className="w-full p-2 border mb-2"
          />
          <input
            type="text"
            placeholder="Color URL"
            value={colorUrl}
            onChange={(e) => setColorUrl(e.target.value)}
            className="w-full p-2 border mb-2"
          />
          <button
            type="button"
            onClick={handleAddColor}
            className="px-4 py-2 bg-blue-500 text-white"
          >
            Add Color
          </button>
        </div>
        {/* <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full p-2 border"
          required
        /> */}
      </div>
      <button type="submit" className="px-4 py-2 bg-green-900 text-white">
        {product ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default ProductForm;
