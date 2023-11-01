import React,{useState} from "react"

const Nav = ()=>{
  const [show, setShow] = useState(false)
  return(
    <div className="navbar">
    <div className="navbar-sub">
      <img src="../images/navbar.png" className='brand_name' width={45} height={35} alt="" />
      {/* responsivness */}
      <div className='icon' onClick={()=>setShow(!show)}>
       {!show ? (
          <h1>cl</h1>
       ) : (
          <h1>op</h1>
       )}
         </div>
    </div>
      <div className={`navbar_links ${show && "hide-bar"}`}>
        <ul >
          <ol><a href="#home">Home</a></ol>  
          <ol><a href="#discover">Discover</a></ol>  
          <ol><a href="#resources">Resources</a></ol>
          <ol><a href="#connect" className= 'connect-nav'>Connect</a></ol>
        </ul>
      </div>
    </div>
  )
}

export default Nav