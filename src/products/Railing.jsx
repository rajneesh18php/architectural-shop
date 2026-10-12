import './Css/Realing.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { FaShoppingCart } from "react-icons/fa";
const Railing = () => {

    const railingItem=[
        {_id:1,text:"Luxury Dining Chair",images:'/Images/r1.jpg',style:"8,999", icone:<FaShoppingCart/>, cross:"15,999"},
        {_id:2,text:"Modern Coffee Table",images:'/Images/r2.jpeg',style:"12,999", icone:<FaShoppingCart/>, cross:"20,999"},
        {_id:3,text:"Contemporary Side Table",images:'/Images/r3.jpg',style:"10,999", icone:<FaShoppingCart/>, cross:"18,999"},
        {_id:4,text:"Elegant Wooden Cabinet",images:'/Images/r4.jpg',style:"15,999", icone:<FaShoppingCart/>, cross:"25,999"},
        {_id:5,text:"Stylish Bookshelf",images:'/Images/r5.jpg',style:"9,999", icone:<FaShoppingCart/>, cross:"17,999"},
        {_id:6,text:"Comfortable Recliner Chair",images:'/Images/fa6.jpg',style:"14,999", icone:<FaShoppingCart/>, cross:"22,999"},
        {_id:7,text:"Modern TV Stand",images:'/Images/r7.jpg',style:"11,999", icone:<FaShoppingCart/>, cross:"19,999"},
        {_id:8,text:"Contemporary Dining Table",images:'/Images/r8.jpg',style:"18,999", icone:<FaShoppingCart/>, cross:"30,999"},
    ]
  return (
    <>
      <Header/>
         <div className='railing-maincontanert'>
        {

            railingItem.map((r)=>(
                <div key={r._id} className="railing-card">
                        <div className="railing-image-container">
                            <img src={r.images} alt={r.text} className="railing-image"/>
                        </div>
                        <h5 className="railing-title">{r.text}</h5>
                            <div className="railing-price-container">
                                <div>
                                    <span className="railing-price">${r.style}</span>
                                    <span className="railing-cross-price">${r.cross}</span>
                                </div>
                                <div >⭐⭐⭐⭐</div>
                            </div>
                        <button className="railing-add-to-cart-button">{r.icone} Add to Cart</button>
                    </div>

            ))
        }
         </div>


      <Footer/>
    </>
  )
}

export default Railing
