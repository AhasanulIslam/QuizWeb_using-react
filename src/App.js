import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Approve from "./component/Admin/AdminPanal.jsx/Approve";
import ApprovePage from "./component/Admin/AdminPanal.jsx/ApprovePage";
import Reject from "./component/Admin/AdminPanal.jsx/Reject";
import From from "./component/Admin/From";
import Login from "./component/Admin/Login";
import QuizFrom from "./component/Admin/Tutor.jsx/QuizFrom";
import TutorList from "./component/Admin/Tutor.jsx/TutorList";
import Navber from "./component/Navber";
import CustomizedTables from "./component/Table";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <From /> */}
        {/* <Login /> */}
        <Routes>
          <Route exact path="/signup" element={<From />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/nav" element={<Navber />}></Route>
          <Route exact path="/adv" element={<ApprovePage />}></Route>
          <Route exact path="/ap" element={<Approve />}></Route>
          <Route exact path="/rej" element={<Reject />}></Route>
          <Route exact path="/av" element={<CustomizedTables />}></Route>
          <Route exact path="/tlist" element={<TutorList />}></Route>
          <Route exact path="/qfm" element={<QuizFrom />}></Route>
          <Route exact path="/qfm" element={<QuizFrom />}></Route>



        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
