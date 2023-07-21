import { useFormik } from "formik";
import Input from "../UiElements/Input/Input";
import { changePassword } from "../../Util/ValidationSchema";
import Button from "../UiElements/Buttons/Button";
const NewPassword = () => {
  const resetForm = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: changePassword,
    onSubmit: (values) => {
      console.log(values);
      resetForm.resetForm();
    },
  });
  return (
    <div className="max-w-[30vw] flex flex-col gap-12">
      <div className="">
        <p className="text-white text-[52px] font-sora font-extrabold">
        keep your <br /> password secret
        </p>
        
      </div>
      <form className="flex flex-col gap-5" onSubmit={resetForm.handleSubmit}>
        <div className="relative">
          <Input
            name="password"
            label="New Password"
            placeholder="*****"
            change={resetForm.handleChange}
            blur={resetForm.handleBlur}
            value={resetForm.values.password}
            error={
              resetForm.errors.password && resetForm.touched.password
                ? resetForm.errors.password
                : null
            }
            type="password"
          />
        </div>
        <div className="relative">
          <Input
            name="confirmPassword"
            label="Confirm Password"
            placeholder="*****"
            change={resetForm.handleChange}
            blur={resetForm.handleBlur}
            value={resetForm.values.confirmPassword}
            error={
              resetForm.errors.confirmPassword &&
              resetForm.touched.confirmPassword
                ? resetForm.errors.confirmPassword
                : null
            }
            type="password"
          />
        </div>
        <div className="mt-5">
          <Button full className="w-full" type="primary">
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewPassword;
