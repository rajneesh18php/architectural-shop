import React from 'react'
import './Css/Carditem.css'
const Carditem = ({key,text,images,style,icone,cross}) => {
  return (
    <>
     <div className="cotegor-cart-sec">
        <div className="cotegory-card-img">
            <img src={images} alt="" />
        </div>
        <div className='cotegory-card-texte'>
            <h3 className='cotegory-g'>{text}</h3>
            <div className='cotegory-tect'>
              <spam className='text-size'>₹{style} <del>₹{cross }</del></spam>
               <span className='card-icone'>{icone}</span>
            </div>
        </div>
        </div>
      
      
    </>
  )
}

export default Carditem
