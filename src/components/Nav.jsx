import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { AppContext } from "../App";
import { useUserContext } from "../hooks/useuserContext";
import naij from "../assets/naij.jpg";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

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
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Saves
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Properties
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Wallet
      </a>
    ),
  },

    {
    key: "5",
    label: (

      <Link className="border-t">Singout </Link>
    ),
  },
];

function Nav() {
  const { user, ready, dispatch } = useUserContext();
  // const {logo} = useContext(AppContext)

  const [fullname, setFullname] = useState("");

  return (
    <div className="sticky top-0 z-10 bg-primary text-white shadow-sm font-semibold">
      <div className="flex flex-wrap justify-between py-3 px-5 items-center">
        {/* first flex item */}
        <div className="flex items-center space-x-20">
          {/* <img src={logo} alt="" style={{ height: "30px" }} /> */}  
          <Link to="/" className="text-2xl font-semibold">
            Auction.
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type=""
            className="py-2 px-4 w-[20rem] border-slate-800 rounded text-slate-900"
            placeholder="What are you looking for?"
          />
          <button className="py-2 px-4 bg-slate-900 rounded">Search</button>
        </div>

        {/* second Flex item */}
        <div>
          {!user && (
            <div className="flex gap-3 items-center">
              <Link to="/login">
                <button className="py-3 px-6 rounded-lg bg-primary text-white">
                  sign in
                </button>
              </Link>
              <Link to="/register">
                <button className="py-3 px-6 rounded-lg border border-primary text-primary">
                  sign up
                </button>
              </Link>
            </div>
          )}

          {user && (
            <div className="flex space-x-2 items-center">
              <div className="py-1 px-2 flex gap-1  items-center ">
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
              <div className="flex gap-1 items-center py-2 px-4">
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
