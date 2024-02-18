import ConversationList from "./ConversationList";

const ConversationListContainer = () => {
  return (
    <div className="flex flex-col overflow-auto hide-scrollbar mt-2 h-full">
      <ConversationList />
      <ConversationList />
      <ConversationList />
      <ConversationList />
    </div>
  );
};

export default ConversationListContainer;
