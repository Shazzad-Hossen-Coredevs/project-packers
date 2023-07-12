import Button from "../Components/Ui Elements/Buttons/Button";
import Carousel from "../Components/Ui Elements/Carousel/Carousel";
import ProductCard from "../Components/Ui Elements/ProductCard/ProductCard";
import Collapse from "../Components/Ui Elements/Collapse/Collapse";
import Icon from "../Components/Ui Elements/Icon/Icon";


const Home = () => {

    return (
        <div className="max-w-[1280px] mx-auto">

          <Button text="Verify Account" primary/>
          <ProductCard />
          <Carousel title='Our users love  Project Packers' data={['https://www.youtube.com/shorts/2A-RKtPrgDk','https://www.youtube.com/shorts/JfbnpYLe3Ms','https://www.youtube.com/shorts/qjmZRIEsh6w','https://www.youtube.com/shorts/R-RmSTTTnaw','https://www.youtube.com/shorts/GK82R0zSCGw','https://www.youtube.com/shorts/JWKTXXRMyEU','https://www.youtube.com/shorts/2_vJh_EanUM']}/>
          <Collapse data={{header: "hello world", discription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}} />
         <Icon name="arrowLeft" />
         <Icon name="arrowRight" />
         <Icon name="bin2" />

        </div>
    );
};

export default Home;