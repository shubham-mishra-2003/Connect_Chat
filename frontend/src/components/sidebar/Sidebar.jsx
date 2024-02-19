import ConversationListContainer from "./ConversationListContainer";
import LogoutButton from "./LogoutButton";
import SearchBar from "./SearchBar";
import { useAuthContext } from "../../context/Authcontext";

const Sidebar = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="w-1/3 hidden md:flex flex-col">
      <div className="flex justify-between items-center p-4 w-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 shadow-2xl rounded-b-xl border-b-2">
        <div className="w-12">
          <img src={authUser.profilePhoto} />
        </div>
        <SearchBar />
      </div>
      <ConversationListContainer />
      <div className="divider" />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
