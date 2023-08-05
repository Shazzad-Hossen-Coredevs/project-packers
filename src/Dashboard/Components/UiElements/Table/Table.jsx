import Badge from "../../../../Components/UiElements/Badge/Badge";
import arrowRight from "../../../../assets/icons/cd-arrow-right-2.svg";
import edit from "../../../../assets/icons/cd-edit.svg";
import dlt from "../../../../assets/icons/cd-delete.svg";
import arrowLeft from "../../../../assets/icons/cd-arrow-left-1.svg";
const Table = ({ type, data = [] }) => {
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
  };

  const clickHandler = (value) => {
    console.log(value);
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
                        {item.id}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
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
              onClick={() => clickHandler("decrement")}
              className="border p-2"
            >
              <img src={arrowLeft} alt="" />
            </button>
            <button
              onClick={() => clickHandler("increment")}
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
                        {item.id}
                      </td>
                      <td className="px-4 py-[18px] text-black text-sm ">
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
              onClick={() => clickHandler("decrement")}
              className="border p-2"
            >
              <img src={arrowLeft} alt="" />
            </button>
            <button
              onClick={() => clickHandler("increment")}
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
