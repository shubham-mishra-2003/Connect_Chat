import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import { useEffect, useRef } from "react";
// import MessageSkeleton from "../Skeleton loader/MessageSkeleton"

const MessageBox = () => {
  const { message, loading } = useGetMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    }, 100);
  }, [message]);

  return (
    <div className="overflow-auto h-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 hide-scrollbar p-3">
      {loading && <div className="loading loading-spinner" />}
      {!loading &&
        message.length == 0 &&
        <p className="text-center text-gray-400">
          Send a message to start conversation
        </p>}
      {!loading &&
        message.length > 0 &&
        message.map(message =>
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        )}
    </div>
  );
};

export default MessageBox;
