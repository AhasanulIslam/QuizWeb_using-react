import { BrowserRouter, Route, Routes } from "react-router-dom";
import Approve from "./component/Admin/AdminPanal.jsx/Approve";
import ApprovePage from "./component/Admin/AdminPanal.jsx/ApprovePage";
import QuizDetalis from "./component/Admin/AdminPanal.jsx/QuizDetalis";
import Reject from "./component/Admin/AdminPanal.jsx/Reject";
import StudentList from "./component/Admin/AdminPanal.jsx/StudentList";
import From from "./component/Admin/From";
import Login from "./component/Admin/Login";
import QuizFrom from "./component/Admin/Tutor.jsx/QuizFrom";
import Studentlist_tutor from "./component/Admin/Tutor.jsx/Studentlist_tutor";
import TutorList from "./component/Admin/Tutor.jsx/TutorList";
import Navber from "./component/Navber";
import CustomizedTables from "./component/Table";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <From /> */}
        {/* <Login /> */}
        <Routes>
          <Route path="/signup" element={<From />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/nav" element={<Navber />}></Route>
          <Route path="/approvepage" element={<ApprovePage />}></Route>
          <Route path="/aprrove" element={<Approve />}></Route>
          <Route path="/rej" element={<Reject />}></Route>
          <Route path="/av" element={<CustomizedTables />}></Route>
          <Route path="/tquizlist" element={<TutorList />}></Route>
          <Route path="/quizfm" element={<QuizFrom />}></Route>
          <Route path="/quizde" element={<QuizDetalis />}></Route>
          <Route path="/studentlist" element={<StudentList />}></Route>
          <Route path="/tutor_stulist" element={<Studentlist_tutor />}></Route>



        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
