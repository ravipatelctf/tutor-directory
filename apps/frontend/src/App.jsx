import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import AddNewTutor from "./pages/AddNewTutor";
import LandingPage from "./pages/LandingPage";
import Tutors from "./pages/Tutors";

export default function App() {

  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tutors" element={<Tutors />}/>
            <Route path="/register-as-a-tutor" element={<AddNewTutor />} />
        </Routes>
    </Router>
    <ToastContainer position="top-left" autoClose={3000} />
    </>
  );
}
