import { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const navigate = useNavigate();


  const handleSubmit = async () => {
    try {
     const res =   await signInWithEmailAndPassword(auth, email, password)
     console.log(res)
       navigate('/home')
    }catch(error) {
      console.log(error)
    }
  }

  return (
    <section className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div 
        // onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login Page</h2>

        <label htmlFor="email" className="block mb-2">Email:</label>
        <input 
          id="email"
          type="email" 
          placeholder="example@mail.com"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />

        <label htmlFor="password" className="block mb-2">Password:</label>
        <input 
          id="password"
          type="password" 
          placeholder="Enter your password"
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />

        <button 
        onClick={handleSubmit}
        //   type="submit" 
        //   type="submit" 
          className="w-full bg-blue-500 p-2 rounded hover:bg-blue-600 transition"
        >
          Log in
        </button>

        <p className="text-center mt-4">
          Not registered? <Link to="/register" className="text-blue-400 hover:underline">Sign up</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;