import SearchBar from "./Searchbar";
import LogoutButton from "./LogoutButton";
import ConversationsContainer from "./ConversationsContainer";

const MobileSidebar = () => {
  return (
    <div className="h-full md:hidden p-3 flex flex-col justify-center items-center bg-gradient-to-r from-indigo-900 to-purple-900">
      <SearchBar />
      <div className="divider py-0" />
      <div className="overflow-auto w-72 scrollbar-hide">
        <ConversationsContainer />
      </div>
      <div className="divider p-0" />
      <LogoutButton />
    </div>
  );
};

export default MobileSidebar;
