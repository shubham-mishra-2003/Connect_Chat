import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/Authcontext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="flex flex-col h-full">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;