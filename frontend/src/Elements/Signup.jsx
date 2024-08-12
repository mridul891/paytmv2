import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const { register } = useForm();
  return (
    <div className="flex items-center flex-col justify-center border-2 border-lime-300 h-[100vh]">
      <form>
        <h1 className="text-[6rem] font-bold text-center">Sign Up </h1>
        <p className="">
          Enter Your information to create an <br /> account
        </p>
        <div className="flex flex-col">
          <label htmlFor="FirstName">First Name </label>
          <input {...register("FirstName")} />
          <label htmlFor="LastName">Last Name </label>
          <input {...register("LastName")} />
          <label htmlFor="Email">Email</label>
          <input {...register("Email")} type="email" />
          <label htmlFor="Password">Password</label>
          <input {...register("Password")} type="password" />
        </div>
        <Button>Submit</Button>
        <p>
          Already have an account? <Link to={"/signin"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
