import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AppContext } from "../App";
import { useUserContext } from "../hooks/useuserContext";
import naij from "../assets/naij.jpg";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space, Avatar } from "antd";
import axios from 'axios'

import userImg from "../assets/faith.jpg"

function Nav() {

  const { user, ready, dispatch } = useUserContext();

  const hiddenClass = user ? 'hidden' : 'flex'

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


  const items = [
    {
      key: "1",
      label: (
        <Link to="/account">
          Profile
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/account/saved">
          Saves
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to="/account/myproperties">
          My Properties
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link to="account/wallet">
          Wallet
        </Link>
      ),
    },
  
      {
      key: "5",
      label: (
  
        <div className="border-t" onClick={handlelogout}>Singout </div>
      ),
    },
  ];
  

  // const {logo} = useContext(AppContext)

  const [fullname, setFullname] = useState("");

  return (
    <div className="sticky top-0 z-10 bg-primary text-white shadow-md font-semibold">
      <div className="flex flex-wrap justify-between py-3 px-5 items-center">
        {/* first flex item */}
        <div className="flex items-center space-x-20">
          {/* <img src={logo} alt="" style={{ height: "30px" }} /> */}  
          <Link to="/" className="text-2xl font-semibold">
            Auction.
          </Link>
        </div>

        
       
        {/* second Flex item */}
        <div className="flex gap-8">
        <div className="py-1 px-2 flex gap-1  items-center">
                <img src={naij} className="h-4" alt="" />
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
          {!user && (
            <div className="flex gap-3 items-center">


              <Link to="/login">
                <button className="py-2 px-6 rounded-lg bg-secondary text-white">
                  sign in
                </button>
              </Link>
              <Link to="/register">
                <button className="py-2 px-6 rounded-lg border bg-slate-100 text-slate-800">
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
                  backgroundColor: '#ff6b6b',
                }}
                icon={<UserOutlined />}
              />

              <Space />

                {user && (
                 
                  <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Hi, {user.firstname}
                    <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
                )}
                {!ready && <p className="py-1">loading..</p>}
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
