import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import UserDetails from "./UserDetails";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  const handleFind = async (e) => {
    const response = await axios.get(
      `http://localhost:3000/api/v1/user/bulk?filter=${e.target.value}`
    );
    console.log(response.data.user);
    setUsers(response.data.user);
  };
  // useEffect(() => {
  //   const response = axios.get(
  //     `http://localhost:3000/api/v1/user/bulk?filter=${name}`
  //   );

  //   console.log(response.data.user);
  //   setUsers(response.data.user);
  //   setDataPresent(true);
  // }, [name, data]);
  return (
    <div className="mx-10 font-mono font-bold">
      <h1 className="text-4xl mt-10">Users</h1>
      <input
        type="text"
        placeholder="Search Users..."
        className="w-full mt-3 p-2 border-2 border-gray-950 rounded-lg"
        onChange={(e) => handleFind(e)}
      />
      {users.map((user, index) => (
        <UserDetails data={user} key={index} />
      ))}
    </div>
  );
};

export default User;
