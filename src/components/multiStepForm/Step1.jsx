import React from "react";
import { useFormContext } from "../../context/FormContext";
import Features from "../Features";
const Step1 = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    
    features,
    setFeatures,
  } = useFormContext();

  return (
    <div>
      <div className="my-6">
        <div>
          <label htmlFor="title pl-2" className="labelfornew">
            Property name
          </label>
          <input
            type="text"
            id=""
            placeholder="title, eg 2Bed room at Molete"
            className="mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description" className="labelfornew">
            Description
            <div className="text-sm text-gray-400">
              *Add a detailed Description about your appartmentg
            </div>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        

          <Features features={features} setFeatures={setFeatures} />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Step1;
