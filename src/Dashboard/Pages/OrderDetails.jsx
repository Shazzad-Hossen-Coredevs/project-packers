import Heading from "../Components/UiElements/Heading/Heading";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { orderId } = useParams();
  return (
    <div className="px-5 h-full">
      <Heading type="navigate" title={`#${orderId}`}></Heading>
      Order Details
    </div>
  );
};

export default OrderDetails;
