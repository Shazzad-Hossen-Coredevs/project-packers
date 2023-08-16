/**
 * SubCategory() return JSX Element
 * Adding sub category or delete sub category from here
 * 
 * @returns JSX Element
 * 
 */

import { categoryData } from "../../../Store/Data";
import Button from "../UiElements/Button/Button";
import Input from "../UiElements/Input/Input";
import Table from "../UiElements/Table/Table";
import sort from "../../../assets/icons/cd-arrow-data-transfer-vertical-round.svg";
import { useFormik } from "formik";
import { subCategorySchema } from "../../../Util/ValidationSchema";


const SubCategory = () => {
    const subCategoryForm = useFormik({
        initialValues: {
          category: '',
          name: "",
          slug: "",
        },
        validationSchema: subCategorySchema,
        onSubmit: (values) => {
          console.log(values);
        },
      });
    return (
        <>
        <div className="col-span-6 sm:col-span-2">
          <form action="" onSubmit={subCategoryForm.handleSubmit}>
            <div className="grid gap-3">
              <h2 className="text-base text-secondary font-semibold">
                Add Sub Category
              </h2>
              <div className="border border-[#0000001c] rounded-lg p-3 grid gap-3">
                <Input
                  styles="select"
                  label="Parent Category"
                  option={[
                    { name: "Electronics", value: "electronics" },
                    { name: "Electronics 2", value: "electronics2" },
                    { name: "Electronics 3", value: "electronics3" },
                  ]}
                  name="category"
                  change={subCategoryForm.handleChange}
                  blur={subCategoryForm.handleChange}
                  value={subCategoryForm.values.category}
                />
                <Input
                  styles="basic"
                  label="Name"
                  name="name"
                  change={subCategoryForm.handleChange}
                  blur={subCategoryForm.handleBlur}
                  value={subCategoryForm.values.name}
                  error={
                    subCategoryForm.touched.name && subCategoryForm.errors.name
                      ? subCategoryForm.errors.name
                      : null
                  }
                  placeholder="Sub Category name"
                />
                <Input
                  styles="basic"
                  name="slug"
                  change={subCategoryForm.handleChange}
                  blur={subCategoryForm.handleBlur}
                  value={subCategoryForm.values.slug}
                  error={
                    subCategoryForm.touched.slug && subCategoryForm.errors.slug
                      ? subCategoryForm.errors.slug
                      : null
                  }
                  label="Slug"
                  placeholder="Slug"
                />
              </div>
              <div className="text-end mt-3">
                <Button type="submit" style="primary">
                  Add Sub Category
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-span-6 sm:col-span-4 px-0 sm:pl-8">
          <div className="flex justify-between pb-2">
            <Button style="delete">delete</Button>
            <button className="border border-[#0000001f] p-2  ">
              <img className="opacity-70" src={sort} alt="" />
            </button>
          </div>
          <Table type="category" data={categoryData} />
        </div>
        </>
    );
};

export default SubCategory;