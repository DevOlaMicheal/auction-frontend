
import { useContext, useState } from "react"
import { userContext } from "../context/AuthContext"

export const useUserContext = () => {
    
  const context = useContext(userContext)

  if(!context) {
    throw Error('use user context can only be used in userContext')
  }

  return context
}