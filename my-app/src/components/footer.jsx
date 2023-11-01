import React from "react"

const Footer = ()=>{
  return(
    <div className='footer-con'>
      <div className="contact">
      <p><h2>Contact Us</h2></p>
      <ul>
        <ol>phone-no:(+234)565565758578</ol>
        <ol>address:uniport campus</ol>
        <ol>email:group1@gmail.com</ol>
      </ul>
      </div >
      <ul className="social">
        <ol><img src="../images/face.jpg" width={35} height={35} alt="" /></ol>
        <ol><img src="../images/instagram.jpg" width={35} height={35} alt="" /></ol>
        <ol><img src="../images/what.png" width={35} height={35} alt="" /></ol>
      </ul>
      <div className='sponsors'>
        <p>@ Copywrite 2023 group 1 project</p>
        </div>
 
    </div>
  )
}

export default Footer