import React, { useRef } from 'react'
import { animate, color, motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { BsArrowUpRight, BsChevronBarDown } from "react-icons/bs"
import me from "../Assets/pp3.png"

export const Home = () => {

    const clientcount = useRef(null)
    const projectdone = useRef(null)

    const animationclintcount = ()=>{
        animate(0 ,10, {
            duration:1, 
            onUpdate : (v)=> (clientcount.current.textContent = v.toFixed())
        })
    }
    const animationprojectdone = ()=>{
        animate(0 ,50, {
            duration:1, 
            onUpdate : (v)=> (projectdone.current.textContent = v.toFixed())
        })
    }
    const animation = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0
            },
            whileInView: {
                y: 0,
                opacity: 1
            }
        }
    }
    return (
        <div id='home'>

            <section>
                <div>
                    <motion.h1 {...animation.h1}>
                        Hi , I Am <br /> <span style={{color:"#002c61"}}> Subrat </span><span style={{color:"#ad4126"}}>Mohanty</span>
                    </motion.h1>
                    <Typewriter
                        options={{
                            strings: ["A Backend Developer ", "A Frontend Developer ", "A Api Developer "],
                            autoStart: true,
                            loop: true,
                            cursor: null,
                            wrapperClassName: "typewriterpara",
                        }}
                    />

                    <div>
                        <a href="mailto">Hire Me</a>
                        <a href="#work">Projects  <BsArrowUpRight /></a>
                    </div>
                    <article>
                        <p>
                            +<motion.span whileInView={animationclintcount} ref={clientcount}></motion.span>
                        </p>
                        <span>Projects Made</span>
                    </article>
                    <aside>
                        <article>
                            <p>
                                +<motion.span whileInView={animationprojectdone} ref={projectdone}></motion.span>
                            </p>
                            <span>Project Done</span>
                        </article>

                  
                    <article data-special >
                        <p>
                         Contact
                        </p>
                        <span>subratmohanty2309@gmail.com</span>
                    </article>
                    </aside>
                </div>
            </section>

            <section>
                <img src={me} alt="Subrat" />
            </section>
            <BsChevronBarDown/>
        </div>
    )
}
