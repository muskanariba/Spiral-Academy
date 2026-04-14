import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import StateCompliance from "./pages/StateCompliance";
import Register from "./pages/Register";
import Courses from "./pages/Courses"
import GetInTouch from "./pages/GetInTouch";
import CoProgram from "./pages/CoProgram";
import FAQ from "./pages/FAQ"
import HowItWorks from "./pages/HowItWorks";
import ParentPortal from "./pages/ParentPortal";
import Enrollment from "./pages/Enrollment";
import FloridaHomeSchool from "./pages/FolridaHomeSchool"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/state-compilance" element={<StateCompliance />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/contact" element={<GetInTouch />} />
        <Route path="/register" element={<Register />} />
        <Route path="/co-program" element={<CoProgram/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/florida-homeschool" element={<FloridaHomeSchool />} />
        <Route path="/parent-portal" element={<ParentPortal />} />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;