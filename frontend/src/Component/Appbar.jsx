import axios from "axios";
import { useEffect, useState } from "react";

const Appbar = () => {
  const [firstName, setFirstName] = useState("adf");
  useEffect(() => {
    const token = localStorage.getItem("paytmtoken");
    axios
      .get("http://localhost:3000/api/v1/user/info", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setFirstName(res.data.account.firstName));
  }, []);
  return (
    <div className="flex justify-between items-center shadow px-10  rounded-lg py-3 font-mono text-2xl">
      <h1 className="font-bold">Paytm App</h1>
      <div className="flex justify-between items-center gap-6 font-semibold">
        <h3>Hello</h3>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {firstName[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
