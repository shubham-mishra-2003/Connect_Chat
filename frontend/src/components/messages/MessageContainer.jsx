import { useState } from "react";
import MobileSidebar from "../sidebar/MobileSidebar";
import UserInfo from "./UserInfo";
import MessageInput from "./MessageInput";
import MessageContent from "./MessageContent";

const MessageContainer = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="md:w-2/3 w-full">
      <UserInfo />
      {isMobileSidebarOpen && <MobileSidebar />}
      <div className="md:hidden absolute top-2 right-2 p-4">
        <label className="burger" htmlFor="burger">
          <input
            type="checkbox"
            id="burger"
            checked={isMobileSidebarOpen}
            onChange={toggleMobileSidebar}
          />
          <span />
          <span />
          <span />
        </label>
      </div>
      <div className="divider mt-[75px] py-0 px-3"></div>
      <MessageContent />
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
