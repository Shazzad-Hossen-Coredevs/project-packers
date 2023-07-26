import { useLayoutEffect, useState } from "react";
import Breadcrumb from "../Components/UiElements/Breadcrumb/Breadcrumb";
import ProductCard from "../Components/UiElements/ProductCard/ProductCard";
import Category from "../Components/UiElements/Category/Category";
import { apiData } from "../Components/UiElements/Category/data";
import Paginate from "../Components/UiElements/Paginate/Paginate";
const Shop = () => {
  const [data, setData] = useState([]);
  const totalPage = 99;
  useLayoutEffect(() => {
    dataFetch();
  }, []);
  const dataFetch = async () => {
    const response = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );

    setData(response.products);
  };
  const handlePagination = (e) => {
    console.log(e);
  };
  return (
    <>
      <Breadcrumb />
      <div className="container py-12 mx-auto">
        <div className="grid py-[1px] gap-5 grid-cols-12 px-2 sm:px-0">
          <div className="col-span-12 sm:col-span-3 pr-3">
            <h3 className="font-semibold text-[28px] text-secondary mb-7">
              Trending Items
            </h3>
            <Category data={apiData.docs} />
          </div>
          <div className="col-span-12 sm:col-span-9 flex">
            <div className=" ">
              <div className="grid bg-[#124E581A] py-[1px] gap-[1px] grid-rows-2  grid-cols-2 sm:grid-cols-4 pl-[1px] mb-12">
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
              <div className="w-full flex justify-center">
                <Paginate
                  totalPage={totalPage}
                  onPageChange={handlePagination}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
