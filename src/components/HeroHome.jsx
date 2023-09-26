import React from "react";
import HeroImg from "../assets/images/homes3.jpg";

function HeroHome() {
  return (
    <div>
      <div className="hero w-full mx-0 pb-4bg-cover mb-6 bg-primary h-96 flex items-center justify-center p-4">
        <div className="flex flex-col gap-3">
          <div className="text-4xl text-center font-bold font-secondary opacity-100 text-slate-100 shadow-sm">
            Buy or Sell landed properties seamlessly
          </div>
          <p className="text-white font-semibold mt-8 flex items-center justify-center  gap-1 mb-2">
            Find Homes/land in{" "}
            <span className="py-1 bg-gray-700 px-2 flex items-center justify-center gap-1">
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
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              All over Nigeria
            </span>{" "}
          </p>

          <div className="flex justify-between gap-2 border bg-white rounded-full py-2 px-3 mx-2">
            <input
              type=""
              className="w-full px-4"
              placeholder="Search for properties around you"
            />
            <button className="bg-primary text-white rounded-full p-3 font-bold">
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
        </div>
      </div>
    </div>
  );
}

export default HeroHome;
