import React from "react";

const ConversationList = () => {
  return (
    <>
      <div className="flex items-center gap-3 w-full text-xl cursor-pointer px-4 py-2 hover:bg-gradient-to-r from-indigo-900 to-purple-800 rounded-xl">
        <div className="avatar online w-10">
          <div className="w-24 rounded-full">
            <img src="https://avatar.iran.liara.run/public/boy?username=shubham_mishra" />
          </div>
        </div>
        <div className="flex justify-between gap-3 w-full">
          <p className="text-sm md:text-xl flex items-center">Shubham mishra</p>
          <span>😊</span>
        </div>
      </div>
      <div className="divider my-0 h-1 py-2" />
    </>
  );
};

export default ConversationList;
