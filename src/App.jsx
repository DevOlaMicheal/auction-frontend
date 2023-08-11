import Nav from "./components/Nav"
import logo from '../src/assets/logo.png'
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"

function App() {

  return (

    <div className="min-h-screen">
      <BrowserRouter>
      <Nav logo={logo} />
      <Routes>

        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />


      </Routes>
      </BrowserRouter>
    
    </div>

  )
}

export default App
