import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { useFetch } from '../hooks/useFetch'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

  const [properties, setProperties] = useState([]);
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)

  const priceFormarter = (price) => {
    const formattedPrice = price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })
    console.log(formattedPrice)
    return formattedPrice;
  }
  useEffect(() => {

      const f = async () => {
          try{
              const { data } = await axios.get("api/auction/all-properties");
              // console.log(response)
              setPending(false)
              setProperties(data.properties);
              console.log(properties)
              // console.log(data)
            }catch(err){
              setPending(false)
              setError(err.message)
              console.log(err.message)
            }
         
      }
      
      f()
      console.log(properties)

  }, []);

  console.log(properties)
  

  return (
    <div className='container mx-auto px-2 my-4 cursor-pointer'>
      {/* <Nav /> */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 lg:grid-cols-4">
        {properties.length > 0 && properties.map((property) => (
          <Link to={`/properties/${property._id}`} className='transition duration-300 transform hover:scale-105'>

            <div className="relative">
            <div className='absolute bottom-0 right-0 bg-black opacity-50 px-8 py-1 text-white rounded-se-lg'>{property.auctionType}</div>
            <div className='absolute top-1 left-2 text-primary'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8  cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>

            </div>
            <img src={`http://localhost:4000/${property.images[0]}`} className="flex rounded-lg w-full object-cover aspect-square" alt="" />
            </div>
            <div className='font-bold text-gray-800 pt-2'>{property.title}</div>
            <div className='flex gap-2'>
  
              {property.adress}</div>
              <div className='font-semibold text-gray-800 pt-1'>{priceFormarter(property.price)}</div>
          </Link>
        ))}
      </div>
    

    </div>
  )
}

export default Home