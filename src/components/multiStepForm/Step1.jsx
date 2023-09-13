import React from "react";
import { useFormContext } from "../../context/FormContext";
import Features from "../Features";
const Step1 = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    auctionType,
    setAuctionType,
    price,
    setPrice,
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
          <div className="flex gap-3 w-full">
            <div className="w-1/2">
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
            <div className="w-1/2">
              <label className="labelfornew">Property type</label>
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

          <Features features={features} setFeatures={setFeatures} />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Step1;
