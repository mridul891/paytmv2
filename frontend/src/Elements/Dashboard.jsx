import Appbar from "@/Component/Appbar";
import Balance from "./../Component/Balance";
import User from "@/Component/User";

const Dashboard = () => {
  
  return (
    <div className="mx-10 mt-4">
      <Appbar />
      <Balance label={"10000"} />
      <User />
    </div>
  );
};

export default Dashboard;
