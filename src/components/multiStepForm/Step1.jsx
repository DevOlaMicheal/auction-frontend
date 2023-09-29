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
    auctionType,
    setAuctionType,
    price,
    setPrice,
  } = useFormContext();

  const categories = ['bungalow', 'self Con', 'Students lodge', 'Corpers lodge', '2Beedroom', '3BeedRoom', '4Beedroom', 'Above 2 beedrom']

  return (
    <div className="grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-[1fr_1fr]">
      <div className="bg-primary bg-opacity-20  shadow-md p-4 rounded">
        <div>
          <label htmlFor="title mt-2" className="labelfornew">
            Property name
          </label>
          <input
            type="text"
            placeholder="title, eg 2Bed room at Molete"
            className="mb-4 input-secondary bg-gray-100"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

<label htmlFor="description" className="labelfornew">
            Description
            <div className="text-sm text-gray-600">
              *Add a detailed Description about your appartmentg
            </div>
          </label>
          <textarea
            className="input-secondary bg-gray-100"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

      <div className="grid grid-cols-[1fr_1fr] gap-3 w-full">
          <div className="">
            <label className="labelfornew">Auction type</label>
            <select
              name=""
              id=""
              className="input-secondary bg-gray-100"
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
              className="input-secondary bg-gray-100"

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

          
        </div>

        

          
        <div>
            <label className="labelfornew">Price</label>
            <input
              type="number"
              className="input-secondary bg-gray-100"
              name=""
              id=""
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

        </div>
        
      </div>

      <div className="bg-primary shadow-md p-4 rounded"> 
            <div className="sec1">
              <div className="border-b text-lg text-white py-3">Categories</div>

                <div className="mt-4 flex w-full flex-wrap gap-4 ">
                    {categories.map(category => (
                        <div className="py-2 px-3 border-2 border-blue-400 text-blue-400 rounded-lg cursor-pointer">{category}</div>

                    ))}
                  
                </div>

                <div className="sec2 my-4">
              <div className="border-b text-lg text-white py-3">Features</div>

          <Features features={features} setFeatures={setFeatures} />

                </div>

            </div>
       </div>

    </div>
  );
};

export default Step1;
