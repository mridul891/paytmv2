import { Button } from "@/Component/Button";
import Heading from "../Component/Heading";
import Subheading from "../Component/Subheading";
import InputBox from "./../Component/InputBox";
import { BottomWarning } from "@/Component/BottomWarning";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center flex-col w-[50vw]  h-[100vh] font-semibold font-mono lg:w-[30vw]">
        <Heading label={"Sign up"} />
        <Subheading label={"Enter Your Information to create an account"} />
        <InputBox label={"firstName"} placeholder={"John"} />
        <InputBox label={"lastName"} placeholder={"Doe"} />
        <InputBox label={"username"} placeholder={"johnDoe@gmail.com"} />
        <InputBox label={"password"} placeholder={123456} />
        <div className="pt-4">
          <Button label={"Sign up"} />
        </div>
        <BottomWarning
          label={"Already Have an account?"}
          to={"/signin"}
          buttonText={"Sign in"}
        />
      </div>
    </div>
  );
};

export default SignUp;
