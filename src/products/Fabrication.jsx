import './Css/Fabrication.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { FaShoppingCart } from "react-icons/fa";
const Fabrication = () => {
  const fabrication=[
                    {_id:1,text:"Luxury Dining Chair",images:'/Images/f2.jpg',style:"8,999", icone:<FaShoppingCart/>, cross:"15,999"},
                    {_id:2,text:"Modern Coffee Table",images:'/Images/f3.jpg',style:"12,999", icone:<FaShoppingCart/>, cross:"20,999"},
                    {_id:3,text:"Contemporary Side Table",images:'/Images/f4.jpg',style:"10,999", icone:<FaShoppingCart/>, cross:"18,999"},
                    {_id:4,text:"Elegant Wooden Cabinet",images:'/Images/f5.jpg',style:"15,999", icone:<FaShoppingCart/>, cross:"25,999"},
                    {_id:5,text:"Stylish Bookshelf",images:'/Images/f6.jpg',style:"9,999", icone:<FaShoppingCart/>, cross:"17,999"},
                    {_id:6,text:"Comfortable Recliner Chair",images:'/Images/f7.jpg',style:"14,999", icone:<FaShoppingCart/>, cross:"22,999"},
                    {_id:7,text:"Modern TV Stand",images:'/Images/f8.jpg',style:"11,999", icone:<FaShoppingCart/>, cross:"19,999"},
                    {_id:8,text:"Contemporary Dining Table",images:'/Images/f9.jpg',style:"18,999", icone:<FaShoppingCart/>, cross:"30,999"},


  ]
  return (
    <>
      <Header/>
       

       <div className='fabrication-main container'>
        {
          fabrication.map((fab)=>(
            <div key={fab._id} className="fab-card">
                        <div className="fab-image-container">
                            <img src={fab.images} alt={fab.text} className="fab-image"/>
                        </div>
                        <h5 className="fab-title">{fab.text}</h5>
                            <div className="fab-price-container">
                                <div>
                                    <span className="fab-price">${fab.style}</span>
                                    <span className="fab-cross-price">${fab.cross}</span>
                                </div>
                                <div >⭐⭐⭐⭐</div>
                            </div>
                        <button className="fab-add-to-cart-button">{fab.icone} Add to Cart</button>
                    </div>
          ))
        }
       </div>



      <Footer/>
    </>
  )
}

export default Fabrication
