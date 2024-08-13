import Appbar from "@/Component/Appbar";
import Balance from "./../Component/Balance";

const Dashboard = () => {
  return (
    <div className="mx-10 mt-4">
      <Appbar />
      <Balance label={"10000"} />
    </div>
  );
};

export default Dashboard;
