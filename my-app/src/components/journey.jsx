import Card from "./card"
import data1 from "../data1"
const Journey = ()=>{
    return(
        <div className='container' id='discover'>
      <h1 className='title'>CATE<span>GOR</span>IES</h1>
        <div  className="head-con">
            {data1.map(items=>(
                <Card
                 key={items.id}
                 {...items}/>
            ))}
        </div>
        </div>
    )
}

export default Journey