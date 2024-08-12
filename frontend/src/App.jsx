import { Route, Routes } from "react-router-dom";
import Signup from "./Elements/Signup";
import Signin from "./Elements/Signin";
import Dashboard from "./Elements/Dashboard";
import Send from "./Elements/Send";
import AddBalance from "./Elements/AddBalance";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/send" element={<Send />} />
      <Route path="/addbalance" element={<AddBalance />} />
    </Routes>
  );
}

export default App;
