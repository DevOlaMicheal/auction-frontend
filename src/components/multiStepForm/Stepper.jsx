import React from 'react'

const Stepper = () => {
  return (
    <div>
      <div className="flex pb-4 px-4 justify-between mt-6">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="stepper-active">
                  1
                </div>
              </div>
              <div className="mt-2 flex">General details</div>
            </div>
            <div className="flex-auto border-t border-black relative top-6 px-6"></div>

            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="stepper-active">
                  2
                </div>
              </div>
              <div className="mt-2 flex">Location/extrainfo</div>
            </div>
            <div className="flex-auto border-t border-black relative top-6  px-6"></div>

            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="stepper-inactive">
                  3
                </div>
              </div>
              <div className="mt-2 flex">Image upload</div>
            </div>

            <div className="flex-auto border-t border-black relative top-6 px-6"></div>

<div className="flex flex-col justify-center">
  <div className="flex justify-center">
    <div className="stepper-inactive">
      4
    </div>
  </div>
  <div className="mt-2 flex">Checks and Confirmation</div>
</div>

          </div>
    </div>
  )
}

export default Stepper