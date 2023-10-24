import "./App.css";
import Sidebar from "./Components/Sidebar/index";
import SignUp from "./Components/SignUp/index";
import Login from "./Components/Login/index";
import Forgate from "./Components/Forgate/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sidebar" element={<Sidebar />}></Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Forgate" element={<Forgate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
