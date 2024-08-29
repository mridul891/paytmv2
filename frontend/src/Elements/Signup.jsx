import { Button } from "@/Component/Button";
import Heading from "../Component/Heading";
import Subheading from "../Component/Subheading";
import InputBox from "./../Component/InputBox";
import { BottomWarning } from "@/Component/BottomWarning";
import { useState } from "react";
import axios from "axios";

import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await axios
      .post("https://paytmv2.onrender.com/api/v1/user/signup", {
        firstName,
        lastName,
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem("paytmtoken", res.data.token);
        navigate("/");
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center flex-col w-[50vw]  h-[100vh] font-semibold font-mono lg:w-[30vw]">
        <Heading label={"Sign up"} />
        <Subheading label={"Enter Your Information to create an account"} />
        <InputBox
          label={"firstName"}
          placeholder={"John"}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputBox
          label={"lastName"}
          placeholder={"Doe"}
          onChange={(e) => setLastName(e.target.value)}
        />
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
          <Button label={"Sign up"} onClick={handleSubmit} />
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
