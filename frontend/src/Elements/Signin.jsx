import { BottomWarning } from "@/Component/BottomWarning";
import { Button } from "@/Component/Button";
import Heading from "@/Component/Heading";
import InputBox from "@/Component/InputBox";
import Subheading from "@/Component/Subheading";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("paytmtoken");
    if (token) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async () => {
    const response = await axios.post(
      "https://paytmv2.onrender.com/api/v1/user/signin",
      {
        username,
        password,
      }
    );
    localStorage.setItem("paytmtoken", response.data.token);
    navigate("/");
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
          type="text"
        />
        <InputBox
          label={"password"}
          placeholder={123456}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
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
