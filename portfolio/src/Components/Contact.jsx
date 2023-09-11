import React, { useState } from 'react'
import vg from "../Assets/vg.png"
import { toast } from 'react-hot-toast'
import {motion} from "framer-motion"
import {addDoc , collection} from "firebase/firestore"
import { db } from '../Firebase'

const Contact = () => {

  const[name , setName] = useState("")
  const[email , setEmail] = useState("")
  const[message , setMessage] = useState("")
  const[disableBtn , setDisableBtn] =useState(false)

  const submitHandler = async(e) => {
    e.preventDefault();
    setDisableBtn(true)
    try {
      await addDoc(collection(db,"contacts"),
      {name,
      email,
      message
    });
    setName("")
    setEmail("")
    setMessage("")
    toast.success("Message Sent...")
    setDisableBtn(false)
    }catch (error){
      toast.error("error")
      console.log(error)
      setDisableBtn(false)
    }
   
  }


  const animation = {
    form :{
      initial:{
        x:"-100%" , 
        opacity : 0 , 
      },
      whileInView :{
        x : "0" ,
        opacity :1
      }
    }, 
    button :{
      initial:{
        y:"-100%" , 
        opacity : 0 , 
      },
      whileInView :{
        y : "0" ,
        opacity :1
      }, 
      transition :{
        delay :0.5
      }
    }
  }


  return (
    <div id='contact'>  
        <section>
            <motion.form onSubmit={submitHandler}  {...animation.form}>
                <h2>Contact Me</h2>
                <input type="text" placeholder='Your Name' onChange={(e)=>setName(e.target.value)} required />
                <input type="email" placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} required />
                <input type="text" placeholder='Your Message' onChange={(e)=>setMessage(e.target.value)} required />

                < motion.button className={disableBtn ? "disabledBtn" :""}  disabled = {disableBtn} type='submit' {...animation.button}>Send</motion.button>

            </motion.form>
        </section>
        <aside>
            <img src={vg} alt="Graphics" />
        </aside>
    
    </div>
  )
}

export default Contact