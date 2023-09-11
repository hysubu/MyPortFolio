import React, { useEffect } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import  { useRef } from 'react';

const Header = ({ menuOpen, setMenuOpen }) => {
  const btnRef = useRef(null);


  // useEffect (()=>{
  //   const btn = document.querySelector(".btn-icon");
  //   if (btn) {
  //     btn.style.backgroundColor = "red";
  //   }
  // })

  return (
<>

    <nav>
    <NavContent setMenuOpen={setMenuOpen} />
    <button className="btn-icon"onClick={() => setMenuOpen(!menuOpen)}>
     <AiOutlineMenu />
   </button>
  </nav>

 
    {/* // <nav>
    //   <NavContent setMenuOpen={setMenuOpen}/>
    //   <button className='btn-icon' onClick={() => setMenuOpen(true)}>
    //     <AiOutlineMenu/>
    //   </button>
    // </nav> */}
    </>
  )
}



export const NavContent = ({ setMenuOpen }) => {
  return (
    <>
 <h2>Subrat.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMenuOpen(false)} href="#testimonial">
        Testimonial
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:official.6packprogrammer@gmail.com">
      <button>Email</button>
    </a>
    </>
  )
}




export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Header