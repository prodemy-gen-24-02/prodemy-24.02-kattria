import React from "react";
import Button from "../components/Button";
import background from "../assets/1.jpg";
import ProductCard from "../components/ProductCard";
import useSWR from "swr";
import Layout from "../layout/Layout";
import CategoriesCard from "../components/CategoriesCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
    const { data, error } = useSWR("http://localhost:3000/products", fetcher);
    // const { categories, errors } = useSWR(
    //     "http://localhost:3001/categories",
    //     fetcher
    // );
    if (error ) return <div>Failed to load</div>;
    if (!data ) return <div>Loading...</div>;

    return (
        <div>
            <Layout>
                <div
                    className="flex flex-col justify-center items-start px-[50px] bg-[length:200vh_95vh] h-[95vh] bg-no-repeat lg:bg-repeat z-0"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <h1 className="text-[50px] font-bold text-green-900">
                        Grab Upto 50% off On <br /> Selected Headphone
                    </h1>
                    <p className="py-[35px] text-[20px] font-semibold text-green-900">
                        Shopping is a bit of a relaxing hobby for me, which{" "}
                        <br />
                        is sometimes troubling for the bank balance.
                    </p>
                    <Button
                        type="button"
                        className=" px-[50px] py-3 bg-green-900 text-white text-[16px] hover:bg-white  hover:text-black outline-none"
                    >
                        Buy Now!
                    </Button>
                </div>
                {/* <div className="p-[50px]">
                    <h1 className="text-3xl font-bold mb-6">
                        Shop our top categories
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                        {categories.map((category) => (
                            <CategoriesCard
                                key={category.id}
                                categories={category}
                            />
                        ))}
                    </div>
                </div> */}
                <div className="p-[50px] bg-white">
                    <h1 className="text-3xl font-bold mb-6">
                        Headphones For You!
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                        {data.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Home;
