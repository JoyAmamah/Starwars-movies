import { useEffect, useState } from "react";
import axios from "axios";

interface Movie {
  title: string;
  opening_crawl: string;
  release_date: string;
  producer: string;
  url: string;
}

const MovieCard = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const baseUrl = "https://swapi.py4e.com/api/films/";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(baseUrl);
        setMovies(res.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  // const getImageUrl = (url: string) => {
  //   const id = url.split("/").filter(Boolean).pop();
  //   return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;
  // };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.length > 0 ? (
          movies.map((movie, idx) => (
            <div
              key={idx}
              className="bg-gray-800 hover:bg-gray-500 transition duration-300 rounded-xl shadow-lg overflow-hidden"
            >
              {/* <img
                src={getImageUrl(movie.url)}
                alt={movie.title}
                className="w-full h-80 object-cover"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")
                }
              /> */}
              <div className="p-4 flex flex-col justify-between h-full">
                <h2 className="text-xl font-bold text-yellow-300 mb-2">{movie.title}</h2>
                  <p className="mt-auto text-ms p-2 text-gray-400">📅 Released: {movie.release_date}</p>
                <p className="text-sm text-gray-300 m-5">
                  {movie.opening_crawl.slice(0, 200)}...
                  <a href="#" className="bg-yellow-700 rounded-md p-5">Read More</a>
                </p>
                <div className="mt-auto text-xs text-gray-400">
                  <p>🎬 Producer: {movie.producer}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-lg col-span-full text-center">Loading movies...</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
