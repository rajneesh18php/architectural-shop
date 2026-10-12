import Header from '../Components/Header'
import './Css/Furniture.css'
import Footer from '../Components/Footer'
import { FaShoppingCart } from "react-icons/fa";

const Furniture = () => {

    let furniture=[
        {_id:1,text:"Luxury Dining Chair",images:'/Images/fe1.jpg',style:"8,999", icone:<FaShoppingCart/>, cross:"15,999"},
        {_id:2,text:"Modern Coffee Table",images:'/Images/fa2.webp',style:"12,999", icone:<FaShoppingCart/>, cross:"20,999"},
        {_id:3,text:"Contemporary Side Table",images:'/Images/fa3.jpg',style:"10,999", icone:<FaShoppingCart/>, cross:"18,999"},
        {_id:4,text:"Elegant Wooden Cabinet",images:'/Images/fa4.jpg',style:"15,999", icone:<FaShoppingCart/>, cross:"25,999"},
        {_id:5,text:"Stylish Bookshelf",images:'/Images/fa5.jpg',style:"9,999", icone:<FaShoppingCart/>, cross:"17,999"},
        {_id:6,text:"Comfortable Recliner Chair",images:'/Images/fa6.jpg',style:"14,999", icone:<FaShoppingCart/>, cross:"22,999"},
        {_id:7,text:"Modern TV Stand",images:'/Images/fa7.jpg',style:"11,999", icone:<FaShoppingCart/>, cross:"19,999"},
        {_id:8,text:"Contemporary Dining Table",images:'/Images/fa8.jpg',style:"18,999", icone:<FaShoppingCart/>, cross:"30,999"},
        {_id:9,text:"Elegant Bed Frame",images:'/Images/fa9.jpg',style:"20,999", icone:<FaShoppingCart/>, cross:"35,999"},
        {_id:10,text:"Stylish Office Desk",images:'/Images/fa10.jpg',style:"13,999", icone:<FaShoppingCart/>, cross:"23,999"},
        {_id:11,text:"Modern Wardrobe",images:'/Images/fa11.jpg',style:"22,999", icone:<FaShoppingCart/>, cross:"38,999"},
        {_id:12,text:"Contemporary Nightstand",images:'/Images/fa12.jpg',style:"7,999", icone:<FaShoppingCart/>, cross:"13,999"},
    ]
  return (
    <>
     <Header/>  
       

         <div className="product-furniture-image">

               {
                furniture.map((product) => (
                    <div key={product._id} className="product-card-furniture">
                        <img src={product.images} alt={product.text}  className="product-image-furniture"/>
                        <h5 className="product-title-furniture">{product.text}</h5>
                          <div className="price-container-furniture">
                            <div>
                                <span className="price-furniture">${product.style}</span>
                                <span className="cross-price-furniture">${product.cross}</span>
                            </div>
                            <div >⭐⭐⭐⭐</div>
                          </div>
                        <button className="add-to-cart-button-furniture">{product.icone} Add to Cart</button>

                        
                    </div>
                ))
               }
                        

            </div>



     <Footer/> 
    </>
  )
}

export default Furniture
