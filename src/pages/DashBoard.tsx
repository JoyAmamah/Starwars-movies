import MovieCard from '../components/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { clearUser } from '../store/authSlice';
import type { RootState } from '../store/store';

const Dashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    


   const handleLogout = async () => {
      await signOut(auth);
      dispatch(clearUser());
    };

  return (
    <>
    
    <div className='flex flex-row justify-between mb-10'>
<p className="text-white">Welcome: {user?.displayName ?? 'Guest'}</p>
       <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
     <h1 className="text-2xl font-bold mb-10 bg-gray-800 text-yellow-400">
        StarWars Movies
      </h1>
    <MovieCard />
    </>
  )
}

export default Dashboard;