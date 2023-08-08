/**
 * @params status => open || close || pending
 * @params type =>  account || payment || refund || order
 * @params id => chat id
 * @params message => message
 *
 *
 * @returns Chat Card JSX Component
 */
const styles = {
  open: "bg-green-400",
  close: "bg-red-400",
  pending: "bg-yellow-400",
};
const ChatCard = ({ onClick, active, status, type, id, message }) => {
  return (
    <div
      onClick={() => onClick(id, active)}
      className={`p-3 border-[#0000001c] border-b cursor-pointer hover:bg-[#3b3b3b10]  ${
        active == id ? "border-l-2 border-primary" : "border-l-2 border-white"
      }`}
    >
      <div className="flex gap-2 items-center">
        <span className={`h-2 w-2 rounded-full ${styles[status]}`}></span>
        <p className="text-[#475569] font-medium first-letter:uppercase">
          {type || "No Data"}
        </p>
      </div>
      <p className="font-medium   ">Order Id #{id}</p>
      <p className="text-[#475569] line-clamp-2">{message}</p>
    </div>
  );
};

export default ChatCard;
