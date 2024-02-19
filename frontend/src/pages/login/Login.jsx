import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async e => {
    e.preventDefault();
    await login(userName, password);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-md relative flex-col p-8 rounded-2xl text-black bg-white">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-[#7747ff]">Connect.Chat</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Log in to your account
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="block relative">
            <label
              htmlFor="username"
              className="block text-gray-600 cursor-pointer text-sm leading-[140%] font-normal mb-2"
            >
              Username
            </label>
            <input
              placeholder="shubham_mishra"
              type="text"
              id="username"
              value={userName}
              onChange={e => setUsername(e.target.value)}
              className="rounded border bg-transparent border-gray-500 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-pointer text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              placeholder="&ascbja-!"
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="rounded border bg-transparent border-gray-500 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="divider h-1" />
          <button
            disabled={loading}
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            {loading ? <span className="loading loading-spinner" /> : "Login"}
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Don&apos;t have an account yet?{" "}
          <a className="text-sm text-[#7747ff]" href="/signup">
            Sign up for free!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
