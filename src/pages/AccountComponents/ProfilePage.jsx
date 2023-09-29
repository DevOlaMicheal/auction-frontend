import axios from "axios";
import { useUserContext } from "../../hooks/useuserContext";

import { useNavigate, Navigate, Link } from "react-router-dom";
import Accountheader from "./Accountheader";


import Stats from "../../components/Stats";
import Wallet from "../../components/Wallet";
import UserBio from "../../components/UserBio";
// import { useUserContext } from '../hooks/useuserContext'

function ProfilePage() {
  const { user, ready, dispatch } = useUserContext();



  if (!ready) {
    return <div>loading...</div>;
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="container mx-auto px-3 min-h-screen">
      <Accountheader />

      <div className="grid grid-cols-1  gap-6 lg:grid-cols-[1fr_2fr]">
        
        <UserBio />

        <div className="bg-white max-h-1/2 overflow-hidden w-full p-6 rounded shadow-md"> 

          <Wallet />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
