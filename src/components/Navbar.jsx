import { useState } from "react";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-black">Home</Link>
            <Link to="/about" className="hover:text-black">About</Link>
            <Link to="/how-it-works" className="hover:text-black">How It Works</Link>
            <Link to="/enrollment" className="hover:text-black">Enrollment</Link>
            <Link to="/state-compilance" className="hover:text-black">State Compilance</Link>
            <Link to="/courses" className="hover:text-black">Courses</Link>
            <Link to="/contact" className="hover:text-black">Contact</Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setShowLogin(true)}
              className="w-28 bg-[#0D428E] text-white py-2 rounded-full hover:bg-[#0a3573] transition"
            >
              Login
            </button>

            <button className="w-28 border border-[#0D428E] text-[#0D428E] py-2 rounded-full hover:bg-blue-50 transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-3 text-gray-700 font-medium">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/how-it-works" onClick={closeMenu}>How It Works</Link>
            <Link to="/enrollment" onClick={closeMenu}>Enrollment</Link>
            <Link to="/state-compilance" onClick={closeMenu}>State Compilance</Link>
            <Link to="/courses" onClick={closeMenu}>Courses</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </nav>

          {/* Mobile Buttons */}
          <div className="mt-4 flex flex-col space-y-3">
            <button
              onClick={() => setShowLogin(true)}
              className="w-full bg-[#0D428E] text-white py-2 rounded-full"
            >
              Login
            </button>

            <button className="w-full border border-[#0D428E] text-[#0D428E] py-2 rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl w-[90%] max-w-lg p-8 relative shadow-xl">

            {/* Close */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-5 text-gray-500 text-xl hover:text-black"
            >
              ×
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img src={logo} alt="logo" className="h-14" />
            </div>

            {/* Title */}
            <h2 className="text-center text-2xl font-semibold text-[#0D428E] mb-6">
              USER LOGIN
            </h2>

            {/* Form */}
            <form className="flex flex-col space-y-5">

              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email here"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D428E]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password here"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D428E]"
                />
              </div>

              <button
                type="submit"
                className="w-40 mx-auto bg-[#C6922E] text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                Login
              </button>
            </form>

            {/* Footer */}
            <p className="text-sm text-gray-500 text-center mt-6">
              If you haven't registered yet?{" "}
              <Link
                to="/register"
                className="text-[#0D428E] font-medium underline"
              >
                Register Now
              </Link>
            </p>

          </div>
        </div>
      )}
    </header>
  );
}