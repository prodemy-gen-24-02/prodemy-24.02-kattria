import useSWR from 'swr';

export const UseSWR = () => {

   const fetcher = async () => {
     return await getProducts();
   }

  const { data, error, mutate } = useSWR('http://localhost:3001/products', fetcher);

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};