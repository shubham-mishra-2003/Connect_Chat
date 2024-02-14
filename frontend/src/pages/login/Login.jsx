import React from "react";
import Input from "@mui/joy/Input";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-w-96 mx-auto">
      <div className="w-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-gray-100 border-4 p-6 rounded-xl shadow-xl">
        <h1 className="italic text-white text-center font-bold text-3xl">
          Login <span className="text-[#00aff0]"> Connect.Chat</span>
        </h1>

        <form>
          <div className="mt-4">
            <label className="label p-2">
              <span className="text-xl text-white label-text">Username</span>
            </label>
            <Input placeholder="Enter username" size="md" variant="outlined" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-xl text-white label-text">Password</span>
            </label>
            <Input placeholder="Enter password" size="md" variant="outlined" />
          </div>
          <div className="w-full flex justify-center mt-5">
            <button className="button">Login</button>
          </div>
          <p className="text-[15px] text-white mt-4 inline-block">
            Don&apos;t have an account ? <a
              href="#"
              className="hover:text-yellow-400"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
