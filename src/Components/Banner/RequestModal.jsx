/**
 * Modal View Component for request item modal
 * active state for navigate view
 * quantity state for keep quantity of product
 * onSubmit function for form submission
 * 
 * @returns JSX Modal Element
 */

import Button from "../UiElements/Buttons/Button";
import Input from "../UiElements/Input/Input";
import globe from "../../assets/icons/cd-internet.svg";
import reload from "../../assets/icons/cd-reload.svg";
import { useState } from "react";
import ImageUploader from "../UiElements/ImageUploader/ImageUploader";

const RequestModal = ({ confirmSubmit }) => {
  const [active, setActive] = useState("link");
  const [quantity, setQuantity] = useState(1);

  const onSubmit = () => {
    confirmSubmit("success");
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-8 pb-4 justify-between items-start border-b border-[#0000001e]">
        <div className="flex gap-2 items-center flex-wrap ">
          <p className="shrink-0 text-xl font-semibold"> Request Items</p>
          <div className="flex gap-2">
            <Button
              onClick={() => setActive("link")}
              type={active === "link" ? "lightGreen" : "light"}
            >
              Link
            </Button>
            <Button
              onClick={() => setActive("image")}
              type={active === "image" ? "lightGreen" : "light"}
            >
              Image
            </Button>
          </div>
        </div>
      </div>
      {active === "link" && (
        <>
          <div className="flex gap-2 items-end ">
            <div className="w-full">
              <Input
                styles="primary"
                label="Product Link"
                placeholder="Product URL"
                border
              >
                <img src={globe} alt="" />
              </Input>
            </div>
            <img
              className="p-4 rounded-full bg-[#00031615] "
              src={reload}
              alt=""
            />
          </div>
          <div className="">
            <Input
              styles="primary"
              value="OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro - BLACK"
              label="Product Name"
              placeholder="Product Name"
              border
              disabled
            />
          </div>
        </>
      )}
      {active === "image" && <ImageUploader title="Image Upload" />}
      <div className="flex gap-3 items-center">
        <div className="border-[#0000004d] border rounded-full w-fit flex items-center justify-center">
          <button
            className="px-5 pb-2 text-[#0000004d] text-3xl"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          >
            -
          </button>
          <input
            className="text-center max-w-[40px] text-secondary font-semibold outline-none"
            value={quantity}
            onChange={(value) => setQuantity(value)}
            min={1}
            type="number"
          />
          <button
            className="px-5 pb-2 text-[#0000004d] text-3xl h-full"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        {active === "link" && (
          <p className="">
            By <span className="text-secondary">amazon.com</span>
          </p>
        )}
      </div>
      <div className="w-full">
        <label className="block mb-3" htmlFor="note">
          Add Note (optional)
        </label>
        <textarea
          className="border p-2 rounded-md w-full"
          name="note"
          id=""
          rows="5"
          placeholder="Specify size, color, model or any instructions here..."
        ></textarea>
      </div>
      <Button onClick={onSubmit} type="primary" full>
        Login & Request Your Item
      </Button>
    </div>
  );
};

export default RequestModal;
