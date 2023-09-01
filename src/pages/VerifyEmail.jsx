import googleimg from '../assets/google.png'
import facebookimg from '../assets/fb.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import { useRegisterandLogin } from '../hooks/useRegisterandLogin';

function VerifyEmail() {


    const [code, setCode] = useState('');
    const {verifyEmail, error, pending} = useRegisterandLogin()

    const handleVerify = async (e) => {
        e.preventDefault()
        verifyEmail(code)
        // register(firstname, lastname, email, password)
    }

  return (
    <div className='container max-w-screen-sm login-form h-screen p-5 flex flex-col items-center justify-around mx-auto md:max-w-screen-md'>
        <div className="my-10 rounded-md max-w-md pb-56">
            <div className='py-2 my-2 border-b'>
            <h1 className='text-1xl font-semibold text-center'>VERIFY EMAIL</h1>

            { error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4" role="alert">
                <strong className="font-bold"></strong>
                <span className="block sm:inline">{error}.</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  
                </span>
              </div>
              
             )}

            </div>
            <form action="" className='p-5' onSubmit={handleVerify}>
                <div className="text-xl font-semibold p-2 text-gray-600">Youre almost there, please input the verification code sent to your mail</div>
                <input type="text" name="" placeholder="Verification Code" value={code} onChange={(e) => setCode(e.target.value)}  />
                <button className="authbtn" disabled={pending}>{!pending ? 'verify' : 'processing..'}</button>
                
            </form>
        </div>
    </div>
  )
}

export default VerifyEmail