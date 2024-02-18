import MobileSidebar from "../Sidebar/MobileSidebar";

const MessageNav = () => {
  return (
    <div className="flex justify-between items-center p-4 px-5 w-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 shadow-xl border-b-2 rounded-b-xl">
      <div className="flex gap-3 items-center">
        <div className="avatar w-10 online">
          <div className="w-24 rounded-full">
            <img src="https://avatar.iran.liara.run/public/girl?username=suman" />
          </div>
        </div>
        <p className="font-bold text-xl">shushant mishra</p>
      </div>
      <MobileSidebar />
    </div>
  );
};

export default MessageNav;
