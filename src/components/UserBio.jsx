import React from 'react';
import { useUserContext } from '../hooks/useuserContext';
import profileImg from "../assets/faith.jpg";

const UserBio = () => {
  const { user, ready, dispatch } = useUserContext();

    
    return (
        <div className="bg-white w-full p-6 rounded shadow-sm max-h-[32rem] overflow-auto">
          <div className="">
            <div className="flex items-center justify-center">
              <div className="relative w-36 h-36 overflow-hidden rounded-full border-2 border-gray-300">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 flex items-end justify-center p-4 bg-black bg-opacity-25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-7 text-white text-2xl font-bold"
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

            <div className="flex flex-col justify-center border-t border-b my-4 py-4">
              <div className="font-semibold text-slate-700 mb-2 text-center">
                Logged in as {user.email}
              </div>
            </div>

            <div className="my-3">
            <div className="flex justify-between items-center my-3">
            <h4 className="text-lg font-semibold text-slate-800">Your bio</h4>
             
              <div>
                <button className="py-2 px-4 border border-primary rounded-full">Edit Profile</button>
              </div>
              </div>
            <div className="">
             
          

              <div className="text">

               <form>
                <input type="text" value={user.firstname + ' ' + user.lastname} />
                <input type="text" value={user.email} />
                <input type="text" value="" placeholder="Add your Call phonenumber"/>
                <input type="text" value="" placeholder="Add Your whatsapp phonenubmer"/>
                <input type="password" value={user.password} placeholder="Password"/>


               </form>
              </div>

            </div>
            </div>
          </div>
        </div>
    );
}

export default UserBio;
