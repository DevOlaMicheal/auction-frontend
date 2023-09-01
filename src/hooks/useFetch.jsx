import { useEffect, useState } from "react";
import axios from "axios";
export const useFetch = (url) => {

    const [properties, setProperties] = useState();
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const f = async () => {
            try{
                const { data } = await axios.get(url);
                console.log(data)
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
    }, [url]);
    // setError(null)
    
    
  
      return {properties, pending, error}
}