import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-7 text-gray-700 font-medium text-[15px]">

            <Link to="/" className="hover:text-[#0D428E] transition">
              Home
            </Link>

            <Link to="/about" className="hover:text-[#0D428E] transition">
              About
            </Link>

            {/* Programs Dropdown */}
            <div className="relative group">
              <button className="hover:text-[#0D428E] transition flex items-center gap-1">
                Programs ▾
              </button>

              <div className="absolute top-full left-0 mt-3 w-72 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border">
                <div className="p-3 space-y-1">

                  <Link
                    to="/florida-homeschool"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                  >
                    Florida Homeschooling Requirements
                  </Link>

                  <Link
                    to="/co-program"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                  >
                    Co-Op Program
                  </Link>

                  <Link
                    to="/parent-portal"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                  >
                    Parent Portal
                  </Link>

                  <Link
                    to="/courses"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                  >
                    Courses
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="hover:text-[#0D428E] transition flex items-center gap-1">
                Resources ▾
              </button>

              <div className="absolute top-full left-0 mt-3 w-72 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border">
                <div className="p-3 space-y-1">

                  <Link
                    to="/faq"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                  >
                    Frequently Asked Questions
                  </Link>

                  <Link
                    to="/enrollment"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                  >
                    Enrollment
                  </Link>

                  <Link
                    to="/how-it-works"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                  >
                    How It Works
                  </Link>

                  <Link
                    to="/state-compilance"
                    
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50"
                  >
                    State Compliance
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/contact" className="hover:text-[#0D428E] transition">
              Contact
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setShowLogin(true)}
              className="w-28 bg-[#0D428E] text-white py-2 rounded-full hover:bg-[#0a3573] transition"
            >
              Login
            </button>

            <Link
              to="/register"
              className="w-28 text-center border border-[#0D428E] text-[#0D428E] py-2 rounded-full hover:bg-blue-50 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-3xl text-[#0D428E]"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white px-5 py-5 space-y-4">

          <Link to="/" onClick={closeMenu} className="block">
            Home
          </Link>

          <Link to="/about" onClick={closeMenu} className="block">
            About
          </Link>

          <Link to="/florida-homeschool" onClick={closeMenu} className="block">
            Florida Homeschooling
          </Link>

          <Link to="/faq" onClick={closeMenu} className="block">
            FAQ
          </Link>

          <Link to="/parent-portal" onClick={closeMenu} className="block">
            Parent Portal
          </Link>

          <Link to="/co-program" onClick={closeMenu} className="block">
            Co-Op Program
          </Link>

          <Link to="/courses" onClick={closeMenu} className="block">
            Courses
          </Link>

          <Link to="/get-in-touch" onClick={closeMenu} className="block">
            Contact
          </Link>

          <div className="pt-3 flex flex-col gap-3">
            <button
              onClick={() => setShowLogin(true)}
              className="w-full bg-[#0D428E] text-white py-2 rounded-full"
            >
              Login
            </button>

            <Link
              to="/register"
              className="w-full text-center border border-[#0D428E] text-[#0D428E] py-2 rounded-full"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-2xl w-full max-w-lg p-8 relative shadow-2xl">

            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-black"
            >
              ×
            </button>

            <div className="flex justify-center mb-4">
              <img src={logo} alt="logo" className="h-14" />
            </div>

            <h2 className="text-center text-2xl font-semibold text-[#0D428E] mb-6">
              USER LOGIN
            </h2>

            <form className="space-y-5">
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D428E] outline-none"
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D428E] outline-none"
                  placeholder="Enter Password"
                />
              </div>

              <button className="w-full bg-[#C6922E] text-white py-3 rounded-xl hover:opacity-90 transition">
                Login
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
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