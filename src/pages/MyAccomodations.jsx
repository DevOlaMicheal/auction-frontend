import { Link, useParams } from "react-router-dom";
import AddHomeForm from "./AddHomeForm";
import Accountheader from "./AccountComponents/Accountheader";
import { useEffect, useState } from "react";
import axios from "axios";

import loading from '../assets/loading1.svg'

function MyAccomodations() {
  const { action } = useParams();
  const [properties, setProperties] = useState([]);
  const [pending, setPending] = useState(true)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
    const getProps = async () => {
      setError(null)
      try{
        const { data } = await axios.get("/api/auction/property");
        // console.log(response)
        setPending(false)
        setProperties(data);
        console.log(properties)
      }catch(err){
        setPending(false)
        setError(err.message)
        console.log(err.message)
      }
      
    };

    getProps();
  }, []);
  
const isOpen = () => {
  setOpen(!open)
}

const handleFilter = (type) => {
  if(type === 'all') {
    setProperties([...properties])
  }else {
    setProperties(properties.filter(property => property.auctionType === type))
  }

  
}

  return (
    <div className="container mx-auto px-3">
      <Accountheader />

      <div className="flex justify-between">

        <div>
          All Properties ({properties.length})

        </div>
        <Link
          to={"/account/myproperties/new"}
          className="bg-primary inline-flex gap-2 py-2 px-6 rounded-lg text-white font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new
        </Link>
      </div>

   
        
      <section className="added-prop mt-10">

        <div className="flex-row">
        <button className="flex gap-1 items-center border border-gray-500 rounded-lg py-2 px-4" onClick={isOpen}>filters
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
      </svg>
      </button>
      
      {open && (
        
        <div className="dropdown border p-2 w-20 rounded-md bg-gray-100">
          <ul>
            <li className="cursor-pointer border-b" onClick={() => {handleFilter('all')}}>All</li>
            <li  className="cursor-pointer border-b" onClick={() => {handleFilter('Rent')}}>Rent</li>
            <li className="cursor-pointer border-b" onClick={() => {handleFilter('sale')}}>For sale</li>
          </ul>
        </div>
      )}

        </div>
       
  
      {pending && (
        <div className="flex justify-center items-center">
          <img src={loading} alt="" />
        </div>
      )}

        <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {!error && properties.length > 0 &&
          properties.map((property) => (
            <div
              className="md:max-h-[15rem] overflow-hidden cursor-pointer property-card bg-white shadow-md flex flex-col md:items-center gap-10 rounded-lg my-4 md:flex-row "
              key={property._id}
            >
              <div className="md:w-2/3 md:max-h-full">
                <img src={`http://localhost:4000/${property.images[0]}`} className="h-52 overflow-hidden rounded w-full object-cover" alt="" />
              </div>
              <div className="px-4">
                <h2 className="text-lg font-secondary font-semibold">{property.title}</h2>

                <div className="my-2 flex items-center gap-4 text-primary font-semibold">
                <div className='flex items-center gap-2'>
                {/* <div>{property.auctionType}</div> */}
                <Link className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>

            </Link>

              <p>24</p>
            
            </div>

            <div className="border-r border-r-primary h-6"></div>
            <div>{property.adress}</div>
          
                </div>

                <div className="my-2 flex">
                  
                </div>

                <div>Added: {property.createdAt}, {property.auctionType} </div>

                              </div>

              <div></div>
            </div>
          ))}
</div>

          {!pending && properties.length === 0 && (
            <div className="flex items-center justify-center h-52 grow">
            <div className="flex justify-center items-center p-5 text-2xl font semi-bold text-gray-700">You have no property up for sale/rent</div>
            </div>
          )}


      </section>
    </div>
  );
}

export default MyAccomodations;
