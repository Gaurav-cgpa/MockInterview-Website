import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const { setUser } = useContext(DataContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, username, password }),
      });
      const data = await res.json();
      console.log(data.message);
      setUser(data.data);
      localStorage.setItem("token", data.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-white">
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-md">
        <h1 className="text-center text-4xl font-bold text-blue-600 mb-6">
          Sign Up
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          />
          <button
            onClick={handleSignup}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
          >
            Signup
          </button>
        </div>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link
            className="text-blue-600 hover:underline font-medium"
            to="/login"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
