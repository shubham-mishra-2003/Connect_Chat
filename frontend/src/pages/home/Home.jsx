import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/Message/MessageContainer";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
