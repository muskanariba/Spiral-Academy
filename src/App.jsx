import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Enrollment from "./pages/Enrollment";
import StateCompliance from "./pages/StateCompliance";

import Register from "./pages/Register";
import Courses from "./pages/Courses"
import GetInTouch from "./pages/GetInTouch";
import CoProgram from "./pages/CoProgram";

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
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;