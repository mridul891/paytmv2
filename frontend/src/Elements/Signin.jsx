import { BottomWarning } from "@/Component/BottomWarning";
import { Button } from "@/Component/Button";
import Heading from "@/Component/Heading";
import InputBox from "@/Component/InputBox";
import Subheading from "@/Component/Subheading";
import axios from "axios";
import { useState } from "react";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/v1/user/signin",
      {
        username,
        password,
      }
    );
    console.log(response);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center flex-col w-[80vw]  h-[100vh] font-semibold font-mono lg:w-[30vw]">
        <Heading label={"Sign In"} />
        <Subheading label={"Enter your credentials to access your account"} />
        <InputBox
          label={"username"}
          placeholder={"johnDoe@gmail.com"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputBox
          label={"password"}
          placeholder={123456}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="pt-4">
          <Button label={"Sign In"} onClick={handleSubmit} />
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
