import ButtonPrimary from "../Components/Ui Elements/Buttons/ButtonPrimary";
import ProductCard from "../Components/Ui Elements/ProductCart/ProductCard";


const Home = () => {
    return (
        <div className="max-w-[1280px] mx-auto">

          <ButtonPrimary text="Verify Account"/>
          <ProductCard />

        </div>
    );
};

export default Home;