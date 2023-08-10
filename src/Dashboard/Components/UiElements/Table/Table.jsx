/**
 * @prams type || data
 * type => order || request || products || customer || customerDetails
 * 
 * @returns table JSX Element.
 */

import Badge from "../../../../Components/UiElements/Badge/Badge";
import arrowRight from "../../../../assets/icons/cd-arrow-right-2.svg";
import edit from "../../../../assets/icons/cd-edit.svg";
import dlt from "../../../../assets/icons/cd-delete.svg";
import arrowLeft from "../../../../assets/icons/cd-arrow-left-1.svg";
import { useNavigate } from "react-router-dom";

const head = {
  order: [
    "Order ID",
    "Product Name",
    "Date",
    "Customer",
    "Status",
    "Items",
    "Total",
    "Action",
  ],
  request: ["ID", "Product Name", "Link", "Date", "Customer", "Status"],
  products: ["", "Product", "Inventory", "Price", "Category", "Publish Date"],
  customer: ['Customer Name', 'Phone Number', 'Location', 'Orders', 'Amount spent'],
  customerDetails: ["", "Products", "Status", "Price"]
};
const Table = ({ type, data = [] }) => {
  const navigate = useNavigate();

  const paginateHandler = (value) => {
    console.log(value);
  };
  const selectHandler = (id) => {
    if (type === "order") {
      console.log(id, " order");
      navigate(`${id}`);
    } else if (type === "request") {
      navigate(`${id}`);
      console.log(id, " request");
    } else if(type === "products") {
      navigate(`${id}`)
    }else if(type === "customer") {
      navigate(`${id}`)
    }
  };
  if (type === "order") {
    return (
      <div className="relative overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F8FAFC] border-y border-[#0000001c]">
              <th className="text-left py-[10px] pl-4 w-[10px]">
                <input type="checkbox" className="accent-yellow-300" />
              </th>
              {head[type].map((item, index) => (
                <th
                  key={index}
                  className="text-sm text-[#475569] font-medium text-left py-[10px] px-4"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length < 1
              ? "Loading"
              : data.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-y border-[#0000001c] hover:bg-[#FEF9DC]"
                    >
                      <td className="text-left py-[10px] pl-4 w-[10px]">
                        <input type="checkbox" className="accent-yellow-300" />
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        #{item.id}
                      </td>
                      <td
                        onClick={() => selectHandler(item.id)}
                        className="px-4 py-[18px] text-black text-sm cursor-pointer"
                      >
                        {item.name}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        {item.date}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        {item.user}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        <Badge text={item.status} styles="" />{" "}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        {item.items}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        ${item.total}
                      </td>
                      <td className="">
                        <div className="flex gap-2">
                          <img
                            className="cursor-pointer opacity-70"
                            onClick={() => console.log("Edit row")}
                            src={edit}
                            alt=""
                          />
                          <img
                            className="cursor-pointer opacity-70"
                            onClick={() => console.log("Delete row")}
                            src={dlt}
                            alt=""
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
        <div className="flex justify-between items-center py-6 px-4">
          <p className="text-[#475569] text-sm">
            Showing {10} of {100} results
          </p>
          <div className="flex">
            <button
              onClick={() => paginateHandler("decrement")}
              className="border p-2"
            >
              <img src={arrowLeft} alt="" />
            </button>
            <button
              onClick={() => paginateHandler("increment")}
              className="border p-2"
            >
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (type === "request") {
    return (
      <div className="relative overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F8FAFC] border-y border-[#0000001c]">
              <th className="text-left py-[10px] pl-4 w-[10px]">
                <input type="checkbox" className="accent-yellow-300" />
              </th>
              {head[type].map((item, index) => (
                <th
                  key={index}
                  className="text-sm text-[#475569] font-medium text-left py-[10px] px-4"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length < 1
              ? "Loading"
              : data.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-y border-[#0000001c] hover:bg-[#FEF9DC]"
                    >
                      <td className="text-left py-[10px] pl-4 w-[10px]">
                        <input type="checkbox" className="accent-yellow-300" />
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        #{item.id}
                      </td>
                      <td
                        onClick={() => selectHandler(item.id)}
                        className="px-4 py-[18px] text-black text-sm cursor-pointer"
                      >
                        {item.product}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        {item.link}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        {item.date}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        {item.customer}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        <Badge text={item.status} styles="" />{" "}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
        <div className="flex justify-between items-center py-6 px-4">
          <p className="text-[#475569] text-sm">
            Showing {10} of {100} results
          </p>
          <div className="flex">
            <button
              onClick={() => paginateHandler("decrement")}
              className="border p-2"
            >
              <img src={arrowLeft} alt="" />
            </button>
            <button
              onClick={() => paginateHandler("increment")}
              className="border p-2"
            >
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (type === "products") {
    return (
      <div className="relative overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F8FAFC] border-y border-[#0000001c]">
              <th className="text-left py-[10px] pl-4 w-[10px]">
                <input type="checkbox" className="accent-yellow-300" />
              </th>
              {head[type].map((item, index) => (
                <th
                  key={index}
                  className="text-sm text-[#475569] font-medium text-left py-[10px] px-4"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length < 1
              ? "Loading"
              : data.slice(0, 9).map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-y border-[#0000001c] hover:bg-[#FEF9DC]"
                    >
                      <td className="text-left py-[10px] pl-4 w-[10px]">
                        <input type="checkbox" className="accent-yellow-300" />
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        <img
                          className="w-10 h-10 rounded border border-[#0000001c]"
                          src={item.thumbnail}
                          alt=""
                        />
                      </td>
                      <td
                        onClick={() => selectHandler(item.id)}
                        className="px-4 py-[18px] text-black text-sm cursor-pointer line-clamp-2"
                      >
                        {item.title}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        {item.stock} in Stock
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        ${item.price}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        {item.category}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        {item.publishDate}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
        <div className="flex justify-between items-center py-6 px-4">
          <p className="text-[#475569] text-sm">
            Showing {10} of {100} results
          </p>
          <div className="flex">
            <button
              onClick={() => paginateHandler("decrement")}
              className="border p-2"
            >
              <img src={arrowLeft} alt="" />
            </button>
            <button
              onClick={() => paginateHandler("increment")}
              className="border p-2"
            >
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (type === "customer") {
    return (
      <div className="relative overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F8FAFC] border-y border-[#0000001c]">
              <th className="text-left py-[10px] pl-4 w-[10px]">
                <input type="checkbox" className="accent-yellow-300" />
              </th>
              {head[type].map((item, index) => (
                <th
                  key={index}
                  className="text-sm text-[#475569] font-medium text-left py-[10px] px-4"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length < 1
              ? "Loading"
              : data.slice(0, 9).map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-y border-[#0000001c] hover:bg-[#FEF9DC]"
                    >
                      <td className="text-left py-[10px] pl-4 w-[10px]">
                        <input type="checkbox" className="accent-yellow-300" />
                      </td>
                   
                      <td
                        onClick={() => selectHandler(item.id)}
                        className="px-4 py-[18px] text-black text-sm cursor-pointer line-clamp-2"
                      >
                        {item.name}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        {item.phone}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        {item.location}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        {item.orders} items
                      </td>
                      <td  className="px-4 py-[18px] text-black text-sm">
                        ${item.spent}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
        <div className="flex justify-between items-center py-6 px-4">
          <p className="text-[#475569] text-sm">
            Showing {10} of {100} results
          </p>
          <div className="flex">
            <button
              onClick={() => paginateHandler("decrement")}
              className="border p-2"
            >
              <img src={arrowLeft} alt="" />
            </button>
            <button
              onClick={() => paginateHandler("increment")}
              className="border p-2"
            >
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (type === "customerDetails") {
    return (
      <div className="relative overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F8FAFC] border-y border-[#0000001c]">
              <th className="text-left py-[10px] pl-4 w-[10px]">
                <input type="checkbox" className="accent-yellow-300" />
              </th>
              {head[type].map((item, index) => (
                <th
                  key={index}
                  className="text-sm text-[#475569] font-medium text-left py-[10px] px-4"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length < 1
              ? "Loading"
              : data.slice(0, 9).map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-y border-[#0000001c] hover:bg-[#FEF9DC]"
                    >
                      <td className="text-left py-[10px] pl-4 w-[10px]">
                        <input type="checkbox" className="accent-yellow-300" />
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        <img
                          className="w-10 h-10 rounded border border-[#0000001c]"
                          src={item.image}
                          alt=""
                        />
                      </td>
                      <td
                        onClick={() => selectHandler(item.id)}
                        className="px-4 py-[18px] text-black text-sm cursor-pointer line-clamp-2"
                      >
                        {item.title}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                         <Badge text={item.status} />
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
                        ${item.price.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
        <div className="flex justify-between items-center py-6 px-4">
          <p className="text-[#475569] text-sm">
            Showing {10} of {100} results
          </p>
          <div className="flex">
            <button
              onClick={() => paginateHandler("decrement")}
              className="border p-2"
            >
              <img src={arrowLeft} alt="" />
            </button>
            <button
              onClick={() => paginateHandler("increment")}
              className="border p-2"
            >
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Table;
