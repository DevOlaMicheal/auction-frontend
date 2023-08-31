import {useState} from 'react'
import axios from "axios";
import loading from '../../../assets/loading1.svg'

function UploadImages({images, setImages}) {
    const [imageLink, setImageLink] = useState("");
    const [pending, setPending] = useState(false)

    const addImgBylink = async (e) => {
        e.preventDefault()
        setPending(true)
        const {data} = await axios.post('/api/auction/upload-by-link', {
            link: imageLink
        })
        setPending(false)
        
        setImages(prev => {
            return [...prev, data]
        })
    
        setImageLink('')
        
      }
    
      const uploadFromDevice = async (e) => {
        const files = e.target.files
        const data =  new FormData();
        for(let i = 0; i < files.length; i++) {
          data.append('images', files[i])
        }    
        console.log(files)
        const {data:filename} = await axios.post('/api/auction/upload-from-device', data, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        setImages(prev => {
          return [...prev, ...filename]
        })
    
        console.log(filename)
    
      }

      const filterImage = (e, imgName) => {
        e.preventDefault()
        setImages([...images.filter(newimages => newimages !== imgName)])
      }

      const setImageAsFirst = (e, imgName) => {
        setImages([imgName, ...images.filter(imgs => imgs !== imgName)])
      }
  return (
    <div>
        <label htmlFor="adress" className="labelfornew">
          Images
        </label>
        <div className="text-sm text-gray-400">
          *upload multiple images of the property
        </div>

        <div className="flex gap-4 items-center justify-center">
          <input
            type="text"
            className="py-2"
            placeholder="https://img-url"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
          />

          <div className="">
          <button className="bg-gray-300 px-6 py-3 rounded-lg relative bottom-2" disabled={pending} onClick={addImgBylink}>{!pending ? "add" : '...'}</button>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-3 gap-2 mb-4 lg:grid-cols-6">
          {images && images.map(image => (

        
              <div className="h-32 flex relative" key={image + Math.random(0, 9)}>
              
                <img className="rounded-lg h-15 w-full object-cover" src={'http://localhost:4000/'+image} alt="" /> 
                {/* {image} */}

                <button className="cursor-pointer absolute bottom-2 right-2 bg-black opacity-60 text-white p-2 rounded-2xl" onClick={(e) => filterImage(e,image)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
      
                </button>

                {image === images[0] && (
                <button className="cursor-pointer absolute bottom-2 left-2 bg-red-900 opacity-60 text-white p-2 rounded-2xl" onClick={(e) => setImageAsFirst(e,image)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
      
                </button>
                )   
                }

                {image !== images[0] && (
                  <button className="cursor-pointer absolute bottom-2 left-2 bg-black opacity-60 text-white p-2 rounded-2xl" onClick={(e) => setImageAsFirst(e,image)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
        
                  </button>
                )}
       
              </div>
          ))}

          <label className="border items-center flex gap-2 justify-center rounded-lg h-32 max-h-30 cursor-pointer">
            <input type="file" className="hidden" onChange={uploadFromDevice} multiple />
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
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            Upload
          </label>
        </div>

    </div>
  )
}

export default UploadImages