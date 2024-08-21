import Appbar from "@/Component/Appbar";
import Balance from "./../Component/Balance";
import User from "@/Component/User";
import History from "@/Component/History";

const Dashboard = () => {
  return (
    <div className="mx-10 mt-4">
      <Appbar />
      <Balance />
      <User />
      <History />
    </div>
  );
};

export default Dashboard;
