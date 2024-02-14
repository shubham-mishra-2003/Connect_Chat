const Conversations = () => {
  return (
    <>
      <div className="flex items-center gap-2 rounded-sm p-2 py-1 cursor-pointer hover:bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-800 transition-all duration-300">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=shubham"
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-100">Shubham mishra</p>
            <span className="text-xl">😊</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversations;
