import { useEffect, useState } from "react";

const CartItem = ({data}) => {
    const [quantity, setQuantity] = useState(null)
    useEffect(()=>{
        setQuantity(data.quantity)
    },[])
  return (
    <tr className="border-b">
      <td>
        <div className="h-[60px] my-2 pr-2 flex gap-3 items-center">
          <img className="h-full" src={data?.image} alt="" />
          <div className="">
            <p className="sm:text-base text-sm font-normal wrap line-clamp-2 ">
              {data?.title}
            </p>
            <p className="sm:hidden block text-xs font-semibold">৳ {data?.price.toFixed(2)} tk</p>
          </div>
        </div>
      </td>
      <td>
      
        <div className="border-[#0000004d] border rounded-md flex items-center justify-center">
            <button className="px-2 pb-2 text-[#0000004d] text-3xl">-</button>
          <input className="text-center max-w-[30px] text-secondary font-semibold outline-none" value={quantity} type="number" />
          <button className="px-2 pb-2 text-[#0000004d] text-3xl h-full">+</button>
        </div>
      </td>
      <td className="hidden px-2 sm:table-cell">৳ {data?.price.toFixed(2)} tk</td>
    </tr>
  );
};

export default CartItem;
