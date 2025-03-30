import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

function Login() {
  const { setUser } = useContext(DataContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (res.ok) {
        setUser(data.data);
        localStorage.setItem("token", data.data);
        navigate("/");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-white">
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-md">
        <h1 className="text-center text-4xl font-bold text-blue-600 mb-6">Sign In</h1>
        <div className="space-y-4">
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
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
          >
            Login
          </button>
        </div>
        <p className="text-center mt-4 text-gray-600">
          New User?{" "}
          <Link className="text-blue-600 hover:underline font-medium" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
