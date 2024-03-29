import { useState } from "react";
import PriceCard from "../Components/PriceCard/PriceCard";
import Breadcrumb from "../Components/UiElements/Breadcrumb/Breadcrumb";
import Input from "../Components/UiElements/Input/Input";
import Modal from "../Components/UiElements/Modal/Modal";
import icon from "../assets/icons/product-ok.svg";
import Button from "../Components/UiElements/Buttons/Button";
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
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(false);
  };
  const submitHandler = () => {
    setModal(true);
  };
  return (
    <>
      <Breadcrumb />
      <div className="container mx-auto py-12 ">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 sm:col-span-3 px-5 sm:px-0">
            <div className="mb-6">
              <h3 className="text-secondary font-semibold mb-6">
                Contact Information
              </h3>
              <div className="grid gap-4">
                <Input
                  styles="primary"
                  type="email"
                  label="Email Address."
                  placeholder="Enter your Email Address."
                  border
                />
                <Input
                  styles="primary"
                  type="tel"
                  label="Phone Number."
                  placeholder="Enter your Phone Number"
                  border
                  required
                />
                <Input
                  styles="primary"
                  type="tel"
                  label="Alternative phone number (Optional)."
                  placeholder="Enter your Phone Number"
                  border
                />
              </div>
            </div>
            <div className="">
              <h3 className="text-secondary font-semibold mb-6">
                Shipping Address.
              </h3>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    styles="primary"
                    type="text"
                    label="First Name"
                    placeholder="Enter your first name."
                    border
                  />
                  <Input
                    styles="primary"
                    type="text"
                    label="Last Name"
                    placeholder="Enter your last name."
                    border
                  />
                </div>
                <Input
                  styles="primary"
                  type="text"
                  label="Address"
                  placeholder="Enter your Address."
                  border
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Input
                    styles="primary"
                    type="text"
                    label="City"
                    placeholder="City"
                    border
                  />
                  <Input
                    styles="primary"
                    type="text"
                    label="Area"
                    placeholder="Area"
                    border
                  />
                  <Input
                    styles="primary"
                    type="number"
                    label="Zip Code"
                    placeholder="Zip Code"
                    border
                  />
                </div>
                <div className="w-full">
                  <label className="block pb-3">
                    Delivery Instructions (Optional)
                  </label>
                  <textarea
                    className="border  w-full text-secondary placeholder:text-secondary p-2"
                    placeholder="Write Here..."
                    rows={8}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 sm:col-span-2">
            <PriceCard
              onSubmit={submitHandler}
              type="checkout"
              products={cartItems}
              estimated={30010}
            />
          </div>
        </div>
      </div>
      <Modal show={modal} onClose={modalHandler}>
        <div className="flex flex-col gap-5">
          <div className="p-8 flex w-full items-start flex-col gap-10">
            <img className="w-fit h-auto" src={icon} alt="" />
            <div className="text-start grid gap-3">
              <h5 className="text-xl font-semibold text-secondary mb-2">
                Thanks your for your order.
              </h5>
              <p className="text-sm font-normal max-w-[360px] text-[#00000386]">
                we sent an order confirmation to:
                <span className="text-secondary font-semibold block">
                  johnsmith@gmail.com
                </span>
              </p>
              <p className="text-sm font-normal max-w-[360px] text-[#00000386]">
                Your order number is:
                <span className="text-secondary font-semibold block">
                  #343895
                </span>
              </p>
              <p className="text-sm font-normal max-w-[360px] text-[#00000386]">
                Your order will deliver on:
                <span className="text-secondary font-semibold block">
                  Thursday, Nov 23 - Saturday, Nov 29
                </span>
              </p>

              <p className="text-sm font-normal max-w-[360px] text-[#00000386]">
                to the address:
                <span className="text-secondary font-semibold block">
                  3829 Main St.<br /> Los Angeles. CA 90210
                </span>
              </p>
            </div>
          </div>

          <Button onClick={submitHandler} type="primary" full>
            Keep Shopping
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Checkout;
