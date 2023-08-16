/**
 * NewProduct() returns JSX Element
 * Component used to add or edit product
 * edit product id coming from url
 * @returns JSX Element product add form
 *
 *  TODO image upload
 */

import Heading from "../Components/UiElements/Heading/Heading";
import { useParams } from "react-router-dom";
import Input from "../Components/UiElements/Input/Input";
import ImageUploader from "../../Components/UiElements/ImageUploader/ImageUploader";
import Button from "../Components/UiElements/Button/Button";
import { useFormik } from "formik";
import { productSchema } from "../../Util/ValidationSchema";
import { useState } from "react";
import { postApi } from "../../Util/apiCall";
const NewProduct = () => {
  const { productId } = useParams();
  const [imageData, setImageData] = useState([]);
  const productForm = useFormik({
    initialValues: {
      name: "",
      desc: "",
      price: "",
      tax: "",
      fee: "",
      stock: "",
      from: "",
      link: "",
      category: "",
      subCategory: "",
      tags: "",
      deliveryTime: {
        min: "",
        max: "",
      },
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      const data = JSON.stringify(values)
      const formData = new FormData()
      formData.append('data', data )
      for (const image of imageData) {
        formData.append('thumbnails', image)
        console.log(image)
        
      } 
      postApi('/product',formData).then(res => console.log(res)).catch(error => console.log(error))
    },
  });

  const imageSetter = (value) => {
    setImageData(prev => [value, ...prev,])
  }

  const handleRemove = (values) =>{
    setImageData(values)
  }
  return (
    <div className="h-full px-5">
      <Heading type="navigate" title="Add New Product" back="Products" />
      <form onSubmit={productForm.handleSubmit} action="">
        <div className="grid grid-cols-1 items-start sm:grid-cols-2 gap-3 border-t border-[#0000001c] py-5">
          <div className="grid gap-3">
            <h2 className="text-base text-secondary font-semibold">
              Description
            </h2>
            <div className="border border-[#0000001c] rounded-lg p-3 grid gap-3">
              <Input
                styles="basic"
                label="Product name"
                name="name"
                change={productForm.handleChange}
                blur={productForm.handleBlur}
                value={productForm.values.name}
                error={
                  productForm.touched.name && productForm.errors.name
                    ? productForm.errors.name
                    : null
                }
                placeholder="Product name"
              />
              <Input
                styles="area"
                label="Description"
                name="desc"
                change={productForm.handleChange}
                blur={productForm.handleBlur}
                value={productForm.values.desc}
                error={
                  productForm.touched.desc &&
                  productForm.errors.desc
                    ? productForm.errors.desc
                    : null
                }
                placeholder="Write here..."
              />
            </div>

            <h2 className="text-base text-secondary font-semibold">Category</h2>
            <div className="border border-[#0000001c] rounded-lg p-3 grid gap-3">
              <Input
                styles="select"
                label="Product Category"
                name="category"
                change={productForm.handleChange}
                blur={productForm.handleBlur}
                value={productForm.values.category}
                error={
                  productForm.touched.category && productForm.errors.category
                    ? productForm.errors.category
                    : null
                }
                option={[
                  { name: "Electronics", value: "electronics" },
                  { name: "Fashion", value: "fashion" },
                  { name: "Travel", value: "travel" },
                ]}
              />
              <Input
                styles="select"
                label="Sub Category"
                name="subCategory"
                change={productForm.handleChange}
                blur={productForm.handleBlur}
                value={productForm.values.subCategory}
                error={
                  productForm.touched.subCategory &&
                  productForm.errors.subCategory
                    ? productForm.errors.subCategory
                    : null
                }
                option={[
                  { name: "Beauty", value: "beauty" },
                  { name: "Fashion", value: "fashion" },
                  { name: "Travel", value: "travel" },
                ]}
              />
              <Input
                styles="basic"
                label="Tags"
                name="tags"
                change={productForm.handleChange}
                blur={productForm.handleBlur}
                value={productForm.values.tags}
                error={
                  productForm.touched.tags && productForm.errors.tags
                    ? productForm.errors.tags
                    : null
                }
                placeholder="Tags"
              />
            </div>
          </div>
          <div className="grid gap-3">
            <h2 className="text-base text-secondary font-semibold">
              Product Images
            </h2>
            <div className="border border-[#0000001c] rounded-lg p-3">
              <ImageUploader data={imageData} onChange={imageSetter} onRemove={handleRemove} />
            </div>
            <h2 className="text-base text-secondary font-semibold">Pricing</h2>
            <div className="border border-[#0000001c] grid grid-cols-2 gap-3 rounded-lg p-3">
              <Input
                styles="basic"
                label="Price"
                name="price"
                change={productForm.handleChange}
                blur={productForm.handleBlur}
                value={productForm.values.price}
                error={
                  productForm.touched.price && productForm.errors.price
                    ? productForm.errors.price
                    : null
                }
                placeholder="0.00"
              />
              <Input
                styles="basic"
                label="Tax"
                name="tax"
                change={productForm.handleChange}
                blur={productForm.handleBlur}
                value={productForm.values.tax}
                error={
                  productForm.touched.tax && productForm.errors.tax
                    ? productForm.errors.tax
                    : null
                }
                placeholder="0.00"
              />
              <Input
                styles="basic"
                label="Fee"
                name="fee"
                change={productForm.handleChange}
                blur={productForm.handleBlur}
                value={productForm.values.fee}
                error={
                  productForm.touched.fee && productForm.errors.fee
                    ? productForm.errors.fee
                    : null
                }
                placeholder="0.00"
              />
              <Input
                styles="basic"
                label="Stock"
                name="stock"
                change={productForm.handleChange}
                blur={productForm.handleBlur}
                value={productForm.values.stock}
                error={
                  productForm.touched.stock && productForm.errors.stock
                    ? productForm.errors.stock
                    : null
                }
                placeholder="0"
              />
            </div>
            <h2 className="text-base text-secondary font-semibold">
              Delivery Information
            </h2>
            <div className="border border-[#0000001c] grid grid-cols-2 gap-3 rounded-lg p-3">
              <div className="col-span-2">
                <Input
                  styles="basic"
                  label="Product From"
                  type="text"
                  name="from"
                  change={productForm.handleChange}
                  blur={productForm.handleBlur}
                  value={productForm.values.from}
                  error={
                    productForm.touched.from && productForm.errors.from
                      ? productForm.errors.from
                      : null
                  }
                  placeholder="USA"
                />
              </div>
              <Input
                styles="basic"
                label="Approx Delivery (min)"
                type="text"
                name="deliveryTime.min"
                change={productForm.handleChange}
                blur={productForm.handleBlur}
                value={productForm.values.deliveryTime.min}
                error={productForm.errors.deliveryTime && productForm.touched.deliveryTime ? productForm.errors.deliveryTime : null}
                placeholder="1 week"
              />
              <Input
                styles="basic"
                label="Approx Delivery (max)"
                type="text"
                name="deliveryTime.max"
                change={productForm.handleChange}
                blur={productForm.handleBlur}
                value={productForm.values.deliveryTime.max}
                error={productForm.errors.deliveryTime && productForm.touched.deliveryTime ? productForm.errors.deliveryTime : null}
                placeholder="2 week"
              />
            </div>
            <h2 className="text-base text-secondary font-semibold">
              Product link (Only admin can show this link)
            </h2>
            <div className="border border-[#0000001c] rounded-lg p-3">
              <Input
                styles="basic"
                label="Product URL"
                name="link"
                change={productForm.handleChange}
                blur={productForm.handleBlur}
                value={productForm.values.link}
                error={
                  productForm.touched.link && productForm.errors.link
                    ? productForm.errors.link
                    : null
                }
                placeholder="Url here.."
              />
            </div>
           
            <div className="flex justify-between">
              <Button onClick={()=> productForm.resetForm()} style="outline" type="reset">Discard</Button>
              <div className="space-x-2">
                <Button style="outline">Draft</Button>
                <Button style="primary" type="submit">Publish</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
