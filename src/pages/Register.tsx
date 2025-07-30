import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSignUp = async () => {
    try {
       const res = await  createUserWithEmailAndPassword(auth, email, password);

      console.log("Signup successful:", res);
      alert("Signup successful!");

      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed! Please try again.");
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <form
        onSubmit={handleSignUp}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Sign up Page</h1>

        <label className="block mb-2">
          Email:
        </label>
        <input
          type="email"
          placeholder="example@mail.com"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2">
          Password:
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 p-2 rounded hover:bg-blue-600 transition"
        >
          Signup
        </button>

        <p className="text-center mt-4">
          Already registered?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
