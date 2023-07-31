import PriceCard from "../Components/PriceCard/PriceCard";
import Breadcrumb from "../Components/UiElements/Breadcrumb/Breadcrumb";
import Button from "../Components/UiElements/Buttons/Button";
import CartItem from "../Components/UiElements/CartItem/CartItem";
import Input from "../Components/UiElements/Input/Input";
import product from "../assets/Image/product1.png";
import product2 from "../assets/Image/product2.png";
const cartItems = [
  {
    id: 1,
    title: "OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro",
    image: product,
    price: 699,
    quantity: 5,
  },
  {
    id: 2,
    title: "OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro",
    image: product2,
    price: 699,
    quantity: 4,
  },
  {
    id: 2,
    title: "OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro",
    image: product,
    price: 699,
    quantity: 6,
  },
];
const Cart = () => {
  return (
    <>
    <Breadcrumb />
    <div className="container mx-auto py-12 ">
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 sm:col-span-3 px-5 sm:px-0">
          <table className="w-full">
            <thead className=" text-secondary text-left border-b border-[#00000023]">
              <tr>
                <th className=" w-9/12 font-semibold pb-[14px]">
                  Product List
                </th>
                <th className="w-1/12 font-semibold pb-[14px]">Quantity</th>
                <th className=" w-2/12 font-semibold pb-[14px] hidden sm:table-cell">
                  {" "}
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </tbody>
          </table>
          <div className="my-8 flex justify-between flex-wrap gap-2">
            <div className="flex gap-2 flex-wrap justify-center">
              <Input  type="text" placeholder="Discount code" border />
              <Button type="lightGreen">Apply</Button>
            </div>
            <Button type="light">Update Cart</Button>
          </div>
        </div>
        <div className="col-span-5 sm:col-span-2">
          <PriceCard
            type="cart"
            sellerTakes={22020}
            tax={5590}
            fee={2400}
            estimated={30010}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
