import React from 'react'
import "./land.css"
function LandingPage() {
    return (
        <div className="landPage">
            <div className="landPage_left"  data-aos="flip-left">
             <img className="landPage_left__img" src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt=""/>
            </div>
            <div className="landPage_Right" data-aos="fade-up">
                <p className="landPage_Right__welcome">Welcome To Rishk-mation </p> 
                <p className="landPage_Right__scroll">Scroll Below <br/>to see some more animation work</p> 
                <p className="landPage_Right__scroll">Used JS Library== "Framer-Motion" 
                <br/>& AOS(animation on scroll) </p> 
            </div>
        </div>
    )
}

export default LandingPage


