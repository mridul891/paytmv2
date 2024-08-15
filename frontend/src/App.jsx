import { Route, Routes } from "react-router-dom";
import Signup from "./Elements/Signup";
import Signin from "./Elements/Signin";
import Dashboard from "./Elements/Dashboard";
import AddBalance from "./Elements/AddBalance";
import { SendMoney } from "./Component/SendMoney";

import Error from "./Component/Error";
import Status from "./Component/Status";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/send" element={<SendMoney />} />
      <Route path="/addbalance" element={<AddBalance />} />
      <Route
        path="/success"
        element={<Status label={"Success"} logo={"✅"} />}
      />
      <Route path="/error" element={<Status label={"Error"} logo={"❌"} />} />
    </Routes>
  );
}

export default App;
