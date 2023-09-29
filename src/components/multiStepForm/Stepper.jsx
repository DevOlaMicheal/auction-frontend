import React from 'react'

const Stepper = () => {
  return (
    <div>
      <div className="flex flex-wrap pb-4 px-4 justify-between mt-6">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="stepper-active">
                  1
                </div>
              </div>
              <div className="mt-2 hidden lg:flex">General details</div>
            </div>
            <div className="hidden border-t border-black relative top-6 px-6 md:flex"></div>
            


            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="stepper-active">
                  2
                </div>
              </div>
              <div className="mt-2 hidden lg:flex">Location/extrainfo</div>
            </div>
            <div className="hidden lg:flex border-t border-black relative top-6  px-6"></div>

            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="stepper-inactive">
                  3
                </div>
              </div>
              <div className="mt-2 hidden lg:flex">Image upload</div>
            </div>

            <div className="hidden lg:flex border-t border-black relative top-6 px-6"></div>

<div className="flex flex-col justify-center">
  <div className="flex justify-center">
    <div className="stepper-inactive">
      4
    </div>
  </div>
  <div className="mt-2 hidden lg:flex">Checks and Confirmation</div>
</div>

          </div>
    </div>
  )
}

export default Stepper