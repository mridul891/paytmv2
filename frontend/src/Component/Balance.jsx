import axios from "axios";
import { useEffect, useState } from "react";

const Balance = ({ label }) => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem("paytmtoken");
    axios
      .get("https://paytmv2.onrender.com/api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setBalance(res.data.balance));
  }, []);
  return (
    <div className="font-mono font-bold text-3xl pt-6 px-10">
      <p>Your Balance : Rs {balance}</p>
    </div>
  );
};

export default Balance;
