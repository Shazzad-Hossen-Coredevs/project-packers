import Banner from "../Components/Banner/Banner";
import Brands from "../Components/Brands/Brands";
import Showcase from "../Components/Showcase/Showcase";
import About from "../Components/About/About";
import Carousel from "../Components/UiElements/Carousel/Carousel";
import Faq from "../Components/Faq/Faq";
import { products } from "../Store/Data";
const data = [
  "https://www.youtube.com/shorts/FZsOm-qARPM",
  "https://www.youtube.com/shorts/3k01apyZFlI",
  "https://www.youtube.com/shorts/aWVzZgbOVhw",
  "https://www.youtube.com/shorts/46NfO75pf3w",
];

const Home = () => {
  return (
    <>
      <Banner />
      <Carousel data={data} />
      <Brands />
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
