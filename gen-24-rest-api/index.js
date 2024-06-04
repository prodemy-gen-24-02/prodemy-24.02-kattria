// const axios = require('axios');

const API_URL = "https://dummyjson.com/products";

async function fetchProducts() {
  try {
    const response = await axios.get(API_URL);
    console.log("Product List:", response.data);
    displayProducts(response.data.products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    console.error("Error details:", error.response?.data || error);
  }
}

async function createProduct(event) {
  event.preventDefault();
  const form = event.target;
  const product = {
    title: form.title.value,
    description: form.description.value,
    price: form.price.value,
    brand: form.brand.value,
    category: form.category.value,
  };
  try {
    const response = await axios.post(`${API_URL}/add`, product);
    console.log("Product Created:", response.data);
    fetchProducts();
  } catch (error) {
    console.error("Error creating product:", error.message);
    console.error("Error details:", error.response?.data || error);
  }
}

async function updateProduct(productId, updatedData) {
  try {
    const response = await axios.put(`${API_URL}/${productId}`, updatedData);
    console.log("Product Updated:", response.data);
    fetchProducts();
  } catch (error) {
    console.error("Error updating product:", error.message);
    console.error("Error details:", error.response?.data || error);
  }
}

async function deleteProduct(productId) {
  try {
    const response = await axios.delete(`${API_URL}/${productId}`);
    console.log("Product Deleted:", response.data);
    fetchProducts();
  } catch (error) {
    console.error("Error deleting product:", error.message);
    console.error("Error details:", error.response?.data || error);
  }
}

function displayProducts(products) {
  const productTableBody = document
    .getElementById("productTable")
    .getElementsByTagName("tbody")[0];
  productTableBody.innerHTML = "";
  products.forEach((product) => {
    const row = productTableBody.insertRow();
    row.insertCell(0).textContent = product.id;
    row.insertCell(1).textContent = product.title;
    row.insertCell(2).textContent = product.description;
    row.insertCell(3).textContent = product.price;
    row.insertCell(4).textContent = product.brand;
    row.insertCell(5).textContent = product.category;
    const actionsCell = row.insertCell(6);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteProduct(product.id);
    actionsCell.appendChild(deleteButton);
  });
}

document
  .getElementById("addProductForm")
  .addEventListener("submit", createProduct);

fetchProducts();
