import { BottomWarning } from "@/Component/BottomWarning";
import { Button } from "@/Component/Button";
import Heading from "@/Component/Heading";
import InputBox from "@/Component/InputBox";
import Subheading from "@/Component/Subheading";

const Signin = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center flex-col w-[80vw]  h-[100vh] font-semibold font-mono lg:w-[30vw]">
        <Heading label={"Sign In"} />
        <Subheading label={"Enter your credentials to access your account"} />
        <InputBox label={"username"} placeholder={"johnDoe@gmail.com"} />
        <InputBox label={"password"} placeholder={123456} />
        <div className="pt-4">
          <Button label={"Sign In"} />
        </div>
        <BottomWarning
          label={"Don't Have an account?"}
          to={"/signup"}
          buttonText={"Sign up"}
        />
      </div>
    </div>
  );
};

export default Signin;
