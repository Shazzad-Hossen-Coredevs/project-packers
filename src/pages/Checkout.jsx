import PriceCard from "../Components/PriceCard/PriceCard";
import Input from '../Components/UiElements/Input/Input'
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
          <div className="mb-6">
            <h3 className="text-secondary font-semibold mb-6">Contact Information</h3>
            <div className="grid gap-4">
              <Input styles='primary' type="email" label="Email Address." placeholder="Enter your Email Address." border />
              <Input styles='primary' type="tel" label="Phone Number." placeholder="Enter your Phone Number" border required />
              <Input styles='primary' type="tel" label="Alternative phone number (Optional)." placeholder="Enter your Phone Number" border />
            </div>
          </div>
          <div className="">
            <h3 className="text-secondary font-semibold mb-6">Shipping Address.</h3>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input styles="primary" type='text' label="First Name" placeholder="Enter your first name." border />
                <Input styles="primary" type='text' label="Last Name" placeholder="Enter your last name." border />
              </div>
              <Input styles='primary' type="text" label="Address" placeholder="Enter your Address." border />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input styles='primary' type="text" label="City" placeholder="City" border />
              <Input styles='primary' type="text" label="Area" placeholder="Area" border />
              <Input styles='primary' type="number" label="Zip Code" placeholder="Zip Code" border />
              </div>
              <div className="w-full">
              <label className="block pb-3">Delivery Instructions (Optional)</label>
              <textarea className="border  w-full text-secondary placeholder:text-secondary p-2" placeholder="Write Here..." rows={8}  />
              </div>
            </div>
          </div>
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