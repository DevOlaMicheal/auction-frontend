import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import PropertyInfo from '../components/PropertyInfo'


function PropertyDetails() {

  const {id} = useParams()
  const {properties, pending, error} = useFetch(`api/auction/property/${id}`)


  return (
    <div className='container mx-auto my-5'>

      {error && (<div> {error} </div>)}
      {pending && (
        <div>loading.....</div>
      )}

        <div>

        {properties && <PropertyInfo properties={properties} /> }
        
        </div>

        {properties && (
      <div className='grid grid-cols-[2fr_1fr] mt-4 PX-3 overflow-hidden gap-2 '>
          <div>
            <img src={`http://localhost:4000/${properties.images[0]}`} className="w-full max-h-64 aspect-square object-cover lg:max-h-[40rem]" alt="" />
          
          </div>
          <div className='grid gap-2'>
          <img src={`http://localhost:4000/${properties.images[1]}`} alt="" />
          <img src={`http://localhost:4000/${properties.images[2]}`} alt="" />


          </div>
      </div>
    )}

    </div>
  )
}

export default PropertyDetails