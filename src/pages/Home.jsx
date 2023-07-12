import Button from "../Components/Ui Elements/Buttons/Button";
import Carousel from "../Components/Ui Elements/Carousel/Carousel";
import ProductCard from "../Components/Ui Elements/ProductCart/ProductCard";


const Home = () => {

    return (
        <div className="max-w-[1280px] mx-auto">

          <Button text="Verify Account" primary/>
          <ProductCard />
          <Carousel title='Our users love  Project Packers' data={['https://www.youtube.com/shorts/2A-RKtPrgDk','https://www.youtube.com/shorts/JfbnpYLe3Ms','https://www.youtube.com/shorts/qjmZRIEsh6w','https://www.youtube.com/shorts/R-RmSTTTnaw','https://www.youtube.com/shorts/GK82R0zSCGw','https://www.youtube.com/shorts/JWKTXXRMyEU','https://www.youtube.com/shorts/2_vJh_EanUM']}/>

        </div>
    );
};

export default Home;