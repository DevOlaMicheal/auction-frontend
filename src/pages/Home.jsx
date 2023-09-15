import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { useFetch } from '../hooks/useFetch'
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeroHome from '../components/HeroHome';
import PropertyList from '../components/PropertyList';

function Home() {

  const priceFormarter = (price) => {
    const formattedPrice = price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })
    // console.log(formattedPrice)
    return formattedPrice;
  }

  const {properties, pending, error} = useFetch("api/auction/all-properties")
  console.log(properties)
  

  return (
    <div>
      <HeroHome />
       <div className='container mx-auto px-2 my-4'>

        <div className="filters flex gap-2 mb-4 sticky top-0">
        <div className='py-2 px-4 rounded-full border border-primary bg-primary text-white'>All</div>
          <div className='py-2 px-4 rounded-full border border-primary'>Houses</div>
          <div className='py-2 px-4 rounded-full border border-primary'>Lands</div>
          <div></div>
        </div>
      {error && (<div> {error} </div>)}
      {pending && (
        <div>loading data, Please wait...</div>
      )}
      
      <div className='grid grid-flow-row gap-3 lg:grid-cols-[1fr_4fr]'>
          <div className="bg-white mt-2 lg:max-h-[28rem] lg:shadow-md lg:sticky lg:top-5"></div>
        <PropertyList properties={properties} priceFormarter={priceFormarter} />

      </div>
      
    

    </div>
    </div>
   
  )
}

export default Home