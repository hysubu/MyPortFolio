import "./Styles/app.scss"
import "./Styles/header.scss"
import Header, { HeaderPhone } from './Components/Header';
import { Home } from "./Components/Home";
import Work from "./Components/Work";
import Timeline from "./Components/Timeline";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import { useState , useEffect } from "react";
function App() {
  const [menuOpen , setMenuOpen] = useState(false)
  console.log(menuOpen)



  return (
<>
<HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
<Header  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
<Home/>
<Work/>
<Timeline/>
<Services/>
<Testimonial/>
<Contact/>
<Footer/>
<Toaster
 position="bottom-center" reverseOrder={false}/>
</>

 
  
)}


export default App;
