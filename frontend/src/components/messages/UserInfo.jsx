const UserInfo = () => {
  return (
    <div className="z-[-1] flex items-center w-full p-4 gap-4 fixed">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=shubham"
            alt="user avatar"
          />
        </div>
      </div>
      <p className="font-bold text-gray-100">Shubham mishra</p>
    </div>
  );
};

export default UserInfo;
