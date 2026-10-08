import React from 'react'
import "./Css/Cotegory.css"

const Cotegory = ({key,text,images,style,icone,cross}) => {
  return (
    <>
   
      
        <div className="cotegor-cart-sec">
        <div className="cotegory-card-img">
            <img src={images} alt="" />
        </div>
        <div className='cotegory-card-texte'>
            <h3 className='cotegory-g'>{text}</h3>
            <div className='cotegory-tect'>
               <span>{style}</span>
               <span>{icone}</span>
            </div>
        </div>
        </div>



       
    </>
  )
}

export default Cotegory
