import google from "../../assets/icons/google-icon.svg";
import apple from "../../assets/icons/apple.svg";
import facebook from "../../assets/icons/facebook.svg";
import Button from "../UiElements/Buttons/Button";
import { useState } from "react";
import Input from "../UiElements/Input/Input";
import { useFormik } from "formik";
import {
  emailSchema,
  loginSchema,
  signupSchema,
} from "../../Util/ValidationSchema";
import { postApi } from "../../Util/apiCall";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userSignin } from "../../Store/userSlice";
import CountryCodeSelector from "../UiElements/CountryCodeSelectior/CountryCodeSelector";
const LoginModal = ({ show, onClose }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [screen, setScreen] = useState([
    "account",
    "login",
    "signup",
    "otp",
    "newPassword",
    "reset",
  ]);
  const [conutryCode, setCountryCode] = useState(null);
  const dispatch = useDispatch();
  const [activeScreen, setActiveScreen] = useState("account");
  const codeGetter = (v) => {
    setCountryCode(v);
    return 0;
  };
  const emailForm = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      setIsSubmit(true);
      console.log(values);
      //   postApi("/user/otp", { ...values }).then((res) => {
      //     getResponse({ component: "otp", ...res, ...values });
      //   }).finally(()=>{

      //     setIsSubmit(false)
      //     emailForm.resetForm();
      //   });
    },
  });
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      postApi("/user/login", values).then((res) => {
        if (res.status === 200) {
          dispatch(userSignin(res.data));
          loginForm.resetForm();
          toast.success("Login Successful", {
            style: {
              padding: "16px",
              color: "#0D3D4B",
              backgroundColor: "#F2C852",
              zIndex: 60,
            },
            iconTheme: {
              primary: "#198754",
              secondary: "#FFFAEE",
            },
          });
          onClose();
        } else {
          toast.error(res.data, {
            style: {
              padding: "16px",
              color: "#0D3D4B",
              backgroundColor: "#F2C852",
              zIndex: 60,
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

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      terms: false,
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      const data = { ...values, phone: conutryCode + values.phone };
      delete data.terms;
      delete data.remember;
      postApi("/user", data).then((res) => {
        if (res?.status === 200) {
          toast.success("Sign Up successfull. Now you can login .", {
            style: {
              border: "1px solid #0D3D4B",
              padding: "16px",
              color: "#0D3D4B",
              backgroundColor: "#F2C852",
            },
            iconTheme: {
              primary: "#198754",
              secondary: "#FFFAEE",
            },
          });
          //   navigate("/login");
        } else if (res.status === 400) {
          signupForm.setFieldError("email", res.data);
        } else {
          toast.error(res.data, {
            style: {
              border: "1px solid #0D3D4B",
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

      // signupForm.resetForm();
    },
  });
  const closeHandler = () => {
    setActiveScreen("account");
    onClose();
  };
  if (show) {
    return (
      <div className=" fixed bottom-0 top-0 left-0 right-0 bg-[#03182ACC] z-[50] ">
        <div className="absolute bottom-0 left-0 right-0 bg-secondary rounded-t-xl py-5 px-[30px]">
          <div className="grid gap-8">
            {/* First Section */}
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
            {/* Login */}
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
                <form onSubmit={loginForm.handleSubmit} className="">
                  <div className="grid gap-5">
                    <Input
                      type="email"
                      name="email"
                      blur={loginForm.handleBlur}
                      error={
                        loginForm.touched.email && loginForm.errors.email
                          ? loginForm.errors.email
                          : null
                      }
                      change={loginForm.handleChange}
                      value={loginForm.values.email}
                      label="Email Address"
                      placeholder="Enter your email address"
                    />
                    <Input
                      name="password"
                      type="password"
                      blur={loginForm.handleBlur}
                      error={
                        loginForm.errors.password && loginForm.touched.password
                          ? loginForm.errors.password
                          : null
                      }
                      change={loginForm.handleChange}
                      value={loginForm.values.password}
                      label="Password"
                      placeholder="Enter your password"
                    />
                    <Button type="primary" buttonType="submit">
                      Login
                    </Button>
                    <p
                      onClick={() => setActiveScreen("reset")}
                      className="text-primary text-center"
                    >
                      Forgot your password?
                    </p>
                  </div>
                </form>

                <div className="text-center text-white text-xs">
                  Don't have an Account?{" "}
                  <span
                    onClick={() => setActiveScreen("signup")}
                    className="text-primary underline"
                  >
                    Sign Up
                  </span>
                </div>
              </>
            )}
            {/* Signup */}
            {activeScreen === "signup" && (
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
                    Sign Up
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
                <form onSubmit={signupForm.handleSubmit} className="">
                  <div className="grid gap-5">
                    <Input
                      type="text"
                      name="name"
                      blur={signupForm.handleBlur}
                      error={
                        signupForm.touched.name && signupForm.errors.name
                          ? signupForm.errors.name
                          : null
                      }
                      change={signupForm.handleChange}
                      value={signupForm.values.name}
                      label="Full Name"
                      placeholder="Enter your name"
                    />
                    <Input
                      name="email"
                      change={signupForm.handleChange}
                      blur={signupForm.handleBlur}
                      value={signupForm.values.email}
                      error={
                        signupForm.touched.email && signupForm.errors.email
                          ? signupForm.errors.email
                          : null
                      }
                      type="email"
                      placeholder="Enter your Email Address"
                      label="Email Address"
                    />
                    <Input
                      name="phone"
                      change={signupForm.handleChange}
                      blur={signupForm.handleBlur}
                      value={signupForm.values.phone}
                      error={
                        signupForm.touched.phone && signupForm.errors.phone
                          ? signupForm.errors.phone
                          : null
                      }
                      type="text"
                      placeholder="Enter Your Phone Number"
                      label="Phone Number"
                    >
                      <CountryCodeSelector code={codeGetter} />
                    </Input>
                    <Input
                      name="password"
                      change={signupForm.handleChange}
                      blur={signupForm.handleBlur}
                      value={signupForm.values.password}
                      error={
                        signupForm.errors.password &&
                        signupForm.touched.password
                          ? signupForm.errors.password
                          : null
                      }
                      type="password"
                      placeholder="Enter your Password"
                      label="Password"
                    />
                    <Button type="primary" buttonType="submit">
                      Sign Up
                    </Button>
                  </div>
                </form>

                <div className="text-center text-white text-xs">
                  Already have an Account?{" "}
                  <span
                    onClick={() => setActiveScreen("login")}
                    className="text-primary underline"
                  >
                    Login
                  </span>
                </div>
              </>
            )}
            {activeScreen === "reset" && (
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
                    Sign Up
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
                <form onSubmit={emailForm.handleSubmit} action="">
                  <div className="grid gap-5">
                    <Input
                      name="email"
                      label="Email or Phone Number"
                      placeholder="Enter your email address or phone number"
                      change={emailForm.handleChange}
                      blur={emailForm.handleBlur}
                      value={emailForm.values.email}
                      error={
                        emailForm.errors.email && emailForm.touched.email
                          ? emailForm.errors.email
                          : null
                      }
                      type="email"
                    />
                    <Button
                      full
                      className="w-full"
                      type="primary"
                      buttonType="submit"
                      disabled={isSubmit}
                    >
                      {isSubmit ? "Submitting..." : "Reset Password"}
                    </Button>
                  </div>
                </form>

                <div className="text-center text-white text-xs">
                  Already have an Account?{" "}
                  <span
                    onClick={() => setActiveScreen("login")}
                    className="text-primary underline"
                  >
                    Login
                  </span>
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
