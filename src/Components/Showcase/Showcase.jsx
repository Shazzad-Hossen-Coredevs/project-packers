import Heading from "../UiElements/Heading/Heading";
import ProductCard from "../UiElements/ProductCard/ProductCard";
import product1 from "../../assets/Image/product1.png";
import product2 from "../../assets/Image/product2.png";
import product3 from "../../assets/Image/product3.png";
import product4 from "../../assets/Image/product4.png";
import Button from "../UiElements/Buttons/Button";
const Showcase = () => {
  return (
    <div className="container mx-auto flex flex-col items-center my-[34px] sm:my-[74px]">
      <Heading
        title="Trending products on  Project Packers "
        description="Get inspired by what people in your city are buying from abroad with the biggest savings"
      />
      <div className="grid divide-x divide-y grid-rows-2 p-2 grid-cols-2 sm:grid-cols-4">
        <ProductCard
          url={product1}
          title="iConnect by Timex Active Smartwatch"
          price="28.95"
        />
        <ProductCard
          url={product2}
          title="iConnect by Timex Active Smartwatch"
          price="28.95"
        />
        <ProductCard
          url={product3}
          title="iConnect by Timex Active Smartwatch"
          price="28.95"
        />
        <ProductCard
          url={product4}
          title="iConnect by Timex Active Smartwatch"
          price="28.95"
        />
        <ProductCard
          url={product1}
          title="iConnect by Timex Active Smartwatch"
          price="28.95"
        />
        <ProductCard
          url={product2}
          title="iConnect by Timex Active Smartwatch"
          price="28.95"
        />
        <ProductCard
          url={product3}
          title="iConnect by Timex Active Smartwatch"
          price="28.95"
        />
        <ProductCard
          url={product4}
          title="iConnect by Timex Active Smartwatch"
          price="28.95"
        />
      </div>
      <div className="mt-8">
        <Button arrow text="View More Items" primary />
      </div>
    </div>
  );
};

export default Showcase;
