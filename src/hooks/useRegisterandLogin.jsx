import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from './useuserContext'
export const useRegisterandLogin = () => {

    const { dispatch, ready, setReady } = useUserContext()
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const register = async ( firstname, lastname, email, password) => {
    setPending(true)
    setError(null)
    try {
        const response  = await axios.post('/api/auction/signup', {
            firstname,
            lastname,
            email,
            password
        })

        const user = response.data
        
        setPending(false)
        // console.log(user)
        dispatch({type: 'LOGIN', payload: user})
        navigate('/account')

        // console.log(user)
    } catch (error) {
        const errormsg = error.response.data
        setError(errormsg.error)
        setPending(false)

    }

    }

    const login = async ( email, password) => {
        setPending(true)
        setError(null)
        try {
            const response  = await axios.post('/api/auction/signin', {
                email,
                password
            })
    
            const {user} = response.data
        

            setPending(false)
            // console.log(user)
            dispatch({type: 'LOGIN', payload: user})
            setReady(true)
            navigate('/account')
        
            
        
        } catch (error) {
            const {data} = error.response
            // console.log(data)
            setError(data.error)
            setPending(false)
    
        }
    
        }
    
    return {register, login, error, pending}
}