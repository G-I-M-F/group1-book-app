import React from 'react'

const Card = ({rating,name,color,image}) => {
  return (
    <div className="card-con">
      <div className='card-img-wrap'><img src={image} alt="" /></div>
      <div className='card-txt'>
        <p className="rating">{rating}</p>
        <h3 className="name">{name}</h3>
        <p className="color">{color}</p>
        <button className='button'>more..</button>
      </div>
    </div>
  )
}

export default Card