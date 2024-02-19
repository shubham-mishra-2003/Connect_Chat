import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmojis } from "../../utils/emojis";
import ConversationList from "./ConversationList";

const ConversationListContainer = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="flex flex-col overflow-auto hide-scrollbar mt-2 h-full">
      {conversations.map((conversation, idx) =>
        <ConversationList
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmojis()}
          lastIdx={idx === conversations.length - 1}
        />
      )}
      {loading ? <span className="loading loading-spinner" /> : null}
    </div>
  );
};

export default ConversationListContainer;
