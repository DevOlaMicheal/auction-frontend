import React from 'react'

const Stepper = () => {
  return (
    <div>
      <div className="flex pb-4 px-4 justify-between">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="border border-primary rounded-full flex items-center justify-center h-10 w-10 font-semibold bg-primary text-white">
                  1
                </div>
              </div>
              <div className="mt-2 flex">General details</div>
            </div>
            <div className="flex-auto border-t relative top-6 px-6"></div>

            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="border border-primary rounded-full flex items-center justify-center h-10 w-10 font-semibold text-primary">
                  2
                </div>
              </div>
              <div className="mt-2 flex">Location/images upload</div>
            </div>
            <div className="flex-auto border-t relative top-6 px-6"></div>

            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="border border-primary rounded-full flex items-center justify-center h-10 w-10 font-semibold  text-primary">
                  3
                </div>
              </div>
              <div className="mt-2 flex">Confirmation</div>
            </div>
          </div>
    </div>
  )
}

export default Stepper