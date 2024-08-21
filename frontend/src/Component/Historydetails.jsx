import { useEffect, useState } from "react";
import axios from "axios";

const Historydetails = ({ el }) => {
  const [firstName, setFirstName] = useState("");
  const code = el.reciever;

  useEffect(() => {
    const token = localStorage.getItem("paytmtoken");

    axios
      .post(
        "http://localhost:3000/api/v1/user/recieveinfo",
        { code },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => setFirstName(res.data.account.firstName));
  }, []);
  return (
    <div className="flex justify-between w-full">
      <div>{firstName}</div>
      <div>{el.amount}</div>
    </div>
  );
};

export default Historydetails;
