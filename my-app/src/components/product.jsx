import Card from "./card"
import data2 from "../data2"
const Product = ()=>{
    return(
        <div className='container' id='resources'>
      <h1 className='title'><span>RE</span>SOURCES</h1>
        <div  className="head-con" >
            {data2.map(items=>(
                <Card
                 key={items.id}
                 {...items}/>
            ))}
        </div>
        </div>
    )
}

export default Product