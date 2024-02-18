import React from "react";
import Message from "./Message";

const MessageBox = () => {
  return (
    <div className="overflow-auto h-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 hide-scrollbar p-3">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default MessageBox;
