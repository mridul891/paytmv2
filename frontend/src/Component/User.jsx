import { useState } from "react";
import InputBox from "./InputBox";
import UserDetails from "./UserDetails";

const User = () => {
  const [users, setUsers] = useState([
    {
      firstName: "Mridul",
      lastName: "Pandey",
      _id: 1,
    },
  ]);
  return (
    <div className="mx-10 font-mono font-bold">
      <h1 className="text-4xl mt-10">Users</h1>
      <InputBox placeholder={"Search Users..."} />
      {users.map((user, index) => (
        <UserDetails data={user} key={index} />
      ))}
    </div>
  );
};

export default User;
