// import MessageContainer from "../../components/messages/MessageContainer";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="fixed w-full h-full flex bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 overflow-hidden">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
