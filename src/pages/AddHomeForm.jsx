import { useState, useEffect } from "react";
import Features from "../components/Features";
import axios from "axios";
import UploadImages from "../components/UploadImages";
import Accountheader from "./AccountComponents/Accountheader";
import { useNavigate } from "react-router-dom";
import Stepper from "../components/multiStepForm/Stepper";
import Step1 from "../components/multiStepForm/Step1";
import Step2 from "../components/multiStepForm/Step2";
import { useFormContext } from "../context/FormContext";
import Step3 from "../components/multiStepForm/Step3";

function AddHomeForm() {
  const { handleSubmit } = useFormContext();
  const [page, setPage] = useState(1);
  // useEffect(() => {
  //   // https://gps-naija.onrender.com/states

  //   const fetchStates = async () => {
  //     const {data} = await axios.get('https://gps-naija.onrender.com/states', {
  //       headers: {'Content-Type': 'application/json'}
  //     })
  //   }

  // }, [])

  const next = (e) => {
    setPage(page + 1);
  };

  const back = () => {
    setPage(page - 1);
  };

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="container mx-auto p-3">
        {/* <Accountheader /> */}
        <Accountheader />

        
        <Stepper />
        <div className="container mx-auto">
          <form className="px-2" onSubmit={handleSubmit}>
            {page === 1 && <Step1 />}

            {page === 2 && (
              <div
                className={`transition transform ease-in-out duration-300 ${
                  page === 2 ? "scale-100" : "scale-0"
                }`}
              >
                <Step2 />
              </div>
            )}

            {page === 3 && (
              <div
                className={`py-4 transition transform ease-in-out duration-300 ${
                  page === 3 ? "scale-100" : "scale-0"
                }`}
              >
                <UploadImages />
              </div>
            )}

            <div className="flex justify-between px-2 border-t pt-6">
              <button
                className={`border border-slate-700 py-3 px-6 rounded ${page === 1 && 'hidden'}`}
                onClick={back}
                type="button"
              >
                Back
              </button>

              {page === 4 && (
                <button className="border bg-primary py-3 px-6 text-white font-semibold rounded">
                  Submit Property
                </button>
              )}
              {page !== 4 && (

                <div className="flex w-full justify-end">
                <button
                  className="border border-primary py-3 px-6 text-primary font-semibold rounded"
                  type="button"
                  onClick={next}
                >
                  Proceed
                </button>
                </div>
              )}
            </div>
          </form>
        
        </div>
      </div>
    </div>
  );
}

export default AddHomeForm;
