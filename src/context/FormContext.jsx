import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const formContext = createContext()

export const FormContextProvider = ({children}) => {

    
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [auctionType, setAuctionType] = useState("");
  const [price, setPrice] = useState("");

  const contextval = {
    title,
    adress,
    images,
    description,
    features,
    extraInfo,
    auctionType,
    price,
    setTitle,
    setAdress,
    setImages,
    setDescription,
    setFeatures,
    setExtraInfo,
    setAuctionType,
    setPrice
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("/api/auction/property", {
      title,
      adress,
      images,
      description,
      features,
      extraInfo,
      auctionType,
      price,
    });

    navigate("/account/myproperties");
    console.log(data);
  };

    return (
        <formContext.Provider value={{...contextval, handleSubmit}}>
            {children}
        </formContext.Provider>
    )
}

// consume

export const useFormContext = () => {
    const context = useContext(formContext);

    return context;
}