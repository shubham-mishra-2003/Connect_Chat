import useConversation from '../../store/useConversation'

const ConversationList = ({conversation, lastIdx, emoji}) => {

  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div className={`flex items-center gap-3 w-full text-xl cursor-pointer px-4 py-2 rounded-xl hover:bg-gradient-to-r from-indigo-900 to-purple-800 ${isSelected ? "bg-gradient-to-r from-indigo-900 to-purple-800" : ""}`} onClick={() => setSelectedConversation(conversation)}>
        <div className="avatar online w-10">
          <div className="w-24 rounded-full">
            <img src={conversation.profilePhoto} />
          </div>
        </div>
        <div className="flex justify-between gap-3 w-full">
          <p className="text-sm md:text-xl flex items-center">{conversation.fullName}</p>
          <span>{emoji}</span>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 h-1 py-2" />}
    </>
  );
};

export default ConversationList;
