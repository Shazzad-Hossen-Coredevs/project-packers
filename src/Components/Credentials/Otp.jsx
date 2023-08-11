import Input from "../UiElements/Input/Input";
import Button from "../UiElements/Buttons/Button";
import { useFormik } from "formik";
const Otp = () => {

  const otpForm = useFormik({
    initialValues: {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      
    },
    onSubmit: (values) => {
      const data = values.field1 + values.field2 + values.field3 + values.field4
      console.log(data);
    }
  })

  return (
    <div className="max-w-[30vw] flex flex-col gap-12">
      <div className="">
        <p className="text-white text-[52px] font-sora font-extrabold">
          Enter your OTP verification code
        </p>
        <p className="font-sans text-lg font-medium text-[#ffffffb3]">
          To get a verification code, first confirm the phone number you added
          to your account {"r••••••••@coredevs.ltd"}. Standard rates apply.
        </p>
      </div>
      <form className="flex flex-col gap-9" onSubmit={otpForm.handleSubmit}>
        <div className="relative flex gap-2">
          <Input
            name="field1"
            placeholder="*"
            change={otpForm.handleChange}
            blur={otpForm.handleBlur}
            max={1}
            value={otpForm.values.field1}
            type="text"
          />
          <Input
            name="field2"
            placeholder="*"
            change={otpForm.handleChange}
            blur={otpForm.handleBlur}
            max={1}
            value={otpForm.values.field2}
            type="text"
          />
          <Input
            name="field3"
            placeholder="*"
            change={otpForm.handleChange}
            blur={otpForm.handleBlur}
            max={1}
            value={otpForm.values.field3}
            type="text"
          />
          <Input
            name="field4"
            placeholder="*"
            change={otpForm.handleChange}
            blur={otpForm.handleBlur}
            max={1}
            value={otpForm.values.field4}
            type="text"
          />
            
          
        </div>
        <Button full className="w-full" type="primary" buttonType="submit">
         Verify Account
        </Button>
      </form>
    </div>
  );
};

export default Otp;
