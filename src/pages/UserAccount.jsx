import React from "react";
import { useUserContext } from "../hooks/useuserContext";
import { Navigate, Link, useParams } from "react-router-dom";
// import Header from './userProfile/header'
// import ProfilePage from './userProfile/ProfilePageage'
import ProfilePage from "./AccountComponents/ProfilePage";
import MyAccomodations from "./MyAccomodations";
import Accountheader from "./AccountComponents/Accountheader";

function UserAccount() {
  let { subPage } = useParams();

  if (subPage === undefined) {
    subPage = "profile";
  }

  console.log(subPage);

  const activeClass = (type) => {
    let classes = "px-6 py-2 flex gap-1 items-center rounded-full";

    if (type === subPage) {
      classes += " bg-primary text-white font-semibold ";
    } else {
      classes += " bg-gray-200";
    }

    return classes;
  };

  const { user, ready, dispatch } = useUserContext();

  if (!ready) {
    return <div>loading...</div>;
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>

      <Accountheader activeClass={activeClass} />
{/* 
      {subPage === "profile" && <ProfilePage user={user} dispatch={dispatch} />}

      {subPage === "bookings" && "bookings"}

      {subPage === "accomodations" && <MyAccomodations />} */}
    </div>
  );
}

export default UserAccount;
