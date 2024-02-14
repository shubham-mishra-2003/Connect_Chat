import SearchBar from "./Searchbar";
import ConversationsContainer from "./ConversationsContainer";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="md:flex hidden w-1/3 flex-col p-4 flex-1">
      <SearchBar />
      <div className="divider py-0 px-3" />
      <ConversationsContainer />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
