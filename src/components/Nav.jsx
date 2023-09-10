import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useUserContext } from "../hooks/useuserContext";

function Nav() {

  const {user, ready, dispatch} = useUserContext()
  const {logo} = useContext(AppContext)

  const [fullname, setFullname] = useState('')


  return (


    
    <div className="sticky top-0 z-10 bg-[#f9fafb] shadow-sm">

      <div className="flex flex-wrap justify-between py-4 px-4 items-center border-b">
        <div className="flex items-center gap-1">
          {/* <img src={logo} alt="" style={{ height: "30px" }} /> */}
          <Link to="/" className="font-bold text-2xl text-primary">
            Auction.<span className="text-sm font-semibold">ng</span>
          </Link>
        </div>
        <div className="hidden gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 md:flex">
          <div className="font-semibold text-gray-800">Anywhere</div>
          <div className="border-l border-gray-300"></div>
          <div className="font-semibold text-gray-800">Anyweek</div>
          <div className="border-l border-gray-300"></div>
          <div className="font-semibold text-gray-600">Sell your property</div>
          <button className="bg-primary text-white rounded-full p-1 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <div className="font-semibold text-gray-800 hidden md:flex">Sell your landed props swiftly</div>
          <div className="flex items-center gap-2">
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
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>


            {
              !user && (
                <div className="flex gap-3 items-center">
                  <Link to="/login"><button className="py-2 px-6 rounded-lg bg-primary text-white">sign in</button></Link>
                 <Link to="/register"> <button className="py-2 px-6 rounded-lg border border-primary text-primary">sign up</button></Link>

                </div>
              )
            }


              <Link to="/account" className=" space-x-2 items-center hidden">
              

            <div className="flex gap-2 items-center py-2 px-4 border border-gray-300 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
                <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                </div>

                {user && (
              <p className="py-1">{user.firstname + ' ' + user.lastname}</p>
              )}
              {!ready && (
              <p className="py-1">loading..</p>
                
              )}

              
            </div>
          </Link>

          </div>

        </div>
    </div>
    </div>


  );
}

export default Nav;
