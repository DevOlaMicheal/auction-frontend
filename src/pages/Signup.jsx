import googleimg from '../assets/google.png'
import facebookimg from '../assets/fb.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import { useRegisterandLogin } from '../hooks/useRegisterandLogin';

function Signup() {


    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {register, error, pending} = useRegisterandLogin()

    const handleSignup = async (e) => {
        e.preventDefault()
        
        register(firstname, lastname, email, password)
    }

  return (
    <div className='min-h-screen auth-form p-5 flex items-center justify-around'>
        <div className="rounded-md max-w-md bg-white shadow-md border-y-primary border-y-2">
        
            <form action="" className='p-5' onSubmit={handleSignup}>
                <div className="text-xl font-semibold p-2 text-center">Create an Acccount!</div>
                { error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4" role="alert">
                <span className="block sm:inline">{error}.</span>
                
              </div>
              
             )}

                <input className='input-primary' type="text" name="" placeholder='Firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                <input className='input-primary' type="text" name="" placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                <input className='input-primary' type="email" name="" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}  />
                <input className='input-primary' type="password" name="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />

                <button className="authbtn" disabled={pending}>{!pending ? 'signup' : 'processing..'}</button>
                <div className='text-center'><span className='text-center'>or</span></div>
                <button className="socialauth" type='button'>
                    <div className="icon"><img src={googleimg} className='h-5' alt="" /></div>
                    <div>continue with Google</div>
                    <div></div>
                </button>

                <button className="socialauth" type='button'>
                    <div className="icon"><img src={facebookimg} className='h-5' alt="" srcset="" /></div>
                    <div>continue with facebook</div>
                    <div></div>
                </button>

                <div className="text-sm my-2">I already have an account? <Link to='/login' className='underline font-bold'>login</Link></div>
            </form>
        </div>
    </div>
  )
}

export default Signup