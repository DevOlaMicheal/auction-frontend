import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { useFetch } from '../hooks/useFetch'
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeroHome from '../components/HeroHome';
import PropertyList from '../components/PropertyList';
import { useUserContext } from '../hooks/useuserContext';

function Home() {

  const priceFormarter = (price) => {
    const formattedPrice = price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })
    // console.log(formattedPrice)
    return formattedPrice;
  }

  const {properties, pending, error} = useFetch("api/auction/all-properties")
  console.log(properties)
  
  const categories = []

  return (
    <div>
      {/* <HeroHome /> */}
       <div className='container mx-auto px-2 my-6 min-h-screen'>

        <div className="filters flex gap-2 mb-4 sticky">
        <div className='py-2 px-4 rounded-full border border-primary bg-primary text-white'>All</div>
          <div className='py-2 px-4 rounded-full border border-primary'>On sale</div>
          <div className='py-2 px-4 rounded-full border border-primary'>Rent</div>
          <div></div>
        </div>
      {error && (<div> {error} </div>)}
      {pending && (
        <div>loading data, Please wait...</div>
      )}
      
      <div className='gap-3 grid lg:grid-cols-[1fr_4fr]'>
        
        <div className='hidden bg-white max-h-[30rem] shadow-md p-4 sticky top-24 lg:block'>
        <div className="flex flex-col gap-4">
                  <div className="categories">
                    <h2 className="text-lg font-semibold">Categories</h2>
                    <div className="flex gap-4 pl-4 py-2">
                      <input type="checkbox" className="bg-primary" name="" id="" />
                      <div className="">All</div>
                    </div>

                    <div className="flex gap-4 pl-4 pb-2">
                      <input type="checkbox" name="" id="" />
                      <div className="">Student Apartment</div>
                    </div>

                    <div className="flex gap-4 pl-4 pb-2">
                      <input type="checkbox" name="" id="" />
                      <div className="">Bungalow</div>
                    </div>

                    <div className="flex gap-4 pl-4 pb-2">
                      <input type="checkbox" name="" id="" />
                      <div className="">Self Con</div>
                    </div>
                  </div>

                    <div> 
                    <h2 className="text-lg font-semibold">Price</h2>
                        <div className='grid grid-cols-3 gap-1'>
                          <input type="text" className='border-b border-primary text-center' placeholder='Min' />
                          <p className='text-center'>To</p>
                          <input type="text" className='border-b border-primary text-center' placeholder='Max' />

                        </div>
                    </div>


              </div>

        </div>
          
            
          
          <div className='max-w-2/3'>
          <PropertyList properties={properties} priceFormarter={priceFormarter} />
          <PropertyList properties={properties} priceFormarter={priceFormarter} />
          <PropertyList properties={properties} priceFormarter={priceFormarter} />

          </div>
        

      </div>
      
    

    </div>
    </div>
   
  )
}

export default Home