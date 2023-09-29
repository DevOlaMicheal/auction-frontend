import React, { useState } from 'react';
import { useUserContext } from '../hooks/useuserContext';
import profileImg from "../assets/faith.jpg";

const UserBio = () => {
  const { user} = useUserContext();

  const [disabled, setDisabled] = useState(true)

  const handleDisabled = () => {
    setDisabled(!disabled)
  }

  const [firstname, setFirstname] = useState(user.firstname)
  const [lastname, setLastname] = useState(user.lastname)
  const [email, setEmail] = useState(user.email)
  const [bio, setBio] = useState()
  const [call, setCall] = useState()
  const [whatsapp, setWhatsapp] = useState()



  const changeDp = (e) => {
    const file = e.target.files

    console.log(file);
  }
    
    return (
        <div className="bg-white w-full p-6 rounded shadow-sm overflow-auto">
          <div className="">
            <div className="flex items-center justify-center">
              <div className="relative w-36 h-36 overflow-hidden rounded-full border-2 border-gray-300">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full object-cover"
                />
                <label className="absolute inset-0 flex items-end justify-center p-4 bg-black bg-opacity-25">
                  <input type="file" className='hidden' onChange={changeDp} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-7 text-white text-2xl font-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </label>
              </div>
            </div>

            <div className="flex flex-col justify-center border-t border-b my-4 py-4">
              <div className="font-semibold text-slate-700 mb-2 text-center">
                Logged in as {user.email}
              </div>
            </div>

            <div className="my-3">
            <div className="flex justify-between items-center my-3">
            <h4 className="text-lg font-semibold text-slate-800">Your bio</h4>
             
              <div>
                <button className="py-2 px-4 bg-primary text-white rounded-full" onClick={handleDisabled}>
                   {disabled ? 'Edit Profile' : 'Save changes'}
                </button>
              </div>
              </div>
            <div className="">
             
          

              <div className="text">

               <form className='flex flex-col gap-6'>

              
                <input type="text" className="bio" value={firstname} onChange={(e) => setFirstname(e.target.value)}  disabled={disabled} />
                <input type="text" className="bio" value={lastname} onChange={(e) => setLastname(e.target.value)}  disabled={disabled} />

                
                <input type="text" className="bio" value={email} onChange={(e) => setEmail(e.target.value)}  disabled={disabled} />

                <input type="text" className="bio" value={bio} onChange={(e) => setBio(e.target.value)} placeholder='Short bio e.g house owner/house agent/house hunting'  disabled={disabled} />

                
                <input type="number" className="bio" value={call} onChange={e => setCall(e.target.value)} placeholder="Add your Call phonenumber" disabled={disabled} />
                <input type="text" className="bio" value={whatsapp} placeholder="Add Your whatsapp phonenubmer" disabled={disabled} />
                <input type="password" className="bio"  placeholder="Password" disabled={disabled} />


               </form>
              </div>

            </div>
            </div>
          </div>
        </div>
    );
}

export default UserBio;
