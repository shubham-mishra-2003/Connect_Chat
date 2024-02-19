import { useAuthContext } from "../../context/Authcontext";
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime"

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();

  const fromMe = message.senderId === authUser._id;

  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const Profile = fromMe ? authUser.profilePhoto : selectedConversation?.profilePhoto;
  const BgColor = fromMe ? 'text-white bg-blue-500' : 'text-black bg-white';

  const formattedTime = extractTime(message.createdAt);

  return (
    <div>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
            src={Profile}
              alt="avatar in chat"
            />
          </div>
        </div>
        <div className={`chat-bubble ${BgColor}`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-96 text-xs flex gap-1 items-center">
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default Message;
