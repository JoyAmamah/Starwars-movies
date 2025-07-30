import { useEffect, useState } from "react";
import axios from "axios";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase";
import { clearUser } from "../store/authSlice";
import type { RootState } from "../store/store";

interface Movies {
  title:string,
  opening_crawl:string,
  release_date:string,
  producer:string
}

const Movies = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [movies, setMovies] = useState<Movies[]>([]);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(clearUser());
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get("https://swapi.info/api/films");
        console.log(response.data)
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4"> StarWars Movies</h1>
      <p className="mt-2">Welcome: {user?.email}</p>
      <ul>
        {movies.map((movie, idx) => (
          <div key={idx}>
            {movie.title}
            <h1>{movie.producer}</h1>
            </div>
        ))}
      </ul>
        <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2">Logout</button>
    </div>
  );
};

export default Movies;
