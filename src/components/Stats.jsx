import React from 'react'

export default function Stats() {
  return (
    <div className='pb-4 border-b'>
                 <h1 className="pl-2 pb-2 text-xl font-semibold text-slate-800">Your activity Stats</h1>

        <div className="grid grid-cols gap-3 md:grid-cols-3">
              <div className="box bg-primary flex flex-col space-y-3 text-white">
                <div className="font-semibold mt-2">Your Properties</div>
                <div className="text-2xl font-semibold">0</div>
                <div className="w-full">
                <button className="py-2 px-4 rounded-full bg-black text-white font-semibold">See all</button>

                </div>
              </div>
              <div className="box bg-secondary flex flex-col space-y-3 text-white">
                <div className="font-semibold mt-2">Saves/wishlist</div>
                <div className="text-2xl font-semibold">0</div>
                <div className="w-full">
                <button className="py-2 px-4 rounded-full bg-black text-white font-semibold">See all</button>

              
              </div>
                
              </div>

            <div className="box bg-primary flex-col space-y-3 text-white">
            
              <div className="font-semibold mt-2 ">Ads Pushed</div>
                <div className="text-2xl font-semibold">0</div>
                <div className="w-1/2">
                <button className="py-2 px-4 rounded-full bg-black text-white font-semibold">See all</button>
              </div>
            </div>
            </div>
    </div>
  )
}
