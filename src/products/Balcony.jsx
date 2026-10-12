import './Css/Bolcony.css'
import { FaShoppingCart } from "react-icons/fa";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const Balcony = () => {
    const bolconyreling=[
        {_id:1,text:"Luxury Dining Chair",images:'/Images/b1.jpg',style:"8,999", icone:<FaShoppingCart/>, cross:"15,999"},
        {_id:2,text:"Modern Coffee Table",images:'/Images/b2.jpg',style:"12,999", icone:<FaShoppingCart/>, cross:"20,999"},
        {_id:3,text:"Contemporary Side Table",images:'/Images/b3.jpg',style:"10,999", icone:<FaShoppingCart/>, cross:"18,999"},
        {_id:4,text:"Elegant Wooden Cabinet",images:'/Images/b4.jpg',style:"15,999", icone:<FaShoppingCart/>, cross:"25,999"},
        {_id:5,text:"Stylish Bookshelf",images:'/Images/b5.webp',style:"9,999", icone:<FaShoppingCart/>, cross:"17,999"},
        {_id:6,text:"Comfortable Recliner Chair",images:'/Images/b6.jpg',style:"14,999", icone:<FaShoppingCart/>, cross:"22,999"},
        {_id:7,text:"Modern TV Stand",images:'/Images/b7.jpg',style:"11,999", icone:<FaShoppingCart/>, cross:"19,999"},
        {_id:8,text:"Contemporary Dining Table",images:'/Images/b8.jpg',style:"18,999", icone:<FaShoppingCart/>, cross:"30,999"},
    ]
  return (
    <>
    <Header/>

        <div className='balcony-main-container'>
            {
                bolconyreling.map((balcony)=>(
                     <div key={balcony._id} className="balcony-card">
                        <div className="balcony-image-container">
                            <img src={balcony.images} alt={balcony.text} className="balcony-image"/>
                        </div>
                        <h5 className="balcony-title">{balcony.text}</h5>
                            <div className="balcony-price-container">
                                <div>
                                    <span className="balcony-price">${balcony.style}</span>
                                    <span className="balcony-cross-price">${balcony.cross}</span>
                                </div>
                                <div >⭐⭐⭐⭐</div>
                            </div>
                        <button className="balcony-add-to-cart-button">{balcony.icone} Add to Cart</button>
                    </div>


                ))
            }
        </div>


    <Footer/>
    </>
  )
}

export default Balcony
