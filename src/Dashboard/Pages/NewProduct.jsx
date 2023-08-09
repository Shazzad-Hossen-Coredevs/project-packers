import Heading from "../Components/UiElements/Heading/Heading";
import { useParams } from "react-router-dom";
import Input from "../Components/UiElements/Input/Input";
import ImageUploader from "../../Components/UiElements/ImageUploader/ImageUploader";
import Button from "../Components/UiElements/Button/Button";
const NewProduct = () => {
  const {productId} = useParams();
  console.log(productId)
  return (
    <div className="h-full px-5">
      <Heading type="navigate" title="Add New Product" />
      <form action="">
        <div className="grid grid-cols-1 items-start sm:grid-cols-2 gap-3 border-t border-[#0000001c] py-5">
          <div className="grid gap-3">
            <h2 className="text-base text-secondary font-semibold">
              Description
            </h2>
            <div className="border border-[#0000001c] rounded-lg p-3 grid gap-3">
              <Input
                styles="basic"
                label="Product name"
                placeholder="Product name"
              />
              <Input
                styles="area"
                label="Description"
                placeholder="Write here..."
              />
            </div>

            <h2 className="text-base text-secondary font-semibold">Category</h2>
            <div className="border border-[#0000001c] rounded-lg p-3 grid gap-3">
              <Input
                styles="select"
                label="Product Category"
                option={[
                  { name: "Electronics", value: "electronics" },
                  { name: "Fashion", value: "fashion" },
                  { name: "Travel", value: "travel" },
                ]}
              />
              <Input
                styles="select"
                label="Sub Category"
                option={[
                  { name: "Beauty", value: "beauty" },
                  { name: "Fashion", value: "fashion" },
                  { name: "Travel", value: "travel" },
                ]}
              />
              <Input styles="basic" label="Tags" placeholder="Tags" />
            </div>
          </div>
          <div className="grid gap-3">
            <h2 className="text-base text-secondary font-semibold">
              Product Images
            </h2>
            <div className="border border-[#0000001c] rounded-lg p-3">
              <ImageUploader />
            </div>
            <h2 className="text-base text-secondary font-semibold">Pricing</h2>
            <div className="border border-[#0000001c] grid grid-cols-2 gap-3 rounded-lg p-3">
              <Input styles="basic" label="Price" placeholder="0.00" />
              <Input
                styles="basic"
                label="Compare at Price"
                placeholder="0.00"
              />
            </div>
            <h2 className="text-base text-secondary font-semibold">
              Product link (Only admin can show this link)
            </h2>
            <div className="border border-[#0000001c] rounded-lg p-3">
              <Input
                styles="basic"
                label="Product URL"
                placeholder="Url here.."
              />
            </div>
            <div className="flex justify-between">
              <Button style="outline">Discard</Button>
              <div className="space-x-2">
                <Button style="outline">Draft</Button>
                <Button style="primary">Publish</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
