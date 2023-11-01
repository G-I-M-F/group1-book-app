import React from "react"
import data from "../data"
import Card from "./card"
const Header = ()=>{  
  return(
    <div className='container'>
      <h1 className='title'><span>TREN</span>DING</h1>
    <div className="head-con">
      {data.map((items) =>(
        <Card key={items.id}
         {...items} />
      ))}
    </div>
    </div>
  )
}


export default Header