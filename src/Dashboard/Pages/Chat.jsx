import { useState, useEffect } from "react";
import ChatCard from "../Components/UiElements/ChatCard/ChatCard";
import { chatCardData } from "../../Store/Data";
import ChatBubble from "../Components/UiElements/ChatBubble/ChatBubble";

const buttonStyle = {
  active: "bg-secondary text-white",
  deactive: "bg-white text-black",
};
const Chat = () => {
  const [activeStatusButton, setActiveStatusButton] = useState("all");
  const [chatCard, setChatCard] = useState(chatCardData);
  const [filteredData, setFilteredData] = useState(chatCard);
  const [supportType, setSupportType] = useState("all");
  const [supportData, setSupportData] = useState([]);
  const [activeChat, setActiveChat] = useState([]);

  useEffect(() => {
    if (supportType === "all") {
      setSupportData(chatCard);
    } else {
      const filterItem = chatCard.filter((item) => item.type === supportType);
      setSupportData(filterItem);
    }
  }, [supportType, chatCard]);

  useEffect(() => {
    if (activeStatusButton === "all") {
      setFilteredData(supportData);
    } else {
      const filterItem = supportData.filter(
        (item) => item.status === activeStatusButton
      );
      setFilteredData(filterItem);
    }
  }, [activeStatusButton, supportData]);

  const chatCardHandler = (element, active) => {
    console.log(element, active)
  }
  const clickHandler = (value) => {
    setActiveStatusButton(value);
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 hidden sm:grid gap-2 pt-5 px-5">
        <div className="border border-[#0000001c] text-sm rounded-md overflow-hidden flex">
          <button
            onClick={() => clickHandler("all")}
            className={`py-2 px-4 font-medium ${
              activeStatusButton === "all"
                ? buttonStyle["active"]
                : buttonStyle["deactive"]
            }`}
          >
            <div className=" flex gap-2 items-center">
              <span className="w-2 h-2  rounded-full bg-yellow-500"></span>
              <p className="">All</p>
            </div>
          </button>
          <button
            onClick={() => clickHandler("open")}
            className={`py-2 px-4 font-medium ${
              activeStatusButton === "open"
                ? buttonStyle["active"]
                : buttonStyle["deactive"]
            }`}
          >
            <div className=" flex gap-2 items-center">
              <span className="w-2 h-2  rounded-full bg-green-500"></span>
              <p className="">Open</p>
            </div>
          </button>
          <button
            onClick={() => clickHandler("close")}
            className={`py-2 px-4 font-medium ${
              activeStatusButton === "close"
                ? buttonStyle["active"]
                : buttonStyle["deactive"]
            }`}
          >
            <div className=" flex gap-2 items-center">
              <span className="w-2 h-2  rounded-full bg-red-500"></span>
              <p className="">Close</p>
            </div>
          </button>
          <div className="py-2 px-1   font-medium">
            <select
              onChange={(e) => setSupportType(e.target.value)}
              className=" bg-white outline-none" defaultValue="all"
            >
              <option value="all">
                Support Type
              </option>
              <option value="account">Account</option>
              <option value="order">Order</option>
              <option value="payment">Payment</option>
              <option value="Refund">Refund</option>
            </select>
          </div>
        </div>
        <div className="">
          <div className="overflow-hidden overflow-y-auto  h-[calc(100vh-140px)]">
            {filteredData.map((chat) => (
              <ChatCard
                onClick={chatCardHandler}
                active={activeChat.id}
                key={chat.id}
                status={chat.status}
                type={chat.type}
                id={chat.id}
                message={chat.message}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-9 bg-[#E2E8F0]">
        <div className="flex justify-between items-center px-8 py-3 shadow-sm">
          <div className="">
            <div className="flex gap-2 items-center">
              <span className={`h-2 w-2 rounded-full bg-green-600`}></span>
              <p className="text-[#475569] font-medium first-letter:uppercase">
                {"Refund"}
              </p>
            </div>
            <p className="text-sm font-medium">Order ID#123456</p>
          </div>
          <div className="">
            <select
              className="bg-transparent outline-none cursor-pointer"
              name=""
              id=""
            >
              <option value="open" selected>
                Open
              </option>
              <option value="close" selected>
                Close
              </option>
            </select>
          </div>
        </div>
        <div className="px-8 py-2 relative h-[calc(100vh-215px)]  w-full">
          <div className="h-full overflow-y-auto flex flex-col gap-12 pb-2">
            <ChatBubble
              type="customer"
              name="Floyd Miles"
              date="20 - 4 -2023"
              message="Hello World"
            />
            <ChatBubble
              type="staff"
              name="Floyd Miles"
              date="20 - 4 -2023"
              message="Hello World 2"
            />
            <ChatBubble
              type="customer"
              name="Floyd Miles"
              date="20 - 4 -2023"
              message="Hello World"
            />
            <ChatBubble
              type="customer"
              name="Floyd Miles"
              date="20 - 4 -2023"
              message="Hello World 2"
            />
            <ChatBubble
              type="customer"
              name="Floyd Miles"
              date="20 - 4 -2023"
              message="Hello World"
            />
            <ChatBubble
              type="staff"
              name="Floyd Miles"
              date="20 - 4 -2023"
              message="Hello World 2"
            />
            <ChatBubble
              type="customer"
              name="Floyd Miles"
              date="20 - 4 -2023"
              message="Hello World"
            />
            <ChatBubble
              type="staff"
              name="Floyd Miles"
              date="20 - 4 -2023"
              message="Hello World 2"
            />
          </div>
          <div className="p-3 border border-[#0000002a] rounded bg-white">
            <div className="w-full flex ">
              <input
                className="outline-none w-full"
                type="text"
                placeholder="Type text message"
              />
              <button className="text-secondary bg-primary font-bold rounded-full py-[14px] px-[40px]">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
