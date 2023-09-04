import { useState, useEffect } from "react";
import Features from "./Features";
import axios from "axios";
import UploadImages from './UploadImages'
import Accountheader from "../Accountheader";
import {useNavigate} from 'react-router-dom'



function AddHomeForm() {
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [auctionType, setAuctionType] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const {data} = await axios.post('/api/auction/property', {
      title, adress, images, description, features, extraInfo, auctionType, price
    })

    navigate('/account/myproperties')
    console.log(data)
  }


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
    <div className="container mx-auto py-4">
      <Accountheader />
      {/* <Accountheader /> */}

    <div className="mx-auto bg-white shadow-md p-4 rounded md:w-2/3">
      <div className="flex pb-4 px-4 justify-between">
        <div className="border border-primary rounded-full flex py-2 px-4 font-semibold bg-primary text-white">1</div> 
        {/* <div className="border-b-2"></div> */}
        <hr className="boder" />
        <div className="opacity-50 border border-primary rounded-full flex py-2 px-4 font-semibold">2</div>
        <div className="opacity-50 border border-primary rounded-full flex py-2 px-4 font-semibold">3</div>
        
      </div>

      <form className="px-2" onSubmit={handleSubmit}>

        <div className="grid md:grid-cols-2 gap-3 my-6">

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
        
        <label htmlFor="adress" className="labelfornew">
          Property adress
        </label>
        <input
          type="text"
          placeholder="Adress, eg No 42 Molete street jos"
          className="mb-4"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
        </div>

        <div className="border border-black w-full">

        </div>
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

         <div className="flex justify-between px-2">
         <button className="border border-slate-700 py-3 px-6 rounded">Back</button>
         <button className="border border-primary py-3 px-6 text-primary font-semibold rounded cursor-not-allowed" disabled="true">proceed</button>

         </div>
      </form>

      </div>
    </div>
    </div>
  );
}

export default AddHomeForm;
