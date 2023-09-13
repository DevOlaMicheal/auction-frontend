import React from "react";
import UploadImages from "../UploadImages";

import { useFormContext } from "../../context/FormContext";

export default function Step2() {
  const { adress, setAdress, extraInfo, setExtraInfo } = useFormContext();

  return (
    <div className="my-3 w-full grid md:grid-cols-2 gap-3">
      <div className="w-full h-30 bg-purple-300"></div>
      <div className="">
        <label htmlFor="title pl-2" className="labelfornew">
          Location
        </label>
        <input
          type="text"
          id=""
          placeholder="e.g Rayfield plateau state"
          className="mb-4"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />

        <label htmlFor="description" className="labelfornew">
          Extra information
          <div className="text-sm text-gray-400">
            *Extra information about features and other pro's of your appartment
          </div>
        </label>
        <textarea
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
        />
      </div>
    </div>
  );
}
