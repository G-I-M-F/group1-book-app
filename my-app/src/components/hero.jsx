import React from "react"

const Hero = ()=>{
    return(
        <div className="hero" id="home">
            <img className="hero-img" src="../images/bg1.jpeg" width={500} height={500} alt="pic" />
           <div className="hero-txt-con">
            <h1 className="hero-txt">
                <p>Read the Latest books of your</p>
                <p>choice by browsing through our</p>
                <p>library</p>
                <br/>
                <p className="hero-txt1">view more</p>
                <a href="#resources"><button className='button'>resources</button></a>
                </h1>

                </div>
        </div>
    )
}
export default Hero