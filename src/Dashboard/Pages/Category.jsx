import Input from "../Components/UiElements/Input/Input";
import Button from "../Components/UiElements/Button/Button";
import Heading from "../Components/UiElements/Heading/Heading";
import Table from "../Components/UiElements/Table/Table";
import sort from "../../assets/icons/cd-arrow-data-transfer-vertical-round.svg";
import { categoryData } from "../../Store/Data";

const Category = () => {
  const submitHandler = () => {
    console.log("update clicked");
  };
  return (
    <div className="px-5 h-full">
      <Heading type="navigate" title={`Category`} back="product" />

      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-5 sm:col-span-2">
          <form action="" onSubmit={submitHandler}>
            <div className="grid gap-3">
              <h2 className="text-base text-secondary font-semibold">
                Add New Category
              </h2>
              <div className="border border-[#0000001c] rounded-lg p-3 grid gap-3">
                <Input
                  styles="basic"
                  label="Name"
                  placeholder="Gategory name"
                />
                <Input styles="basic" label="Slug" placeholder="Slug" />
              </div>
              <div className="text-end mt-3">
                <Button type="submit"  style="primary">Add New Category</Button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-span-5 sm:col-span-4 px-8">
          <div className="flex justify-between pb-2">
            <Button style="delete">delete</Button>
            <button className="border border-[#0000001f] p-2  ">
              <img className="opacity-70" src={sort} alt="" />
            </button>
          </div>
          <Table type="category" data={categoryData} />
        </div>
      </div>
    </div>
  );
};

export default Category;
