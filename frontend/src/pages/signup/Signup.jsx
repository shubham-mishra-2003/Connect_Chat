import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async e => {
    e.preventDefault();
    await signup(inputs);
  };

  const handleGender = gender => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="max-w-md w-full relative flex flex-col p-8 rounded-xl text-black bg-white">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome to <span className="text-[#7747ff]">Connect.Chat</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Signup your account
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="block relative">
            <label
              htmlFor="firstName"
              className="block text-gray-600 cursor-pointer text-sm leading-[140%] font-normal mb-2"
            >
              Full name
            </label>
            <input
              value={inputs.fullName}
              onChange={e => setInputs({ ...inputs, fullName: e.target.value })}
              placeholder="shubham mishra"
              type="text"
              id="fullname"
              className="rounded border bg-transparent border-gray-500 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            />
          </div>

          <div className="block relative">
            <label
              htmlFor="username"
              className="block text-gray-600 cursor-pointer text-sm leading-[140%] font-normal mb-2"
            >
              Username
            </label>
            <input
              value={inputs.userName}
              onChange={e => setInputs({ ...inputs, userName: e.target.value })}
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
              value={inputs.password}
              onChange={e => setInputs({ ...inputs, password: e.target.value })}
              placeholder="&ascbja-!"
              type="password"
              id="password"
              className="rounded border bg-transparent border-gray-500 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-pointer text-sm leading-[140%] font-normal mb-2"
            >
              Confirm Password
            </label>
            <input
              value={inputs.confirmPassword}
              onChange={e =>
                setInputs({ ...inputs, confirmPassword: e.target.value })}
              placeholder="&ascbja-!"
              type="password"
              id="confirmPassword"
              className="rounded border bg-transparent border-gray-500 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div>
            <p className="text-gray-600 text-sm">Select your Gender</p>
            <div className="flex items-center justify-center gap-3 mt-3">
              <input
                className="hidden"
                id="male"
                value="male"
                type="checkbox"
                checked={inputs.gender == "male"}
                onChange={() => handleGender("male")}
              />
              <label
                className="flex justify-center items-center w-fit h-fit bg-transparent p-3 rounded-[5px] gap-3 cursor-pointer transition-all duration-300 ease-out text-black malebutton"
                htmlFor="male"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 50 90"
                  className="w-2.5 rotate-[225deg]"
                >
                  <circle
                    strokeWidth="6"
                    stroke="#76E3FE"
                    r="22"
                    cy="25"
                    cx="25"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#76E3FE"
                    d="M25 47L25 87"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#76E3FE"
                    d="M25 86.6958L38.6958 73"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#76E3FE"
                    d="M11 73L24.6958 86.6958"
                  />
                </svg>Male
              </label>

              <input
                className="hidden"
                id="female"
                name="gender"
                type="checkbox"
                checked={inputs.gender == "female"}
                onChange={() => handleGender("female")}
              />
              <label
                className="flex justify-center items-center w-fit h-fit bg-transparent p-3 rounded-[5px] gap-3 cursor-pointer transition-all duration-300 ease-out text-black femalebutton"
                htmlFor="female"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 50 90"
                  className="w-2.5"
                >
                  <circle
                    strokeWidth="6"
                    stroke="#F57CB3"
                    r="22"
                    cy="25"
                    cx="25"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#F57CB3"
                    d="M25 47L25 87"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="6"
                    stroke="#F57CB3"
                    d="M12 73H38"
                  />
                </svg>Female
              </label>
            </div>
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
          Already have an account yet?{" "}
          <a className="text-sm text-[#7747ff]" href="/login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
