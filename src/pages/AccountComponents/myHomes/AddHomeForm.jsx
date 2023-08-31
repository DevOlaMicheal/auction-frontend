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

    
    <div className="container mx-auto py-4">
      <Accountheader />
      {/* <Accountheader /> */}
      <form className="px-2" onSubmit={handleSubmit}>
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
        <UploadImages images={images} setImages={setImages} />
        <label htmlFor="description" className="labelfornew">
          Description
          <div className="text-sm text-gray-400">
            *Add a detailed Description about your appartment
          </div>
        </label>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
         />
        <Features features={features} setFeatures={setFeatures} />

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
        
        <button className="primary">Auction</button>
      </form>
    </div>
  );
}

export default AddHomeForm;
