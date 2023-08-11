import { useState } from "react";
import camera from "../../../assets/icons/cd-camera.svg";
import cancel from "../../../assets/icons/cd-cancel.svg";
const ImageUploader = ({title}) => {
  const [previewImage, setPreviewImage] = useState([]);

  const imageInputHandler = (element) => {
    const url = URL.createObjectURL(element.target.files[0]);
    setPreviewImage((prev) => [...prev, url]);
  };

  const imageRemoveHandler = (removeIndex) => {
    const updateArray = previewImage.filter(
      (item, index) => index !== removeIndex
    );
    setPreviewImage(updateArray);
  };
  return (
    <>
 {title && <p className="text-secondary font-semibold">{title}</p>}
      <div className="flex gap-2">
        <label htmlFor="file">
          <div className="flex h-full  flex-col gap-4 items-center p-4 border  border-[#00000023] rounded-md cursor-pointer">
            <img src={camera} alt="" />
            <p className="text-secondary text-xs">upload Image</p>
          </div>
        </label>
        <input
          className="hidden"
          type="file"
          name="file"
          id="file"
          onChange={imageInputHandler}
        />
        {previewImage.reverse().map((image, index) => {
          return (
            <div
              key={index}
              className="relative p-2 border border-[#00000023] rounded-md "
            >
              <img
                onClick={() => imageRemoveHandler(index)}
                className="absolute top-1 right-1 rounded-full p-1 bg-[#CFF6EF] h-5 w-5 cursor-pointer"
                src={cancel}
                alt=""
              />
              <img className="w-[80px] h-[80px]" src={image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageUploader;
