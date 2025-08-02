import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import type { AppDispatch } from "./store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { setUser, clearUser } from "./store/authSlice";
import ProtectedRoute from "./components/ProtectedRoute";
import MovieCard from "./components/MovieCard";
import MoviesDashboard from "./pages/MoviesDashboard";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        dispatch(
          setUser({
            email: user.email,
            uid: user.uid,
            token: token,
            displayName: null
          })
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/moviecard" element={<MovieCard />} />
        <Route
          path="/moviedashboard"
          element={
            <ProtectedRoute>
              <MoviesDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
