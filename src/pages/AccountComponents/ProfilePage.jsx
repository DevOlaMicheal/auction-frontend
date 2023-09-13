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

  const navigate = useNavigate();
  const handlelogout = async (e) => {
    // e.preventDefault()

    const response = await axios.post("/api/auction/logout");

    if (response) {
      dispatch({ type: "LOGOUT", payload: null });
      navigate("/");
    }
    // console.log(response)
  };

  if (!ready) {
    return <div>loading...</div>;
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="container mx-auto min-h-screen">
      <Accountheader />

      <div className="grid grid-cols-1  gap-6 lg:grid-cols-[1fr_2fr]">
        <UserBio />

        <div className="bg-white w-full p-6 rounded shadow-md"> 

          <Wallet />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
