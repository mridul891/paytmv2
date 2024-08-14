import { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [filter, setfilter] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => setUsers(response.data.user));
  }, [filter]);

  return (
    <div className="mx-10 font-mono font-bold">
      <h1 className="text-4xl mt-10">Users</h1>
      <input
        type="text"
        placeholder="Search Users..."
        className="w-full mt-3 p-2 border-2 border-gray-950 rounded-lg"
        onChange={(e) => setfilter(e.target.value)}
      />
      {users.map((user, index) => (
        <UserDetails data={user} key={index} />
      ))}
    </div>
  );
};

export default User;
