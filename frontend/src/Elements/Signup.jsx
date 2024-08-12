import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const { register } = useForm();
  return (
    <div className="flex flex-col-reverse">
      <form>
        <h1 className="">Sign Up </h1>
        <p>
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
        <button>Sign up</button>
        <p>
          Already have an account? <Link to={"/signin"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
