import { useParams } from "react-router-dom";
import Heading from "../Components/UiElements/Heading/Heading";
import Button from "../Components/UiElements/Button/Button";
import Input from "../Components/UiElements/Input/Input";
import globe from "../../assets/icons/cd-internet.svg";
import ImageUploader from "../../Components/UiElements/ImageUploader./ImageUploader";
const RequestDetails = () => {
  const { requestId } = useParams();
  const updateHandler = () => {
    console.log("update clicked");
  };
  return (
    <div className="h-full px-5">
      <Heading type="navigate" title={`#${requestId}`}>
        <div className="flex items-center gap-1">
          <Button style="delete" onClick={updateHandler}>
            Delete
          </Button>
          <Button style="primary" onClick={updateHandler}>
            Update
          </Button>
        </div>
      </Heading>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 grid gap-5">
          <div className="grid gap-5 border border-[#0000001c] rounded p-5">
            <h3 className="text-base font-semibold">Requested Items</h3>
            <div className="flex gap-2 items-center">
              <div className="w-full">
                <Input styles="secondary" type="text" placeholder="hello world">
                  <img className="opacity-70" src={globe} />
                </Input>
              </div>
              <Button style="outline">Go</Button>
            </div>
            <div className="flex gap-2 items-center">
              <p className="">Quantity</p>
              <Input styles="quantity" type="number" />
            </div>
            <div className="">
              <ImageUploader />
            </div>
            <div className="grid gap-3">
              <div className="flex justify-between items-center">
                <p className="text-sm font-semibold">Note</p>
                <button className="text-[#3E949A] text-sm font-normal">
                  Edit
                </button>
              </div>
              <textarea
                className="w-full text-[#475569] outline-none"
                name=""
                id=""
                rows="3"
                value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                disabled={true}
              ></textarea>
            </div>
          </div>
          <div className="grid gap-5 border border-[#0000001c] rounded p-5">
            {" "}
            last state
          </div>
        </div>
        <div className="col-span-1 border border-[#0000001c] rounded p-5">
          1
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
