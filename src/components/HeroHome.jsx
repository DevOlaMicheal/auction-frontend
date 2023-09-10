import React from 'react'
import HeroImg from '../assets/images/homes3.jpg'

function HeroHome() {
  return (
    <div>
        
    <div className="hero w-full mx-0 h-96 bg-center bg-cover mb-10" style={{ backgroundImage: `url(${HeroImg})` }}>
          <div className="bg-black w-full h-full bg-opacity-70 pt-20 flex flex-col gap-3 items-center">
            <div className="text-4xl font-bold text-white opacity-100 text-center font-sans">Find the Best Properties for yourself</div>
            <p className="text-xl text-center text-white font-semibold">See properties People are Selling or renting out</p>

            <div className="flex gap-2 border bg-white rounded-full py-4 px-6">
          <div className="font-semibold text-gray-800">Homes</div>
          <div className="border-l border-gray-300"></div>
          <div className="font-semibold text-gray-800">Lands</div>
          <div className="border-l border-gray-300"></div>
          <div className="font-semibold text-gray-600">Sell</div>
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
            <div className='flex'>

            </div>
            <div></div>
          </div>
    </div>
    </div>
  )
}

export default HeroHome