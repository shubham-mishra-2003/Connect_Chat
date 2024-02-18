import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchBar from "../Sidebar/SearchBar";
import ConversationListContainer from "../Sidebar/ConversationListContainer";
import LogoutButton from "../Sidebar/LogoutButton";


const MobileSidebar = () => {
  return (
    <div className="h-full md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <div className="md:hidden">
            <label className="burger" htmlFor="burger">
              <span />
              <span />
              <span />
            </label>
          </div>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="max-w-72 overflow-auto p-0 flex flex-col justify-center items-center hide-scrollbar bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80"
        >
          <div className="flex items-start w-full p-2">
            <SearchBar />
          </div>
          <div className="flex h-full overflow-auto w-full justify-center items-center hide-scrollbar">
            <ConversationListContainer />
          </div>
          <LogoutButton />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
