import image1 from "../assets/Image/product1.png";
import image2 from "../assets/Image/product2.png";
import image3 from "../assets/Image/product3.png";
// import { useLoaderData } from 'react-router-dom';
import PriceCard from "../Components/PriceCard/PriceCard";
import Showcase from "../Components/Showcase/Showcase";
import Breadcrumb from "../Components/UiElements/Breadcrumb/Breadcrumb";
import GalleryCard from "../Components/UiElements/GalleryCard/GalleryCard";
// import Slider from "../Components/UiElements/Slider/Slider";
import { products } from "../Store/Data";

const Product = () => {
  // const productId = useLoaderData()
  return (
    <>
      <main>
      <Breadcrumb />
      <div className="container mx-auto my-12">
        <div className="grid grid-cols-5 px-2 sm:px-0 gap-8">
          <div className="col-span-5 sm:col-span-3">
            <GalleryCard data={{ image1, image2, image3 }} />
          </div>
          <div className="col-span-5 sm:col-span-2">
            <PriceCard
              type={"product"}
              price={499}
              source={"apple.com"}
              origin={"United States of America"}
              arrival={"1-2 weeks"}
            />
          </div>
        </div>
        <div className="px-[20px] sm:px-0 my-12">
          <h3 className="text-secondary text-[20px] sm:text-[28px] font-semibold mb-4">
            iPad Air 64Gb Wi-Fi Space Gray
          </h3>
          <p className=" text-[#475569] max-w-[800px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. <br /> <br /> Exercitation veniam consequat
            sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim velit
            mollit. Exercitation veniam consequat sunt nostrud amet.Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className=" my-10 sm:my-36 text-center mx-auto px-[20px] sm:px-0">
            <Showcase type="slide" title="Related Items" description="Get inspired by what people in your city are buying from abroad with the biggest savings" data={products} />
            {/* <Slider items={products} /> */}
        </div>
      </div>
      
      </main>
    </>
  );
};

export default Product;
