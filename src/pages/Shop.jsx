import { useLayoutEffect, useState } from "react";
import Breadcrumb from "../Components/UiElements/Breadcrumb/Breadcrumb";
import ProductCard from "../Components/UiElements/ProductCard/ProductCard";
const Shop = () => {
  const [data, setData] = useState([]);
  useLayoutEffect(() => {
    dataFetch();
  }, []);
  const dataFetch = async () => {
    const response = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );

    setData(response.products);
  };
  return (
    <>
      <Breadcrumb />
      <div className="container mx-auto">
        <div className="grid py-[1px] grid-cols-12 px-2 sm:px-0">
          <div className="col-span-12 sm:col-span-3">div 1</div>
          <div className="col-span-12 sm:col-span-9 flex">
            <div className=" grid bg-[#124E581A] py-[1px] gap-[1px] grid-rows-2  grid-cols-2 sm:grid-cols-4 pl-[1px]">
              {data?.slice(0, 20).map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    title={item.title}
                    url={item.thumbnail}
                    price={item.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
