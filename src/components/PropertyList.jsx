import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import axios from 'axios'


function PropertyList({properties, priceFormarter}) {
  // const uri = "https://auction-testv1.onrender.com/" || "http://localhost:4000/"

  const {properties: bookmarks, pending, error} = useFetch(`api/auction/bookmark`)

  const userBookmarks = {};

  // bookmarks.forEach(bookmark => {
  //   userBookmarks[bookmark.productId] = true
  // });
  const uri = "http://localhost:4000/"

  const handleBookmark = async (id) => {
    
    try{
      const bookmark = await axios.post('api/auction/bookmark', {
        property_id: id
      })

      console.log(bookmark)
    }catch(error) {
      console.log(error)
    }


  }

  const truncateText = (text, max) => {
    const words = text.split(' ')
    if(words.length > max) {
      return words.slice(0, max).join(' ') + '...'
    }

    return text
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 lg:grid-cols-4 font-tertiary">
    
        {properties && properties.map((property) => (
          <Link to={`/properties/${property._id}`} className='relative transition duration-300 transform hover:scale-105 cursor-pointer bg-white shadow-md rounded-md' key={property._id}>
          <div className='absolute bottom-[110px] right-2 bg-white shadow-md h-10 w-10 rounded-full flex items-center justify-center' onClick={() => handleBookmark(property._id)}>
                {/* <div>{property.auctionType}</div> */}
                <Link className='text-primary cursor-pointer'>

                  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>

            </Link>
            
            </div>
            <div className="">
            
            
            <img src={uri + property.images[0]} className="flex rounded-t-md w-full object-cover aspect-square max-h-40" alt="" />
            </div>

            <div className="px-4 py-2">
              <div className='font-semibold text-secondary pt-1 lowercase'>{priceFormarter(property.price)}</div>

            <div className='text-primary uppercase'>{truncateText(property.title, 3)}</div>
              <p className='flex gap-2'>
                {property.adress}
              </p>
            </div>

          </Link>
        ))}     

    </div>
  )
}

export default PropertyList