import Card from "./card"
import data3 from "../data3"
const Journey = ()=>{
    return(
        <div className='container'>
      <h1 className='title'>COM<span>ING</span> SOON...</h1>
        <div  className="head-con">
            {data3.map(items=>(
                <Card
                 key={items.id}
                 {...items}/>
            ))}
        </div>
        </div>
    )
}

export default Journey