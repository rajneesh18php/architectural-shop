import React from 'react'
import Cotegory from '../Components/Cotegory'
import './Css/Home.css'
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { SiSecurityscorecard } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";
import Carditem from '../Components/Carditem';
import { FaShoppingCart } from "react-icons/fa";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
     
    let cotegorycont=[
        {_id:1,text:"Furniture",images:'/Images/for1.jpg',style:"Stylish & comfortable", icone:<FaArrowRight/>},
        {_id:2,text:"Furniture",images:'/Images/for2.jpg',style:"Stylish & comfortable", icone:<FaArrowRight/>},
        {_id:3,text:"Furniture",images:'/Images/for3.jpg',style:"Stylish & comfortable", icone:<FaArrowRight/>},
        {_id:4,text:"Furniture",images:'/Images/for4.jpg',style:"Stylish & comfortable", icone:<FaArrowRight/>},
    ]


    let itemscompo=[
      {_id:1,text:"Designer main Gate",images:'/Images/get1.jpg',style:"32,999", icone:<FaShoppingCart/>, cross:"45,999"},
      {_id:1,text:"Luxury Dining Chair",images:'/Images/get3.jpg',style:"8,999", icone:<FaShoppingCart/>, cross:"15,999"},
      {_id:1,text:"Modern Sofa Set",images:'/Images/get4.jpg',style:"45,999", icone:<FaShoppingCart/>, cross:"52,999"},
      {_id:1,text:"Premium WOoden Door",images:'/Images/get2.jpg',style:"18,999", icone:<FaShoppingCart/>, cross:"24,999"},
      {_id:1,text:"Furniture",images:'/Images/for1.jpg',style:"123", icone:<FaShoppingCart/>, cross:"2435"},
    ]

  return (


    <>
    <Header/>

    {/* coloser start */}
      <div className="corousel-start">
      <Carousel>
      <Carousel.Item interval={1000}>
        <img src='Images/thes1.jpg' alt='First slide'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src='Images/sofa.jpg' alt='First slide'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='Images/thes.png' alt='Third slide'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    {/* coloser ends */}

          <div className="cotegory-tittle">
        <span className='cotegor-shop'>SHOP BY COTEGORY</span>
        <h1>Explore Our Premium Collection</h1>
    </div>

       <div className="cotegory-card-main">
        {
            cotegorycont.slice(0,4).map((item)=>(
                <Cotegory key={item._id} text={item.text} images={item.images} style={item.style} icone={item.icone}/>
            ))
        }
      
      </div>

      <div className="premium-cecurity">
        <div className='security-icone-text'>
             <span className='security-icone'><MdOutlineSecurity/></span>
             <div security-text>
                <h3>Premium Quality</h3>
                <span className='text'>only the best for your home</span>
             </div>
        </div>

            
           <div className='security-icone-text'>
             <span className='security-icone'><TbTruckDelivery/></span>
             <div security-text>
                <h3>Fast & safe Dilivery</h3>
                <span className='text'>Across India</span>
             </div>
        </div>
         <div className='security-icone-text'>
             <span className='security-icone'><SiSecurityscorecard/></span>
             <div security-text>
                <h3>Secure Payment</h3>
                <span className='text'>Multiple Payment Options</span>
             </div>
        </div>
         

          <div className='security-icone-text'>
             <span className='security-icone'><MdSupportAgent/></span>
             <div security-text>
                <h3>Dedicated Support</h3>
                <span className='text'>We're here to help</span>
             </div>
        </div>
      </div>
      <div className='cards-featured'>
        <span className='our-crt'>OUR PRODUCTS</span>
        <h1>Featured Collection </h1>
      </div>

      <div className='cotegory-card-item'>

       {
        itemscompo.slice(0,4).map((item)=>(
          <Carditem key={item._id} text={item.text} images={item.images} style={item.style} icone={item.icone} cross={item.cross}/>
        ))
       }
      </div>





      <Footer/>

    </>
  )
}

export default Home
