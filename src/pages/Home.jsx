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
    console.log(formattedPrice)
    return formattedPrice;
  }

  const {properties, pending, error} = useFetch("api/auction/all-properties")
  console.log(properties)
  

  return (
    <div>
      <HeroHome />
       <div className='container mx-auto px-2 my-4'>
      {error && (<div> {error} </div>)}
      {pending && (
        <div>loading.....</div>
      )}
        <PropertyList properties={properties} priceFormarter={priceFormarter} />
      
    

    </div>
    </div>
   
  )
}

export default Home