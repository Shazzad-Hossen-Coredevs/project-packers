
import { useFormik } from "formik";
import Input from "../UiElements/Input/Input";
import { emailSchema } from "../../Util/ValidationSchema";
import Button from "../UiElements/Buttons/Button";


const Account = () => {
    const emailForm = useFormik({
        initialValues: {
          email: "",
        },
        validationSchema: emailSchema,
        onSubmit: (values) => {
          console.log(values);
          emailForm.resetForm();
        },
      });
    return (
        <div className="max-w-[30vw] flex flex-col gap-12">
          <div className="">
            <p className="text-white text-[52px] font-sora font-extrabold">
              Account Recovery
            </p>
            <p className="font-sans text-lg font-medium text-[#ffffffb3]">
              Enter the email address or phone number associated with your
              account, and we will email you a link to reset your password.
            </p>
          </div>
          <form
            className="flex flex-col gap-9"
            onSubmit={emailForm.handleSubmit}
          >
            <div className="relative">
              <Input
                name="email"
                label="Email or Phone Number"
                placeholder="Enter your email address or phone number"
                change={emailForm.handleChange}
                blur={emailForm.handleBlur}
                value={emailForm.values.email}
                error={(emailForm.errors.email && emailForm.touched.email) ? emailForm.errors.email : null}
                type="email"
              />
            </div>
            <Button full className="w-full" type="primary">
              Reset Password
            </Button>
          </form>
        </div>
    );
};

export default Account;