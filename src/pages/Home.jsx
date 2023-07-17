import Banner from "../Components/Banner/Banner";
import Brands from "../Components/Brands/Brands";
import Showcase from "../Components/Showcase/Showcase";
import About from "../Components/About/About";
import Carousel from "../Components/UiElements/Carousel/Carousel";
import Faq from "../Components/Faq/Faq";

const data =["https://www.youtube.com/shorts/FZsOm-qARPM","https://www.youtube.com/shorts/3k01apyZFlI", 'https://www.youtube.com/shorts/aWVzZgbOVhw', 'https://www.youtube.com/shorts/46NfO75pf3w']

const Home = () => {

    return (
        <>
        
            <Banner />
            <Carousel data={data} />
            <Brands />
            <Showcase />
            <About />
            <Faq />
        </>
     
    );
};

export default Home;