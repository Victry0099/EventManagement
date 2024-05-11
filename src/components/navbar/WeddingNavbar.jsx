import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Avatar from "/images/avatar1.png";
import WeddingLogo from "/images/weddinglogo.png";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../redux/globalVariable";
const WeddingNavbar = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.Variable);
  // const [isOpen, setIsOpen] = useState(false);
  console.log("isopen", isOpen);
  const handleLogin = () => {
    // Add login logic here
  };

  const handleSignin = () => {
    console.log("signin");
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center mr-8">
              <img src={WeddingLogo} alt="Logo" className="h-8" />
            </Link>
            <div
              className="relative"
              onMouseEnter={() => dispatch(openModal())}
              onMouseLeave={() => dispatch(closeModal())}
            >
              <button className="text-white hover:text-gray-300 text-xl mt-4">
                Venders
              </button>
              <Transition
                show={isOpen}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                className="absolute top-full left-0 w-200 bg-gray-800 z-10 mt-0"
              >
                <div className="px-4 py-2 space-y-2 mt-0">
                  <Link
                    to="/photographer"
                    className="block text-white hover:text-gray-300"
                    onMouseEnter={() => dispatch(openModal())}
                    onMouseLeave={() => dispatch(closeModal())}
                  >
                    Photographer
                  </Link>
                  <Link
                    to="/music-dj"
                    className="block text-white hover:text-gray-300"
                  >
                    Music & DJ
                  </Link>
                </div>
              </Transition>
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
    </nav>
  );
};

export default WeddingNavbar;
