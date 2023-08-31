import axios from 'axios'
import { useUserContext } from "../../hooks/useuserContext";

import { useNavigate, Navigate } from 'react-router-dom'
import Accountheader from './Accountheader';

// import { useUserContext } from '../hooks/useuserContext'

function ProfilePage() {
  const { user, ready, dispatch } = useUserContext();

    const navigate = useNavigate()
    const handlelogout = async (e) => {
        // e.preventDefault()

        const response = await axios.post('/api/auction/logout')
        
        if(response){
            dispatch({type: 'LOGOUT', payload: null})
            navigate('/')
        }
        // console.log(response)
        

    }

    
  if (!ready) {
    return <div>loading...</div>;
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
        <Accountheader />
    <div className="profileheader mx-auto text-center max-w-sm">
       <div className="flex items-center justify-center">
      <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-gray-300">
        <img
          src="http://localhost:4000/0a7b95e0469ab545b81166c6532049b3.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-center p-2">
        <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
        </div>
      </div>
    </div>
      <div className="font-semi mb-2">Logged in as {user.email}</div>
      <button className="bg-primary py-3 w-full rounded-full text-white font-semibold" onClick={handlelogout}>Logout</button>
    </div>

    </div>
  )
}

export default ProfilePage