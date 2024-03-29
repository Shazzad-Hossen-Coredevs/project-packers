/**
 * RequestModal() returns JSX Element
 * Component for request item modal
 *
 * @param {string} confirmSubmit callback function.
 *
 * @returns JSX Modal Element
 */

import Button from "../UiElements/Buttons/Button";
import Input from "../UiElements/Input/Input";
import globe from "../../assets/icons/cd-internet.svg";
import reload from "../../assets/icons/cd-reload.svg";
import { useState } from "react";
import ImageUploader from "../UiElements/ImageUploader/ImageUploader";
import { useFormik } from "formik";
import { errorToast, successToast } from "../../Util/toaster";
import { postApi } from "../../Util/apiCall";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequestModal = ({ url, confirmSubmit }) => {
  const [imageData, setImageData] = useState([]);
  const [active, setActive] = useState("link");
  const { user } = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const itemRequestForm = useFormik({
    initialValues: {
      link: url,
      name: "",
      quantity: 1,
      notes: "",
    },
    onSubmit: (values) => {
      if (user) {
        const data = JSON.stringify(values);
        const formData = new FormData();
        formData.append("data", data);
        for (const image of imageData) {
          formData.append("thumbnails", image, image.name);
          console.log(image, image.name);
        }

        postApi("/request-product", formData)
          .then((res) => {
            if (res.status === 200) {
              successToast("Product Uploaded Successfully");
              confirmSubmit("success");
            } else {
              errorToast("Something went wrong");
            }
          })
          .catch((error) => errorToast(error));
      } else {
        navigate("/login");
      }
    },
  });

  const imageSetter = (value) => {
    setImageData((prev) => [...prev, value]);
  };

  const handleRemove = (values) => {
    setImageData(values);
  };

  return (
    <form action="" onSubmit={itemRequestForm.handleSubmit}>
      <div className="flex flex-col gap-5">
        <div className="flex gap-8 pb-4 justify-between items-start border-b border-[#0000001e]">
          <div className="flex gap-2 items-center flex-wrap ">
            <p className="shrink-0 text-xl font-semibold"> Request Items</p>
            <div className="flex gap-2">
              <Button
                onClick={() => setActive("link")}
                type={active === "link" ? "lightGreen" : "light"}
                buttonType="button"
              >
                Link
              </Button>
              <Button
                onClick={() => setActive("image")}
                type={active === "image" ? "lightGreen" : "light"}
                buttonType="button"
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
                  name="link"
                  change={itemRequestForm.handleChange}
                  blur={itemRequestForm.handleBlur}
                  value={itemRequestForm.values.link}
                  placeholder="Product URL"
                  border
                >
                  <img src={globe} alt="" />
                </Input>
              </div>
              <button type="button" className="cursor-pointer duration-500 active:rotate-180">
                <img
                  className="p-4  rounded-full bg-[#00031615] "
                  src={reload}
                  alt=""
                />
              </button>
            </div>
            <div className="">
              <Input
                styles="primary"
                label="Product Name"
                name="name"
                change={itemRequestForm.handleChange}
                blur={itemRequestForm.handleBlur}
                value={itemRequestForm.values.name}
                placeholder="Product Name"
                border
              />
            </div>
          </>
        )}
        {active === "image" && (
          <ImageUploader
            title="Image Upload"
            data={imageData}
            onChange={imageSetter}
            onRemove={handleRemove}
          />
        )}
        <div className="flex gap-3 items-center">
          <div className="border-[#0000004d] border rounded-full w-fit flex items-center justify-center">
            <button
              className="px-5 pb-2 text-[#0000004d] text-3xl"
              type="button"
              onClick={() =>
                itemRequestForm.values.quantity > 1
                  ? itemRequestForm.setFieldValue(
                      "quantity",
                      itemRequestForm.values.quantity - 1
                    )
                  : null
              }
            >
              -
            </button>
            <input
              className="text-center max-w-[40px] text-secondary font-semibold outline-none"
              name="quantity"
              value={itemRequestForm.values.quantity}
              onChange={itemRequestForm.handleChange}
              onBlur={itemRequestForm.handleBlur}
              min={1}
              type="number"
            />
            <button
              className="px-5 pb-2 text-[#0000004d] text-3xl h-full"
              type="button"
              onClick={() =>
                itemRequestForm.setFieldValue(
                  "quantity",
                  itemRequestForm.values.quantity + 1
                )
              }
            >
              +
            </button>
          </div>
          {active === "link" && (
            <p className="">
              By{" "}
              <span className="text-secondary">
                {
                  itemRequestForm.values.link
                    ?.replace(/^(https?:\/\/)?(www\.)?/, "")
                    .split("/")[0]
                }
              </span>
            </p>
          )}
        </div>
        <div className="w-full">
          <label className="block mb-3" htmlFor="note">
            Add Note (optional)
          </label>
          <textarea
            className="border p-2 rounded-md w-full outline-none"
            name="notes"
            onChange={itemRequestForm.handleChange}
            onBlur={itemRequestForm.handleBlur}
            value={itemRequestForm.values.notes}
            rows="5"
            placeholder="Specify size, color, model or any instructions here..."
          ></textarea>
        </div>
        <Button type="primary" buttonType="submit" full>
          {user ? "Request Item" : "Login & Request Your Item"}
        </Button>
      </div>
    </form>
  );
};

export default RequestModal;
