import React from 'react'
import './Product.css';
const Product = ({img,link}) => {
  return (
    <div className='C'>
      <div className="p-brow">
        <div className="p-cir">
        </div>
        <div className="p-cir">
        </div>
        <div className="p-cir">
        </div>
      </div>
    <a href={link} target='-blank' rel='norefrence'>
      <img src={img} alt="" className='p-img'/>
      
    </a>

    
    </div>
  )
}

export default Product;
