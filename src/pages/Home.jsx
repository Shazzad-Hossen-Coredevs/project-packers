import Banner from "../Components/Banner/Banner";
import Carousel from "../Components/Ui Elements/Carousel/Carousel";

const data =["https://www.youtube.com/shorts/FZsOm-qARPM","https://www.youtube.com/shorts/3k01apyZFlI", 'https://www.youtube.com/shorts/aWVzZgbOVhw', 'https://www.youtube.com/shorts/46NfO75pf3w']

const Home = () => {

    return (
        <>
        
            <Banner />
            <Carousel data={data} />
        </>
     
    );
};

export default Home;