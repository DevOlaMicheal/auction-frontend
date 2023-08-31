import Nav from "./components/Nav"
import logo from '../src/assets/logo.png'
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import axios from 'axios'
import { createContext } from "react"
import UserAccount from "./pages/UserAccount"
import { useUserContext } from "./hooks/useuserContext"
import MyAccomodations from "./pages/MyAccomodations"
import ProfilePage from "./pages/AccountComponents/ProfilePage"
import AddHomeForm from "./pages/AccountComponents/myHomes/AddHomeForm"
import Saved from "./pages/Saved"
import Footer from "./components/footer"

export const AppContext = createContext()

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true

function App() {


  return (

    <div className="font-primary">

      <AppContext.Provider value={{logo}}>
      <BrowserRouter>
      
        <Nav />

      <Routes>
        
        
        <Route index element={<Home />} />
        <Route path="/all-properties/:id" element={<Home />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/account' element={<ProfilePage />} />
        <Route path='/account/saved' element={<Saved />} />
        <Route path='/account/myproperties' element={<MyAccomodations />} />
        <Route path='/account/myproperties/new' element={<AddHomeForm />} />




      </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    
    {/* <Footer /> */}
    </div>

  )
}

export default App
