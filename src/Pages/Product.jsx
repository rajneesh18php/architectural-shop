import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Css/Product.css'
import { FaShoppingCart } from "react-icons/fa";

const Product = () => {
  let productcont=[
    {_id:1,text:"Designer main Gate",images:'/Images/s1.webp',style:"32,999", icone:<FaShoppingCart/>, cross:"45,999"},
    {_id:2,text:"Luxury Dining Chair",images:'/Images/s2.webp',style:"8,999", icone:<FaShoppingCart/>, cross:"15,999"},
    {_id:3,text:"Modern Coffee Table",images:'/Images/s3.webp',style:"12,999", icone:<FaShoppingCart/>, cross:"20,999"},
    {_id:4,text:"Contemporary Side Table",images:'/Images/s6.webp',style:"10,999", icone:<FaShoppingCart/>, cross:"18,999"}

  ]
  const shopaall=[
    {_id:1,text:"Designer main Gate",images:'/Images/g1.webp',style:"32,999", icone:<FaShoppingCart/>, cross:"45,999"},
    {_id:2,text:"Luxury Dining Chair",images:'/Images/g2.webp',style:"8,999", icone:<FaShoppingCart/>, cross:"15,999"},
    {_id:3,text:"Modern Coffee Table",images:'/Images/g3.webp',style:"12,999", icone:<FaShoppingCart/>, cross:"20,999"},
    {_id:4,text:"Contemporary Side Table",images:'/Images/g4.webp',style:"10,999", icone:<FaShoppingCart/>, cross:"18,999"}
  ]


  const gate=[
    {_id:1,text:"Designer main Gate",images:'/Images/t1.webp',style:"32,999", icone:<FaShoppingCart/>, cross:"45,999"},
    {_id:2,text:"Luxury Dining Chair",images:'/Images/t2.webp',style:"8,999", icone:<FaShoppingCart/>, cross:"15,999"},
    {_id:3,text:"Modern Coffee Table",images:'/Images/t3.webp',style:"12,999", icone:<FaShoppingCart/>, cross:"20,999"},
    {_id:4,text:"Contemporary Side Table",images:'/Images/t4.webp',style:"10,999", icone:<FaShoppingCart/>, cross:"18,999"}
  ]

  const reling=[
    {_id:1,text:"Designer main Gate",images:'/Images/r1.webp',style:"32,999", icone:<FaShoppingCart/>, cross:"45,999"},
    {_id:2,text:"Luxury Dining Chair",images:'/Images/r2.webp',style:"8,999", icone:<FaShoppingCart/>, cross:"15,999"},
    {_id:3,text:"Modern Coffee Table",images:'/Images/r3.webp',style:"12,999", icone:<FaShoppingCart/>, cross:"20,999"},
    {_id:4,text:"Contemporary Side Table",images:'/Images/r4.webp',style:"10,999", icone:<FaShoppingCart/>, cross:"18,999"}
  ]
  return (
    <>
     <Header/>
      
      <img src="/Images/chair.jpeg" alt=""  className='product-image'/>



    <div className='product-container-all'>
      {
        productcont.map((product) => (
          <div key={product._id} className='product-item'>
            <img src={product.images} alt={product.text} className='product-image-cart' />
            <h5 className='product-title'>{product.text}</h5>
            <div className='price-container'>
              <div className='price-container-inner'>
            <span className='price-total'>${product.style}</span>
            <span className='cross-price'>${product.cross}</span>
            </div>
            <span className='cross-price-star'>⭐⭐⭐⭐</span>
            
            </div>
            <button className='add-to-cart-button'>{product.icone} Add to Cart</button>
          </div>
        ))
      }
      
      
    </div> 

      <div className='over-cotegory-shopha-container'>
        <span className='over-cotegory-shopha'>OVER ITEM CATEGORY</span>
        <h2 className='shopha-cotegory-heading'>SHOPHA</h2>

      </div>
      
     <div className="shpha-all-container" data-aos="flip-left">
      {
        shopaall.map((shop) => (
          <div key={shop._id} className='shpha-all-item'>
            <img src={shop.images} alt={shop.text} className='shpha-all-image-cart' />
            <h5 className='shpha-all-title'>{shop.text}</h5>
            <div className='shpha-all-price-container'>
              <div className='shpha-all-price-container-inner'>
            <span className='shpha-all-price-total'>${shop.style}</span>
            <span className='shpha-all-cross-price'>${shop.cross}</span>
            </div>
            <span className='shpha-all-cross-price-star'>⭐⭐⭐⭐</span>
            </div>
            <button className='shpha-all-add-to-cart-button'>{shop.icone} Add to Cart</button>
          </div>
        ))
      } 
      </div>

       <div className='over-cotegory-shopha-container'>
        <span className='over-cotegory-shopha'>OVER ITEM CATEGORY</span>
        <h2 className='shopha-cotegory-heading'>Gates</h2>

      </div>

      <div className='gate-main-container'>
        {
          gate.map((gate) => (
            <div key={gate._id} className='gate-item'>
              <img src={gate.images} alt={gate.text} className='gate-image-cart' />
              <h5 className='gate-title'>{gate.text}</h5>
              <div className='gate-price-container'>
                <div className='gate-price-container-inner'>
              <span className='gate-price-total'>${gate.style}</span>
              <span className='gate-cross-price'>${gate.cross}</span>
              </div>
              <span className='gate-cross-price-star'>⭐⭐⭐⭐</span>
              </div>
              <button className='gate-add-to-cart-button'>{gate.icone} Add to Cart</button>
            </div>
          ))
        }
      </div>
       <div className='over-cotegory-shopha-container'>
        <span className='over-cotegory-shopha'>OVER ITEM CATEGORY</span>
        <h2 className='shopha-cotegory-heading'>Reling</h2>

      </div>
      
      <div className='reling-main-container'>
        {
          reling.map((reling) => (
            <div key={reling._id} className='reling-item'>
              <img src={reling.images} alt={reling.text} className='reling-image-cart' />
              <h5 className='reling-title'>{reling.text}</h5> 
              <div className='reling-price-container'>
                <div className='reling-price-container-inner'>
              <span className='reling-price-total'>${reling.style}</span>
              <span className='reling-cross-price'>${reling.cross}</span>
              </div>
              <span className='reling-cross-price-star'>⭐⭐⭐⭐</span>
              </div>
              <button className='reling-add-to-cart-button'>{reling.icone} Add to Cart</button>
            </div>
          ))
        }
      </div>

     





    <Footer/>
    </>
  )
}

export default Product
