import PriceCard from "../Components/PriceCard/PriceCard";
const cartItems = [
    {
      id: 1,
      title: "OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro",
      price: 699,
      quantity: 5,
    },
    {
      id: 2,
      title: "OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro",
      price: 699,
      quantity: 4,
    },
    {
      id: 2,
      title: "OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro",
      price: 699,
      quantity: 6,
    },
  ];
const Checkout = () => {
    return (
        <div className="container mx-auto py-12 ">
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 sm:col-span-3 px-5 sm:px-0">
          
        </div>
        <div className="col-span-5 sm:col-span-2">
          <PriceCard
            type="checkout"
            products={cartItems}
            estimated={30010}
          />
        </div>
      </div>
    </div>
    );
};

export default Checkout;