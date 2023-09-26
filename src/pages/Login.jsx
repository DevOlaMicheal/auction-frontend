import googleimg from '../assets/google.png'
import facebookimg from '../assets/fb.png'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { useRegisterandLogin } from '../hooks/useRegisterandLogin';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, pending} = useRegisterandLogin()

    const handlelogin = async (e) => {
        e.preventDefault()
        
        login(email, password)
    }


  return (
    <div className='auth-form h-screen p-5 flex items-center justify-around'>
        <div className="mb-25 rounded-md max-w-md bg-white shadow-sm border-y-primary border-y-2">
            <div className='py-2 my-2'>

            </div>
            <form onSubmit={handlelogin} className='p-5'>
                <div className="text-2xl font-[600] p-2 text-center text-gray-700">Sign in to your <span className=''>Auction</span> account!</div>
                { error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4" role="alert">
                <span className="block sm:inline">{error}.</span>
                
              </div>
              
             )}

                <input className='input-primary' type="email" name="" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}  />
                <input className='input-primary' type="password" name="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />

                <button className="authbtn" disabled={pending}>{!pending ? 'login' : 'processing..'}</button>
                
                <div className='text-center'><span className='text-center'>or</span></div>
                <button className="socialauth">
                    <div className="icon"> <img src={googleimg} className='h-5' alt="" /> </div>
                    <div>continue with Google</div>
                    <div></div>
                </button>

                <button className="socialauth">
                    <div className="icon"><img src={facebookimg} className='h-5' alt="" /></div>
                    <div>continue with facebook</div>
                    <div></div>
                </button>

                <div className="text-sm my-2">I dont have an account? <Link to='/register' className='underline font-bold'>Signup</Link></div>
            </form>
        </div>
    </div>
  )
}

export default Login