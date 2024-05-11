import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Avatar from "/images/avatar1.png";
import BithdayLogo from "/images/birthdaylogo.png";
const BirthdayNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Add login logic here
  };
  const handleSignin =()=>{
    console.log("signin")
  }

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center mr-8">
              <img src={BithdayLogo} alt="Logo" className="h-8" />
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/wedding" className="text-white hover:text-gray-300">
                Wedding
              </Link>
            </div>
          </div>
          <div className="flex items-center">
          

            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={handleLogin}
                className="text-white hover:text-gray-300 text-xl" 
              >
                <Link to="/login" className="text-white hover:text-gray-300">
                  Login
                </Link>
              </button>
              <button 
                onClick={handleSignin}
                className="text-white hover:text-gray-300 text-xl" 
              >
                <Link to="/signin" className="text-white hover:text-gray-300">
                SignIn
                </Link>
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-4 ml-2">
              <img
                src={Avatar}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-white">John Doe</span>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/wedding"
                className="block px-3 py-2 text-white rounded-md hover:bg-gray-700"
              >
                Wedding
              </Link>
              {/* Add more dropdown items here */}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default BirthdayNavbar;
