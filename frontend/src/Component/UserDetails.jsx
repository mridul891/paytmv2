import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const UserDetails = ({ data }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("paytmtoken");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  const handleTransfer = () => {
    navigate("/send?id=" + data._id + "&name=" + data.firstName);
  };

  return (
    <div className="flex justify-between items-center mt-3" key={data._id}>
      <div className="flex mt-3 items-center">
        {/* Icons */}
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {data.firstName[0]}
          </div>
        </div>
        {/* Users Name */}
        <div className="flex flex-col justify-center h-ful">
          <div className="text-xl">
            {data.firstName} {data.lastName}
          </div>
        </div>
      </div>
      {/* Send Button */}
      <div className="flex flex-col justify-center font-bold">
        <Button label={"Send Money"} onClick={handleTransfer} />
      </div>
    </div>
  );
};

export default UserDetails;
