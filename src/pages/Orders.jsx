import Breadcrumb from "../Components/UiElements/Breadcrumb/Breadcrumb";
import Input from "../Components/UiElements/Input/Input";
import order from "../assets/icons/cd-order.svg";
import user from "../assets/icons/user-1.svg";
import logout from "../assets/icons/logout-01.svg";
import eye from "../assets/icons/eye.svg";
import { useState } from "react";
import Badge from "../Components/UiElements/Badge/Badge";
import Button from "../Components/UiElements/Buttons/Button";
import { useDispatch } from "react-redux";
import { userSignout } from "../Store/userSlice";
const Orders = () => {
  const [active, setActive] = useState("orders");
  const dispatch = useDispatch();
  return (
    <>
      <Breadcrumb />
      <main>
        <div className="container mx-auto p-5 sm:p-0 overflow-hidden">
          <div className="grid grid-cols-5 sm:mt-[60px] sm:mb-[160px] mb-5 gap-[30px]">
            <div className="col-span-5 sm:col-span-1">
              <div className="p-5 flex flex-row sm:flex-col gap-5 border rounded-xl text-base font-semibold ">
                <button
                  onClick={() => setActive("orders")}
                  className={`py-3 px-8 flex  gap-[10px] w-full rounded-full hover:bg-primary ${
                    active === "orders" ? "bg-primary" : "bg-white border"
                  }`}
                >
                  <img src={order} />
                  <span className="hidden sm:block">Orders</span>
                </button>
                <button
                  onClick={() => setActive("account")}
                  className={`py-3 px-8 flex  gap-[10px] w-full rounded-full hover:bg-primary ${
                    active === "account" ? "bg-primary" : "bg-white border"
                  }`}
                >
                  <img src={user} />
                  <span className="hidden sm:block">User Account</span>
                </button>
                <button
                  onClick={() => dispatch(userSignout())}
                  className={`py-3 px-8 flex  gap-[10px] w-full rounded-full hover:bg-primary bg-white border`}
                >
                  <img src={logout} />
                  <span className="hidden sm:block">logout</span>
                </button>
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4">
              {active === "orders" ? (
                <div className="w-full overflow-x-auto">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-[#475569]  bg-[#F8FAFC] font-medium border-b">
                        <tr>
                          <th scope="col" className="p-3 font-medium">
                            Order ID
                          </th>
                          <th scope="col" className="px-6 py-3 font-medium">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 font-medium">
                            Items
                          </th>
                          <th scope="col" className="px-6 py-3 font-medium">
                            Total
                          </th>
                          <th scope="col" className="px-6 py-3 font-medium">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 font-medium">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b text-sm text-black">
                          <th scope="row" className="p-3">
                            #2050
                          </th>
                          <td className="px-6 py-4">Today at 6:55am</td>
                          <td className="px-6 py-4">1 item</td>
                          <td className="px-6 py-4">$396.84</td>
                          <td className="px-6 py-4">
                            <Badge text="completed"  />
                          </td>
                          <td className="px-6 py-4">
                            <img
                              className="cursor-pointer"
                              onClick={() => console.log("first")}
                              src={eye}
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr className="border-b text-sm text-black">
                          <th scope="row" className="p-3">
                            #2050
                          </th>
                          <td className="px-6 py-4">Today at 6:55am</td>
                          <td className="px-6 py-4">1 item</td>
                          <td className="px-6 py-4">$396.84</td>
                          <td className="px-6 py-4">
                            <Badge text="paid"  />
                          </td>
                          <td className="px-6 py-4">
                            <img
                              className="cursor-pointer"
                              onClick={() => console.log("first")}
                              src={eye}
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr className="border-b text-sm text-black">
                          <th scope="row" className="p-3">
                            #2050
                          </th>
                          <td className="px-6 py-4">Today at 6:55am</td>
                          <td className="px-6 py-4">1 item</td>
                          <td className="px-6 py-4">$396.84</td>
                          <td className="px-6 py-4">
                            <Badge text="processing"  />
                          </td>
                          <td className="px-6 py-4">
                            <img
                              className="cursor-pointer"
                              onClick={() => console.log("first")}
                              src={eye}
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr className="border-b text-sm text-black">
                          <th scope="row" className="p-3">
                            #2050
                          </th>
                          <td className="px-6 py-4">Today at 6:55am</td>
                          <td className="px-6 py-4">1 item</td>
                          <td className="px-6 py-4">$396.84</td>
                          <td className="px-6 py-4">
                            <Badge text="shipping" />
                          </td>
                          <td className="px-6 py-4">
                            <img
                              className="cursor-pointer"
                              onClick={() => console.log("first")}
                              src={eye}
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr className="border-b text-sm text-black">
                          <th scope="row" className="p-3">
                            #2050
                          </th>
                          <td className="px-6 py-4">Today at 6:55am</td>
                          <td className="px-6 py-4">1 item</td>
                          <td className="px-6 py-4">$396.84</td>
                          <td className="px-6 py-4">
                            <Badge text="cancelled" />
                          </td>
                          <td className="px-6 py-4">
                            <img
                              className="cursor-pointer"
                              onClick={() => console.log("first")}
                              src={eye}
                              alt=""
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="max-w-[700px]">
                  <form className="grid gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        styles="primary"
                        type="text"
                        name="firstName"
                        label="First Name"
                        placeholder="Enter your First Name"
                        border
                      />
                      <Input
                        styles="primary"
                        type="text"
                        name="lastName"
                        label="Last Name"
                        placeholder="Enter your Last Name"
                        border
                      />
                    </div>
                    <Input
                      styles="primary"
                      type="email"
                      name="email"
                      label="Email Address"
                      placeholder="Enter your Email id"
                      border
                    />
                    <Input
                      styles="primary"
                      type="phone"
                      name="phone"
                      label="Phone Number"
                      placeholder="Enter your Phone Number"
                      border
                      required
                    />
                    <p className="text-secondary text-lg font-medium">
                      Password Change
                    </p>
                    <Input
                      styles="primary"
                      type="password"
                      name="currentPassword"
                      label="Current Password"
                      placeholder="Enter your current password"
                      border
                    />
                    <Input
                      styles="primary"
                      type="password"
                      name="newPassword"
                      label="New Password"
                      placeholder="Enter New password"
                      border
                    />
                    <Input
                      styles="primary"
                      type="password"
                      name="confirmPassword"
                      label="Confirm Password"
                      placeholder="Confirm new password"
                      border
                    />
                    <Button type="primary" buttonType="submit">
                      Save Change
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Orders;
