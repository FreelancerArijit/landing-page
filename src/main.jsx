import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import Location from './pages/Location.jsx'
import Navbar from './components/Navbar.jsx'


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Navbar />
 <Routes>

  <Route path='/' element={<App />} />
  <Route path='/pages/contact' element={<Contact />} />
  <Route path='/pages/location' element={<Location />} />
  
 </Routes> 
 </BrowserRouter>
)
