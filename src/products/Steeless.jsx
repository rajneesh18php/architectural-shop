import "./Css/Steeless.css"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Steeless = () => {
    const navigate = useNavigate();
    const handleAddToCart = (product) => navigate("/carts", { state: { product: { _id: product._id, text: product.text, images: product.images, style: product.style, cross: product.cross } } });


    const steelessData = [
               {_id:1,text:"Luxury Dining Chair",images:'/Images/s1.jpg',style:"8,999", icone:<FaShoppingCart/>, cross:"15,999"},
               {_id:2,text:"Modern Coffee Table",images:'/Images/s2.jpg',style:"12,999", icone:<FaShoppingCart/>, cross:"20,999"},
               {_id:3,text:"Contemporary Side Table",images:'/Images/s3.jpg',style:"10,999", icone:<FaShoppingCart/>, cross:"18,999"},
               {_id:4,text:"Elegant Wooden Cabinet",images:'/Images/s4.jpg',style:"15,999", icone:<FaShoppingCart/>, cross:"25,999"},
               {_id:5,text:"Stylish Bookshelf",images:'/Images/s5.jpg',style:"9,999", icone:<FaShoppingCart/>, cross:"17,999"},
               {_id:6,text:"Comfortable Recliner Chair",images:'/Images/s6.jpg',style:"14,999", icone:<FaShoppingCart/>, cross:"22,999"},
               {_id:7,text:"Modern TV Stand",images:'/Images/s7.jpg',style:"11,999", icone:<FaShoppingCart/>, cross:"19,999"},
               {_id:8,text:"Contemporary Dining Table",images:'/Images/s8.jpg',style:"18,999", icone:<FaShoppingCart/>, cross:"30,999"},
    ]
  return (
    <>
      <Header/>
        <div className="steeless-main-container">
            {
                steelessData.map((product) => (
                    <div key={product._id} className="steeless-card">
                        <div className="steeless-image-container">
                            <img src={product.images} alt={product.text} className="steeless-image"/>
                        </div>
                        <h5 className="steeless-title">{product.text}</h5>
                            <div className="steeless-price-container">
                                <div>
                                    <span className="steeless-price">${product.style}</span>
                                    <span className="steeless-cross-price">${product.cross}</span>
                                </div>
                                <div >⭐⭐⭐⭐</div>
                            </div>
                        <button className="steeless-add-to-cart-button" onClick={() => handleAddToCart(product)}>{product.icone} Add to Cart</button>
                    </div>
                ))
            }
        </div>

      <Footer/>
    </>
  )
}

export default Steeless
