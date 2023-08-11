import googleimg from '../assets/google.png'
import facebookimg from '../assets/fb.png'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className=' container max-w-screen-sm creen login-form h-screen p-5 flex flex-col items-center justify-around mx-auto md:max-w-screen-md'>
        <div className="mb-25 border rounded-md max-w-md">
            <div className='py-2 my-2 border-b'>
            <h1 className='text-1xl font-semibold text-center'>Log in or signup</h1>

            </div>
            <form action="" className='p-5'>
                <div className="text-xl font-semibold p-2">Welcome to olabnb!</div>

                <input type="Firstname" name="" placeholder='Email' />
                <input type="Lastname" name="" placeholder="Password" />
                <input type="email" name="" placeholder='Email' />
                <input type="password" name="" placeholder="Password" />

                <button className="authbtn">login</button>
                <div className='text-center'><span className='text-center'>or</span></div>
                <button className="socialauth">
                    <div className="icon"><img src={googleimg} className='h-5' alt="" /></div>
                    <div>continue with Google</div>
                    <div></div>
                </button>

                <button className="socialauth">
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