import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>
        <section>
            <TestimonialCard  name={"Aksaya jain"} feedback={"Nice Website"}/>
            <TestimonialCard  name={"sanket"} feedback={"Bro how are you"}/>
            <TestimonialCard  name={"Pratik sahoo"} feedback={"Nice Website"}/>
        </section>
    </div>
  )
};

const TestimonialCard = ({name , feedback}) =>(
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)
export default Testimonial