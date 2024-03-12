import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Programs from './components/Programs/Programs.jsx'
import JoinUs from './components/Join/JoinUs.jsx'
import Adopt from './components/Adopt/Adopt.jsx'
// import AdoptDog from './components/Adopt/AdoptDog.jsx'
import Accordian from './components/Accordian/Accordian.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import Awareness from './components/Awareness/Awareness'
import Medical from './components/Medical/Medical'
import Rehoming from './components/Rehoming/Rehoming'
import Feeding from './components/Feeding/Feeding'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element ={ <App/> } >
      <Route path="" element ={ <Home/> } />
      <Route path="about" element={ <About/>} />
      <Route path="programs" element={ <Programs/>} />

      <Route path="joinus" element={ <JoinUs/>} />

      <Route path="adopt" element={ <Adopt/>} />
      <Route path="faq" element={ <Accordian/>} />
      <Route path="contact" element={ <ContactUs/>} />
      <Route path="feeding" element={ <Feeding/>} />
      <Route path="awareness" element={ <Awareness/>} />
      <Route path="medical" element={ <Medical/>} />
      <Route path="rehoming" element={ <Rehoming/>} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
