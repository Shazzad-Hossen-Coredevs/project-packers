import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Secure = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
//   const dummyUser = true;
  if (user) {
    return <>{children}</>;
  } else {
    return navigate("/login");
  }
};

export default Secure;
