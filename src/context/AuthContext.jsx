import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

export const userContext = createContext()

export const userReducer = (state, action) => {

    switch(action.type){
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGOUT':
            return {user: null}
        default:
            return state
    }

}

export const UserContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(userReducer, {
        user: null
    })

    const [ready, setReady] = useState(false)

    useEffect(() => {
        
        const user = JSON.parse(localStorage.getItem('accessToken'))
        setReady(true)

        if(user) {
            dispatch({type: "LOGIN", payload: user})

        }
           

    }, [])

    console.log(state)

    return(
        <userContext.Provider value={{...state, dispatch, ready, setReady}}>
            {children}
        </userContext.Provider>
    )

}