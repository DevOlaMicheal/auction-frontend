import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { AppContext } from "../App";
import { useUserContext } from "../hooks/useuserContext";
import naij from "../assets/naij.jpg";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space, Avatar } from "antd";
import axios from "axios";

import userImg from "../assets/faith.jpg";
import { useRegisterandLogin } from "../hooks/useRegisterandLogin";
import { useEffect } from "react";

function Nav() {
  const { user, ready, dispatch } = useUserContext();

  const {logout} = useRegisterandLogin()

  const location = useLocation();

  let subPage = location.pathname.split("/")[2];

  const [isOpen, setIsOpen] = useState(false);

  const [searchIsOpen, setSearchIsOpen] = useState(false)

  const navigate = useNavigate();
  const handlelogout = async (e) => {
    // e.preventDefault()
    logout()
    // console.log(response)
  };

  const handleNav = () => {
    setIsOpen(!isOpen);
  };


  const searchOpen = () => {
    setSearchIsOpen(!searchIsOpen);
  };
  useEffect(() => {
    const navclose = () => setIsOpen(false)

    window.addEventListener('popstate', navclose)
  }, [])
  const items = [
    {
      key: "1",
      label: <Link to="/account">Profile</Link>,
    },
    {
      key: "2",
      label: <Link to="/account/saved">Saves</Link>,
    },
    {
      key: "3",
      label: <Link to="/account/myproperties">My Properties</Link>,
    },
    {
      key: "4",
      label: <Link to="account/wallet">Wallet</Link>,
    },

    {
      key: "5",
      label: (
        <div className="border-t hidden md:flex" onClick={handlelogout}>
          Sign{" "}
        </div>
      )
    },
  ];

  // const {logo} = useContext(AppContext)

  const [fullname, setFullname] = useState("");

  return (
    <div className="sticky top-0 z-10 bg-primary text-white shadow-md font-semibold">
      {/* Desktop Nav */}
      <div className="flex-wrap justify-between py-5 px-5 items-center hidden md:flex">
        {/* first flex item */}
        <div className="flex items-center space-x-20">
          {/* <img src={logo} alt="" style={{ height: "30px" }} /> */}
          <Link to="/" className="text-3xl font-semibold">
            Auction.
          </Link>
        </div>

        {/* second Flex item  */}

     <div className="">
          <form action="">
            <input type="text" className="border border-secondary py-3 px-20 w-full rounded text-black" placeholder="Search for appartments" />
          </form>
        </div>


        <div className="flex gap-4">
          
          {!user && (
            <div className="flex gap-3 items-center">
              <Link to="/login">
                <button className="py-2 px-6 rounded-lg bg-secondary text-white">
                  sign in
                </button>
              </Link>
              <Link to="/register">
                <button className="py-2 px-6 rounded-lg border-2 bg-slate-100 text-slate-800">
                  sign up
                </button>
              </Link>
            </div>
          )}

          {user && (
            <div className="flex gap-4 items-center">
              
              <div className="flex gap-2 items-center py-2 px-4">
                <Avatar
                  style={{
                    backgroundColor: "#003547",
                  }}
                  icon={<UserOutlined />}
                />

                {user && (
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <p classNAme="text-2xl">{user.firstname + ' ' + user.lastname}</p>
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                )}
                {!ready && <p className="py-1">loading..</p>}
              </div>

          <div className="py-3 px-3 flex gap-1  items-center border border-secondary rounded">
            <img src={naij} className="h-4" alt="" />
            <p>NGN</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >

              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
              <div className="py-3 px-3 border border-secondary rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

              </div>

              <div className="py-3 px-5 bg-secondary text-white rounded"> Sell
</div>
              <div>
                <button className="py-3 px-4 bg-secondary text-white rounded">Signout</button>
              </div>
            </div>

            
          )}
        </div>
      </div>
      {/* Desktop nav Ends */}

      {/* mobile Nav */}

      <div className="py-6 w-full md:hidden ">

      <div className={`${searchIsOpen ? 'flex' : 'hidden'} search w-full mx-4 gap-3 justify-center items-center`}>
        <form action="">
          <input type="text" className="text-black border border-secondary rounded px-6 py-2" />
        </form>

        
        <button className="bg-secondary text-white rounded-full p-2 font-bold" onClick={searchOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

            </button>
      </div>
        <div className={` ${!searchIsOpen ? 'flex' : 'hidden'} relative justify-between items-center px-2`}>
          <div className="">
            {/* <img src={logo} alt="" style={{ height: "30px" }} /> */}
            <Link to="/" className="text-2xl font-semibold">
              Auction.
            </Link>
          </div>

          <div className="flex items-center gap-2">
            
            <div
            className={`${user ? "hidden" : "flex"} gap-3`}
          >

            <Link
              to={"/login"}
              className="py-2 px-4 bg-secondary text-white text-center rounded"
            >
              Signin
            </Link>

            <Link
              to={"/register"}
              className="py-2 px-4 border border-secondary text-white text-center rounded"
            >
              Signup
            </Link>
          </div>
          {user && (
            <div className="mr-3 hidden md:flex gap-2 items-center">
              <Avatar
                style={{
                  backgroundColor: "#003547",
                }}
                icon={<UserOutlined />}
              />
               <p className="font-secondary">Hi, {user.firstname}</p>
            </div>
          )}
{/* 
<div className="py-2 px-2 flex gap-1  items-center border border-secondary rounded">
              <img src={naij} className="h-4" alt="" />
              <p>NGN</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`${!user && "hidden"} w-5 h-5`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div> */}
            <div className="py-2 px-3 border border-secondary rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

              </div>

              <div className="py-2 px-5 bg-secondary text-white rounded"> Sell
</div>
 
<button className="bg-secondary text-white rounded-full p-3 font-bold" onClick={searchOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          <div className={`${!user && "hidden"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-8 h-8 font-semibold cursor-pointer ${
                isOpen && "hidden"
              } `}
              onClick={handleNav}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-8 h-8 cursor-pointer ${!isOpen && "hidden"}`}
              onClick={handleNav}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            </div>
          </div>
        </div>


        <div
          className={`absolute top-20 w-full bg-primary shadow-md px-5 text-xl font-normal border-y-1 border-white pb-3 pt-8  ${
            !isOpen ? "hidden" : "flex"
          }`}
        >
         
          {user && (
            <div className="flex flex-col gap-3 px-4 w-full">
              {items.map((item) => (
                <div className="" key={item.key} onClick={handleNav}>
                  {item.label}
                </div>
              ))}

              <button
                className="w-full py-2 bg-secondary text-white text-center rounded"
                onClick={handlelogout}
              >
                Signout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
