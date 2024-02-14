const Message = () => {
  return (
    <div className="">
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=shubham"
              alt="avatar in chat"
            />
          </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>
          Hi! what is up{" "}
        </div>
        <div className="chat-footer opacity-96 text-xs flex gap-1 items-center">
          07:03
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=shubham"
              alt="avatar in chat"
            />
          </div>
        </div>
        <div className={`chat-bubble text-black bg-white`}>Hi! what is up </div>
        <div className="chat-footer opacity-96 text-xs flex gap-1 items-center">
          07:03
        </div>
      </div>
    </div>
  );
};

export default Message;
