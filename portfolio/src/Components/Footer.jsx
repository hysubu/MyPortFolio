import React from 'react'
import {AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp} from "react-icons/ai"
import img from "../Assets/footerprofile.jpg"

const Footer = () => {
  return (
    <footer>
    <div >
      <img src={img} alt="" />
      <h2>Subrat Mohanty</h2>
      {/* <p>Motivation Is Temprary , But disipline last forever </p> */}
      <p>If You are Developer First Develope Yourself</p>
      
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href=""><AiFillYoutube/></a>
          <a href=""><AiFillInstagram/></a>
          <a href=""><AiFillGithub/></a>
        </article>
      </aside>
      <a href=""><AiOutlineArrowUp/></a>
    </footer>

  )
}

export default Footer