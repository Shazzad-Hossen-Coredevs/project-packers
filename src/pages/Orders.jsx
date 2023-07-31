import Breadcrumb from "../Components/UiElements/Breadcrumb/Breadcrumb";
import order from '../assets/icons/cd-order.svg'
import user from '../assets/icons/user-1.svg'
import logout from '../assets/icons/logout-01.svg'
import { useState } from "react";
const Orders = () => {
    const [active, setActive] = useState('orders')
  return (
    <>
      <Breadcrumb />
      <main>
        <div className="container mx-auto p-5 sm:p-0 overflow-hidden">
            <div className="grid grid-cols-5 sm:mt-[60px] gap-[30px]">
                <div className="col-span-5 sm:col-span-1">
                    <div className="p-5 flex flex-row sm:flex-col gap-5 border rounded-xl text-base font-semibold ">
                        <button onClick={()=> setActive('orders')} className={`py-3 px-8 flex  gap-[10px] w-full rounded-full hover:bg-primary ${active === "orders" ? "bg-primary": "bg-white border"}`}>
                            <img src={order} />
                            <span className="hidden sm:block">Orders</span>
                        </button>
                        <button onClick={()=> setActive('account')} className={`py-3 px-8 flex  gap-[10px] w-full rounded-full hover:bg-primary ${active === "account" ? "bg-primary": "bg-white border"}`}>
                            <img src={user} />
                            <span className="hidden sm:block">User Account</span>
                        </button>
                        <button className={`py-3 px-8 flex  gap-[10px] w-full rounded-full hover:bg-primary bg-white border`}>
                            <img src={logout} />
                            <span className="hidden sm:block">logout</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 sm:col-span-4">
                    {active === "orders" ? <div className="w-full overflow-x-auto">
                        <table className="w-full table-fixed text-left">
                            <thead className="text-xs text-[#475569] bg-[#F8FAFC] border-b w-full"> 
                                <tr className="">
                                    <th className="font-medium px-4 py-[10px] w-[100px]">Order ID</th>
                                    <th className="font-medium px-4 py-[10px] ">Date</th>
                                    <th className="font-medium px-4 py-[10px] ">Items</th>
                                    <th className="font-medium px-4 py-[10px] ">Total</th>
                                    <th className="font-medium px-4 py-[10px]">Status</th>
                                    <th className="font-medium px-4 py-[10px]">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#2050</td>
                                    <td className="w-fit">Today at 6:55am</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> : <p>Accounts</p>}
                </div>
            </div>
        </div>
      </main>
    </>
  );
};

export default Orders;
