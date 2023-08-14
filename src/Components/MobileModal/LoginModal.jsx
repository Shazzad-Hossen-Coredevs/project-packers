import google from "../../assets/icons/google-icon.svg";
import apple from "../../assets/icons/apple.svg";
import facebook from "../../assets/icons/facebook.svg";
import Button from "../UiElements/Buttons/Button";
import { useState } from "react";
import Input from "../UiElements/Input/Input";
import { useFormik } from "formik";
import { loginSchema } from "../../Util/ValidationSchema";
import { postApi } from "../../Util/apiCall";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userSignin } from "../../Store/userSlice";

const LoginModal = ({ show, onClose }) => {
  const [screen, setScreen] = useState([
    "account",
    "login",
    "signup",
    "otp",
    "newPassword",
  ]);
  const dispatch = useDispatch();
  const [activeScreen, setActiveScreen] = useState("login");

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      postApi("/user/login", values).then((res) => {
        if (res.status === 200) {
          dispatch(userSignin(res.data));
          loginForm.resetForm();
          toast.success("Login Successful", {
            style: {
              padding: "16px",
              color: "#0D3D4B",
              backgroundColor: "#F2C852",
            },
            iconTheme: {
              primary: "#198754",
              secondary: "#FFFAEE",
            },
          });
          setTimeout(() => {
            // navigate("/");
          }, 2000);
        } else {
          toast.error(res.data, {
            style: {
              padding: "16px",
              color: "#0D3D4B",
              backgroundColor: "#F2C852",
            },
            iconTheme: {
              primary: "#FF0000",
              secondary: "#FFFAEE",
            },
          });
        }
      });
    },
  });

  const closeHandler = () => {
    setActiveScreen("account");
    onClose();
  };
  if (show) {
    return (
      <div className=" fixed bottom-0 top-0 left-0 right-0 bg-[#03182ACC] z-50 ">
        <div className="absolute bottom-0 left-0 right-0 bg-secondary rounded-t-xl py-5 px-[30px]">
          <div className="grid gap-8">
            {activeScreen === "account" && (
              <>
                <div className="grid grid-cols-3">
                  <div className="flex justify-start items-center"></div>
                  <div className="text-center text-2xl text-white font-bold">
                    Account
                  </div>
                  <div className="flex justify-end items-center">
                    <button onClick={closeHandler}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M15.8334 4.16699L4.16675 15.8337"
                          stroke="white"
                          strokeOpacity="0.65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.16675 4.16699L15.8334 15.8337"
                          stroke="white"
                          strokeOpacity="0.65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex gap-5 justify-center">
                  <img
                    className="bg-white p-5 rounded-full"
                    src={google}
                    alt=""
                  />
                  <img
                    className="bg-white p-5 rounded-full"
                    src={facebook}
                    alt=""
                  />
                  <img
                    className="bg-white p-5 rounded-full"
                    src={apple}
                    alt=""
                  />
                </div>
                <div className="grid gap-5 text-sm text-white">
                  <p className="text-center">or use your email</p>
                  <Button
                    onClick={() => setActiveScreen("signup")}
                    type="primary"
                  >
                    Sign Up
                  </Button>
                  <Button onClick={() => setActiveScreen("login")} type="light">
                    Login
                  </Button>
                </div>
                <div className="text-center text-white text-xs">
                  Project Packers @2023
                </div>
              </>
            )}
            {activeScreen === "login" && (
              <>
                <div className="grid grid-cols-3">
                  <div className="flex justify-start items-center cursor-pointer">
                    <div
                      onClick={() => setActiveScreen("account")}
                      className=""
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16675 10.0002L16.6667 10"
                          stroke="white"
                          strokeOpacity="0.65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.49993 5.83301L3.92253 9.41042C3.64474 9.68817 3.50586 9.82709 3.50586 9.99967C3.50586 10.1723 3.64474 10.3112 3.92253 10.5889L7.49993 14.1663"
                          stroke="white"
                          strokeOpacity="0.65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center text-2xl text-white font-bold">
                    Login
                  </div>
                  <div className="flex justify-end items-center">
                    <button onClick={closeHandler}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M15.8334 4.16699L4.16675 15.8337"
                          stroke="white"
                          strokeOpacity="0.65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.16675 4.16699L15.8334 15.8337"
                          stroke="white"
                          strokeOpacity="0.65"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="grid gap-5">
                  <Input type="email" placeholder="Enter your email address" />
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div className="text-center text-white text-xs">
                  Don't have an Account?{" "}
                  <span className="text-primary underline">Sign Up</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default LoginModal;
