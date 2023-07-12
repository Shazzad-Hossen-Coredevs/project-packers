import ButtonPrimary from "../Components/Ui Elements/Buttons/ButtonPrimary";
import Collapse from "../Components/Ui Elements/Collapse/Collapse";
import Icon from "../Components/Ui Elements/Icon/Icon";
import ProductCard from "../Components/Ui Elements/ProductCard/ProductCard";


const Home = () => {
    return (
        <div className="max-w-[1280px] mx-auto">

          <ButtonPrimary text="Verify Account"/>
          <ProductCard />
          <Collapse data={{header: "hello world", discription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}} />
         <Icon name="arrowLeft" />
         <Icon name="arrowRight" />
         <Icon name="bin2" />

        </div>
    );
};

export default Home;