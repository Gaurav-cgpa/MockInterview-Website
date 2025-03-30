import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import heroGif from "../assets/job-interview.gif";
import textEditorImg from "../assets/Text Editor.png";
import codeEditorImg from "../assets/code editor.png";
import { useNavigate } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import InputModal from "../components/InputModal";
import PopupModal from "../components/PopupModal";

function Homepage() {
  const { setUser, user } = useContext(DataContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUser(null);
      localStorage.removeItem("token");
    } catch (error) {
      console.log(error);
    }
  };

  const timelineItems = [
    {
      title: "Sign Up",
      description: "Create an account to get started.",
    },
    {
      title: "Create or Join an Interview",
      description: "Choose to start or join an interview session.",
    },
    {
      title: "Collaborate and Practice",
      description: "Use our tools to practice and improve your interview skills.",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex p-4 bg-gradient-to-r from-blue-600 to-blue-400 justify-between items-center shadow-lg">
        <div className="text-4xl font-extrabold text-white">MockInt</div>
        <div className="flex space-x-6 items-center">
          <p className="text-2xl font-semibold text-white hover:text-blue-200 transition-colors">
            Home
          </p>
          <p className="text-2xl font-semibold text-white hover:text-blue-200 transition-colors">
            Features
          </p>
          {user ? (
            <button
              onClick={handleLogout}
              className="text-xl font-semibold text-white bg-blue-800 hover:bg-blue-900 rounded-full shadow-lg py-2 px-5 transition-all"
            >
              Logout
            </button>
          ) : (
            <div className="flex space-x-4">
              <button className="text-xl font-semibold text-white bg-blue-800 hover:bg-blue-900 rounded-full shadow-lg py-2 px-5 transition-all">
                Login
              </button>
              <button className="text-xl font-semibold text-blue-800 bg-white hover:bg-blue-50 rounded-full shadow-lg py-2 px-5 transition-all">
                Signup
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-around p-16 bg-white">
        <div className="md:w-1/2 flex flex-col justify-center gap-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-blue-800 drop-shadow-lg">
            Ace Your Interviews with Confidence
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-blue-700">
            Practice with real-time feedback and collaboration tools
          </p>
          {user ? (
            <div className="flex gap-6">
              <PopupModal />
              <InputModal />
            </div>
          ) : (
            <div className="flex gap-6">
              <button
                className="bg-blue-600 font-semibold text-lg text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="font-semibold text-lg text-blue-600 bg-white border border-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition-all"
                onClick={() => navigate("/signup")}
              >
                Signup
              </button>
            </div>
          )}
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          <img
            src={heroGif}
            alt="Interview GIF"
            className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold text-blue-800 border-b-4 border-blue-400 inline-block pb-2">
            Our Features
          </h2>
          <div className="mt-12 space-y-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-blue-700 mb-4">
                  Audio and Video Calls
                </h3>
                <p className="text-xl text-blue-600">
                  Communicate seamlessly with crystal-clear audio and video.
                </p>
              </div>
              <div className="md:w-1/3">
                <img
                  src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*NLSe2SyjfxdbEqFsOWHhlg.png"
                  alt="Audio Video Calls"
                  className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
              <div className="md:w-1/2 text-right">
                <h3 className="text-3xl font-bold text-blue-700 mb-4">
                  Collaborative Code Editor
                </h3>
                <p className="text-xl text-blue-600">
                  Code together in real-time with syntax highlighting and autocompletion.
                </p>
              </div>
              <div className="md:w-1/3">
                <img
                  src={codeEditorImg}
                  alt="Collaborative Code Editor"
                  className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-blue-700 mb-4">
                  Text Editor
                </h3>
                <p className="text-xl text-blue-600">
                  Take notes and plan your solutions with our integrated text editor.
                </p>
              </div>
              <div className="md:w-1/3">
                <img
                  src={textEditorImg}
                  alt="Text Editor"
                  className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works Section with Timeline */}
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold text-blue-800 border-b-4 border-blue-400 inline-block pb-2 mb-12">
            How it works?
          </h2>
          <div className="relative ml-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="mb-10 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-400 rounded-full ring-8 ring-white">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3a1 1 0 01.894.553l3 6a1 1 0 01-.018.89l-3 6A1 1 0 0110 17a1 1 0 01-.894-.553l-3-6a1 1 0 01.018-.89l3-6A1 1 0 0110 3z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-2xl font-semibold text-blue-800">
                  {item.title}
                </h3>
                <p className="text-xl text-blue-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/gaurav-s-patil22/"
                  className="text-3xl hover:scale-125 transition-transform"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/khawse_man69128"
                  className="text-3xl hover:scale-125 transition-transform"
                >
                  <FaSquareXTwitter />
                </a>
                <a
                  href="https://github.com/manthankhawse"
                  className="text-3xl hover:scale-125 transition-transform"
                >
                  <FaSquareGithub />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
              <p>Email: info@mockint.com</p>
              <p>Phone: +123 456 7890</p>
              <p>Address: 123 Main Street, City, Country</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>&copy; 2024 MockInt. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
