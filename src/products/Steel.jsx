import React from 'react'
import Header from '../Components/Header'
import { FaShoppingCart } from "react-icons/fa";
import './Css/Steel.css'
import Footer from '../Components/Footer';

const Steel = () => {
    let steel=[
        {_id:1,text:"Designer main Gate",images:'/Images/st1.webp',style:"32,999", icone:<FaShoppingCart/>, cross:"45,999"},
        {_id:2,text:"Modern Steel Door",images:'/Images/st2.webp',style:"35,999", icone:<FaShoppingCart/>, cross:"48,999"},
        {_id:3,text:"Industrial Steel Gate",images:'/Images/st3.webp',style:"40,999", icone:<FaShoppingCart/>, cross:"55,999"},
        {_id:4,text:"Custom Steel Railing",images:'/Images/st4.webp',style:"28,999", icone:<FaShoppingCart/>, cross:"38,999"},
        {_id:5,text:"Steel Balcony Railing",images:'/Images/st5.webp',style:"30,999", icone:<FaShoppingCart/>, cross:"42,999"},
        {_id:6,text:"Steel Window Frame",images:'/Images/st6.webp',style:"25,999", icone:<FaShoppingCart/>, cross:"35,999"},
        {_id:7,text:"Steel Security Door",images:'/Images/st7.webp',style:"38,999", icone:<FaShoppingCart/>, cross:"50,999"},
        {_id:8,text:"Steel Staircase Railing",images:'/Images/st8.webp',style:"33,999", icone:<FaShoppingCart/>, cross:"45,999"},
    ]
  return (
    <>
     <Header/> 

       <div className="product-steel-image">
     <img src="/Images/stl.png" alt=""  className="product-banner-steel"/>
     </div>

     <div className="product-steel-heading">
        <h1 className='premium-steel'>Premium Steel Products</h1>
        <p>Explore our range of high-quality steel products, designed for durability and style. </p>
     </div>
    
       
       <div className="product-steel-component">
        {
            steel.map((product) => (
                <div key={product._id} className="product-card">
                    <img src={product.images} alt={product.text}  className="product-image"/>
                    <h3 className="product-title">{product.text}</h3>
                   <div div className="price-container">
                    <div>
                        <span className="price">${product.style}</span>
                        <span className="cross-price">${product.cross}</span>
                        </div>
                        <div className="rating">⭐⭐⭐⭐</div>
                        </div>
                    
                    <button className="add-to-cart-button">{product.icone} Add to Cart</button>

                    
                </div>
            ))
        }
       </div>

        <Footer/>
    </>
  )
}

export default Steel
