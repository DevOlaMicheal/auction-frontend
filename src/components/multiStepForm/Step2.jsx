import React from "react";
import UploadImages from "../UploadImages";

import { useFormContext } from "../../context/FormContext";

export default function Step2() {
  const {
    adress,
    setAdress,
    extraInfo,
    setExtraInfo,
    auctionType,
    setAuctionType,
    price,
    setPrice,
  } = useFormContext();

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

        <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 w-full">
          <div className="">
            <label className="labelfornew">Auction type</label>
            <select
              name=""
              id=""
              value={auctionType}
              onChange={(e) => setAuctionType(e.target.value)}
            >
              <option value="" disabled>
                Select type
              </option>
              <option>Rent</option>
              <option>For Sale</option>
            </select>
          </div>
          <div className="">
            <label className="labelfornew">Property </label>
            <select
              name=""
              id=""
              value={auctionType}
              onChange={(e) => setAuctionType(e.target.value)}
            >
              <option value="" disabled>
                Select type
              </option>
              <option>Home/House</option>
              <option>Land</option>
            </select>
          </div>

          <div>
            <label className="labelfornew">Price</label>
            <input
              type="number"
              name=""
              id=""
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

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
