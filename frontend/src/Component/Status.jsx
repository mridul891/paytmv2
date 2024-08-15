import { useNavigate } from "react-router-dom";
import "./Form.css";
const Status = ({ label, logo }) => {
  const navigate = useNavigate();

  setTimeout(function () {
    navigate("/");
  }, 5000);
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center text-center justify-center">
        <div>{logo}</div>
        <div>
          <p className="mainheading">{label} </p>
          <p className="paraHeading">
            Your request has been successfully submitted to us.
          </p>
        </div>
      </div>
      <div className="text-center">
        <p className="paraHeading2">
          Redirecting you to Homepage in <b className="text-black">5 seconds</b>
        </p>
      </div>
    </div>
  );
};

export default Status;
