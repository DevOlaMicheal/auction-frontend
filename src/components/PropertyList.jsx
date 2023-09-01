import { Link } from "react-router-dom"

function PropertyList({properties, priceFormarter}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 lg:grid-cols-4">
    
        {properties && properties.map((property) => (
          <Link to={`/properties/${property._id}`} className='transition duration-300 transform hover:scale-105 cursor-pointer bg-gray-300 rounded-md' key={property._id}>

            <div className="relative">
            <div className='absolute bottom-0 w-full flex justify-between bg-black bg-opacity-50 px-8 py-1 text-white rounded-se-lg'>
                <div>{property.auctionType}</div>
                <div className='text-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>

            </div>
            
            </div>
            
            <img src={`http://localhost:4000/${property.images[0]}`} className="flex rounded-t-md w-full object-cover aspect-square max-h-56" alt="" />
            </div>

            <div className="px-4">

            <div className='font-bold text-gray-800 pt-2 uppercase'>{property.title}</div>
            <div className='flex gap-2'>
  
              {property.adress}</div>
              <div className='font-semibold text-gray-800 pt-1'>{priceFormarter(property.price)}</div>
            </div>

          </Link>
        ))}     

    </div>
  )
}

export default PropertyList