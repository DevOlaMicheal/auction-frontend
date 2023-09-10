import { useState, useEffect } from "react";
import Features from "./Features";
import axios from "axios";
import UploadImages from "./UploadImages";
import Accountheader from "../Accountheader";
import { useNavigate } from "react-router-dom";

function AddHomeForm() {
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [auctionType, setAuctionType] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("/api/auction/property", {
      title,
      adress,
      images,
      description,
      features,
      extraInfo,
      auctionType,
      price,
    });

    navigate("/account/myproperties");
    console.log(data);
  };

  // useEffect(() => {
  //   // https://gps-naija.onrender.com/states

  //   const fetchStates = async () => {
  //     const {data} = await axios.get('https://gps-naija.onrender.com/states', {
  //       headers: {'Content-Type': 'application/json'}
  //     })
  //   }

  // }, [])

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="container mx-auto p-3">
        <Accountheader />
        {/* <Accountheader /> */}

        <div className="mx-auto bg-white shadow-md px-2 py-4 rounded-md md:w-2/3">
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
          <div className="border-t"></div>
          <form className="px-2" onSubmit={handleSubmit}>
            <div className="grid- md:grid-cols-2 gap-3 my-6">
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
                </div>
                <label className="labelfornew">Price</label>
                <input
                  type="number"
                  name=""
                  id=""
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />


              <Features features={features} setFeatures={setFeatures} />

              </div>
              <div className=""></div>
            </div>

            {/* 
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
         */}
            {/* <UploadImages images={images} setImages={setImages} />
        <label htmlFor="description" className="labelfornew">
          Description
          <div className="text-sm text-gray-400">
            *Add a detailed Description about your appartment
          </div>
        </label>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
         /> */}
            {/* <Features features={features} setFeatures={setFeatures} />


        <div className="flex gap-3 w-full">
          <div className='w-1/2'>
            <label className='labelfornew'>Auction type</label>
            <select name="" id="" value={auctionType} onChange={(e) => setAuctionType(e.target.value)}>
              <option value="" disabled>Select type</option>
              <option>Rent</option>
              <option>For Sale</option>
            </select>
          </div>

          <div className="w-1/2">
            <label className="labelfornew">Price</label>
            <input type="number" name="" id="" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
        </div>
         */}

            <div className="flex justify-between px-2 border-t pt-6">
              <button className="border border-slate-700 py-3 px-6 rounded">
                Back
              </button>
              <button
                className="border border-primary py-3 px-6 text-primary font-semibold rounded cursor-not-allowed"
                disabled="true"
              >
                proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddHomeForm;
