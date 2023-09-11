import React from 'react'
import { delay, motion } from 'framer-motion'
import{AiFillIeCircle , AiFillAndroid , AiFillWindows} from "react-icons/ai"

const Services = () => {


    const animation  = {
        whileInView :{
            x:0 ,
            y:0 ,
            opacity:1,
        }, 
        one:{
            x:"-100%",
            opacity:0,
        } , 
        twoandthree:{
            opacity:0,
            y:"-100%"
         
        }, 
    
        four:{
            opacity:0,
            x:"100%"
        }
    }
  return (
    <div id='services'>
        <h2>Services</h2>
        <section>
            <motion.div className='servicesBox1'  whileInView={animation.whileInView} 
            initial ={animation.one}>
                <h3>2+</h3>
                <p>Years Experiences</p>
            </motion.div>
            <motion.div  className='servicesBox2'  whileInView={animation.whileInView}
             initial ={animation.twoandthree}>
           
                <AiFillIeCircle/>
                <span>Web Developement</span>
            </motion.div>
            <motion.div  className='servicesBox3'  whileInView={animation.whileInView} 
             initial ={animation.twoandthree}
             transition={{delay:0.2}}>
            
                <AiFillAndroid/>
                <span>App Developement</span>
            </motion.div>
            <motion.div  className='servicesBox4'  whileInView={animation.whileInView}
             initial ={animation.four}>
           
                <AiFillWindows/>
                <span>Desktop Developement</span>
            </motion.div>
        </section>
    </div>
  )
}

export default Services