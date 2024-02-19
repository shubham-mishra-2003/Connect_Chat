import { useEffect } from "react";
import useConversation from "../../store/useConversation";
import MobileSidebar from "../Sidebar/MobileSidebar";
import MessageInput from "./MessageInput";
import MessageBox from "./MessagesBox";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(
    () => {
      return () => setSelectedConversation(null);
    },
    [setSelectedConversation]
  );

  return (
    <div className="h-full flex flex-col md:w-2/3 w-full">
      {!selectedConversation
        ? <NoChatSelected />
        : <div className="flex h-full flex-col w-full overflow-auto">
            <div className="flex justify-between items-center p-4 px-5 w-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 shadow-xl border-b-2 rounded-b-xl">
              <div className="flex gap-3 items-center">
                <div className="avatar w-10 online">
                  <div className="w-24 rounded-full">
                    <img src={selectedConversation.profilePhoto} />
                  </div>
                </div>
                <p className="font-bold text-xl">
                  {selectedConversation.fullName}
                </p>
              </div>
              <MobileSidebar />
            </div>
            <MessageBox />
            <MessageInput />
          </div>}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40">
      <img src="/logo.png" className="rounded-2xl logoImg" />
      <div className="flex fixed top-5 right-5">
        <MobileSidebar />
      </div>
      <div className="py-10 flex flex-col items-center">
        <h1 className="md:text-4xl text-2xl text-center font-serif">
          Welcome to <span className="text-amber-200">Connect.Chat</span>👋🏻
        </h1>
        <h2 className="text-center text-lg md:text-2xl text-gray-300">
          Connect Yours on connect
        </h2>
        <h3 className="p-9 md:text-3xl text-center">
          Select a chat to start messaging
        </h3>
      </div>
    </div>
  );
};
