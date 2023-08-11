import Input from "../UiElements/Input/Input";
import Button from "../UiElements/Buttons/Button";
const Otp = () => {
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
      <form className="flex flex-col gap-9" onSubmit={""}>
        <div className="relative flex gap-2">
          <Input
            name="email"
            placeholder="*"
            change={""}
            blur={""}
            max={1}
            // value={""}
            type="text"
          />
            <Input
            name="email"
            placeholder="*"
            change={""}
            blur={""}
            max={1}
            // value={""}
            type="text"
          />
            <Input
            name="email"
            placeholder="*"
            change={""}
            blur={""}
            max={1}
            // value={""}
            type="text"
          />
            <Input
            name="email"
            placeholder="*"
            change={""}
            blur={""}
            max={1}
            // value={""}
            type="text"
          />
          
        </div>
        <Button full className="w-full" type="primary">
         Verify Account
        </Button>
      </form>
    </div>
  );
};

export default Otp;
