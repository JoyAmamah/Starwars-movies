import MovieCard from '../components/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { clearUser } from '../store/authSlice';
import type { RootState } from '../store/store';

const MoviesDashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    


   const handleLogout = async () => {
  try {
    await signOut(auth);
    dispatch(clearUser());
  } catch (error) {
    console.error('Logout failed', error);
  }
};


  return (
    <>
    
    <div className='flex flex-row justify-between mb-10'>
<p className="bg-gray-800 text-yellow-400 rounded-md font-bold p-3">Welcome: {user?.displayName ?? 'Guest'}</p>
       <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
     <h1 className="text-3xl font-bold mb-10 bg-gray-800 text-yellow-400">
🌌 Star Wars Movies
      </h1>
    <MovieCard />
    </>
  )
}

export default MoviesDashboard;