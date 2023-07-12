import Button from "../Components/Ui Elements/Buttons/Button";
import ProductCard from "../Components/Ui Elements/ProductCart/ProductCard";


const Home = () => {

    return (
        <div className="max-w-[1280px] mx-auto">

          <Button text="Verify Account" primary/>
          <ProductCard />

        </div>
    );
};

export default Home;