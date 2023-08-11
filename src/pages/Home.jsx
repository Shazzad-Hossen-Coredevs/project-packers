import Banner from "../Components/Banner/Banner";
import Brands from "../Components/Brands/Brands";
import Showcase from "../Components/Showcase/Showcase";
import About from "../Components/About/About";
import Carousel from "../Components/UiElements/Carousel/Carousel";
import Faq from "../Components/Faq/Faq";
import { products, carousel, brand } from "../Store/Data";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="-mt-[13rem]">
        <Carousel data={carousel} />
      </div>
      <Brands data={brand} />
      <Showcase
        type="trend"
        title="Trending products on  Project Packers"
        description="Get inspired by what people in your city are buying from abroad with the biggest savings"
        data={products}
      />
      <About />
      <Faq />
    </>
  );
};

export default Home;
