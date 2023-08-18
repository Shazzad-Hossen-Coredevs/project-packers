import { useLayoutEffect, useState } from "react";
import Breadcrumb from "../Components/UiElements/Breadcrumb/Breadcrumb";
import ProductCard from "../Components/UiElements/ProductCard/ProductCard";
import Category from "../Components/UiElements/Category/Category";
import { apiData } from "../Components/UiElements/Category/data";
import Paginate from "../Components/UiElements/Paginate/Paginate";
import { getApi } from "../Util/apiCall";
import loader from "../assets/loader.svg";
const Shop = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const totalPage = 99;
  useLayoutEffect(() => {
    getApi("/product?limit=20&paginate=true").then((res) => {
      if (res.status === 200) {
        setData(res?.data?.docs);
        
      } else {
        console.log(res?.response?.data);
      }
    });
  }, []);
  // const dataFetch = async (page = 1) => {
  //   const response = await fetch(`https://dummyjson.com/products/`).then((res) =>
  //     res.json()
  //   );

  //   setData(response.products);
  // };
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
            <div className="w-full h-full">
              {loading ? (
                <div className="flex h-full items-center justify-center">
                  <img className="h-28 w-auto" src={loader} alt="" />
                </div>
              ) : (
                <div className="grid gap-[3px] grid-rows-2  grid-cols-2 sm:grid-cols-4  mb-12">
                  {data?.slice(0, 20).map((item) => {
                    return (
                      <ProductCard
                        key={item._id}
                        id={item._id}
                        title={item.name}
                        url={item.thumbnails[0]}
                        price={item.price}
                      />
                    );
                  })}
                </div>
              )}
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
