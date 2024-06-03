import axios from "axios";

const api = axios.create ( {
    baseURL: "http://localhost:3001"
})

// export const fetcher = (url) => api.get(url).then(res => res.data);

export const getProducts  = async () => {
    const response = await api.get("/products");
    return response.data;
};

export const createProduct = async (product) => {
    const response = await api.post('/products', product);
    return response.data;
  };
  
  export const updateProduct = async (id, product) => {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  };
  
  export const deleteProduct = async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  };