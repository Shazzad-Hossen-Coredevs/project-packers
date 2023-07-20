import Input from "../Components/UiElements/Input/Input";
import { useFormik } from "formik";
import { loginSchema } from "../Util/ValidationSchema";
import { Link } from "react-router-dom";
import Button from "../Components/UiElements/Buttons/Button";
import google from "../assets/icons/google-icon.svg";
import facebook from "../assets/icons/facebook.svg";
import apple from "../assets/icons/apple.svg";
const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      loginForm.resetForm();
    },
  });
  return (
    <div className="bg-secondary pt-[10vh] pb-[15vh]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 relative z-20 justify-center divide-x divide-[#ffffff1a] flex-wrap">
        <div className="max-w-[30vw]">
          <p className="text-white text-[52px] font-sora font-extrabold">
            Welcome Back
          </p>
          <form
            className="flex flex-col gap-5"
            onSubmit={loginForm.handleSubmit}
          >
            <div className="relative">
              <Input
                name="email"
                change={loginForm.handleChange}
                blur={loginForm.handleBlur}
                value={loginForm.values.email}
                error={loginForm.errors.email && loginForm.touched.email}
                type="email"
                placeholder="Enter your Email Address"
                label="Email Address/ Phone number"
              />
              {loginForm.errors.email && loginForm.touched.email ? (
                <div className="flex absolute right-0 -bottom-8 gap-2 bg-red-600 items-center py-1 px-2 rounded-full w-fit">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18ZM9 8.9996C9 9.55188 9.44772 9.9996 10 9.9996C10.5523 9.9996 11 9.55188 11 8.9996V6.9996C11 6.44732 10.5523 5.9996 10 5.9996C9.44772 5.9996 9 6.44732 9 6.9996V8.9996ZM9 12.9996C9 13.5519 9.44772 13.9996 10 13.9996C10.5523 13.9996 11 13.5519 11 12.9996C11 12.4473 10.5523 11.9996 10 11.9996C9.44772 11.9996 9 12.4473 9 12.9996Z"
                      fill="white"
                    />
                  </svg>

                  <span className=" text-white font-sans text-xs font-semibold">
                    {loginForm.errors.email}
                  </span>
                </div>
              ) : null}
            </div>
            <div className="relative">
              <Input
                name="password"
                change={loginForm.handleChange}
                blur={loginForm.handleBlur}
                value={loginForm.values.password}
                error={loginForm.errors.password && loginForm.touched.password}
                type="password"
                placeholder="Enter your Password"
                label="Password"
              />
              {loginForm.errors.password && loginForm.touched.password ? (
                <div className="flex absolute right-0 -bottom-8 gap-2 bg-red-600 items-center py-1 px-2 rounded-full w-fit">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18ZM9 8.9996C9 9.55188 9.44772 9.9996 10 9.9996C10.5523 9.9996 11 9.55188 11 8.9996V6.9996C11 6.44732 10.5523 5.9996 10 5.9996C9.44772 5.9996 9 6.44732 9 6.9996V8.9996ZM9 12.9996C9 13.5519 9.44772 13.9996 10 13.9996C10.5523 13.9996 11 13.5519 11 12.9996C11 12.4473 10.5523 11.9996 10 11.9996C9.44772 11.9996 9 12.4473 9 12.9996Z"
                      fill="white"
                    />
                  </svg>

                  <span className=" text-white font-sans text-xs font-semibold">
                    {loginForm.errors.password}
                  </span>
                </div>
              ) : null}
            </div>
            <div className="flex justify-between">
              <div className="font-sans text-base ">
                <input
                  type="checkbox"
                  name="remember"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.remember}
                  className="w-4 h-4 text-yellow-400 bg-transparent border-white rounded"
                />
                <label className="text-white pl-2">Remember me</label>
              </div>
              <Link className="text-primary" to="/">
                Forgot Password?
              </Link>
            </div>
            <div className="flex  gap-2 mt-12">
              <span className="p-[11px] cursor-pointer bg-white rounded-full shrink-0">
                <img src={google} alt="" />
              </span>
              <span className="p-[11px] cursor-pointer bg-white rounded-full shrink-0">
                <img src={facebook} alt="" />
              </span>
              <span className="p-[11px] cursor-pointer bg-white rounded-full shrink-0">
                <img src={apple} alt="" />
              </span>
              <Button full className="w-full" type="primary">
                hello
              </Button>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-5 w-full h-full justify-center items-end">
          <div className="max-w-[490px]">
            <p className="text-[24px] font-sans font-medium text-white">
              Log in to access your Project Packers Platform for order your
              products from any USA website.
            </p>
            <div className="">
              <span className="text-[#ffffffb3] font-sans text-base font-normal">
                Don’t have an account yet?
                <Link className="text-primary underline" to="/signup">
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
