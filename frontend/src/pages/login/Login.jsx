const Login = () => {
  return (
    <div className="max-w-md relative flex flex-col p-8 rounded-md text-black bg-white">
      <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Welcome back to <span className="text-[#7747ff]">Connect.Chat</span>
      </div>
      <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
        Log in to your account
      </div>
      <form className="flex flex-col gap-3">
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
            className="rounded border bg-transparent border-gray-500 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>
        <div className="divider h-1" />
        <button
          type="submit"
          className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
        >
          Submit
        </button>
      </form>
      <div className="text-sm text-center mt-[1.6rem]">
        Don&apos;t have an account yet?{" "}
        <a className="text-sm text-[#7747ff]" href="#">
          Sign up for free!
        </a>
      </div>
    </div>
  );
};

export default Login;
