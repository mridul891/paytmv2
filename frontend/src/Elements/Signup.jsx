import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const SignUp = () => {
  const form = useForm();

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex justify-center items-center h-[100vh] font-semibold ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          {/* First Name */}
          <FormField
            control={form.control}
            name="FirstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Mridul" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Last Name */}
          <FormField
            control={form.control}
            name="LastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold">LastName</FormLabel>
                <FormControl>
                  <Input placeholder="Pandey" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndoe@gmail.com"
                    {...field}
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Password */}
          <FormField
            control={form.control}
            name="Password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold">Password</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Sign Up</Button>
          <p className="font-bold md:text-2xl lg:text-2xl">
            Already Have an account?{" "}
            <Link to={"/signin"}>
              <u>Login</u>
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
