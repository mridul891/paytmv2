import axios from "axios";
import { useEffect, useState } from "react";
import Historydetails from "./Historydetails";
const History = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("paytmtoken");
    axios
      .get("http://localhost:3000/api/v1/history/history", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setTransaction(res.data.response);
      });
  }, []);

  return (
    <div className="mx-10 mt-5 font-mono font-bold">
      <h1 className="text-4xl mt-10">Transactions</h1>
      <div className="mt-6">
        <div className=" flex justify-between text-3xl mb-10 items-center">
          <h1>S.No</h1>
          <h1>Name</h1>
          <h2>Amount</h2>
        </div>
        {transaction.map((el, index) => (
          <div key={index} className="flex justify-between text-2xl">
            <Historydetails el={el} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
