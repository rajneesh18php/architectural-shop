import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTrashAlt, FaArrowLeft, FaShoppingBag } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Css/Carts.css";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [removed, setRemoved] = useState(false);

  const price = Number(product?.style?.replace(/,/g, "")) || 0;
  const oldPrice = Number(product?.cross?.replace(/,/g, "")) || 0;

  const subtotal = price * quantity;
  const delivery = subtotal >= 5000 ? 0 : 199;
  const total = subtotal + delivery;

  const formatPrice = (amount) =>
    amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    });

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


//   checkout code
const handleCheckout = () => {
  navigate("/checkout", {
    state: { product, quantity }
  });
};

  return (
    <>
      <Header />

      <div className="cart-page">

        <div className="cart-banner">
          <span>YOUR SHOPPING BAG</span>
          <h1>Shopping Cart</h1>
          <p>Home / Products / Cart</p>
        </div>

        <div className="cart-wrapper">

          {!product || removed ? (
            <div className="empty-cart">
              <FaShoppingBag className="empty-cart-icon" />
              <h2>Your Cart is Empty</h2>
              <p>Explore our premium collection.</p>
              <button onClick={() => navigate("/products")}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-products">

                <div className="cart-section-heading">
                  <h2>My Shopping Bag</h2>
                  <span>{quantity} Item(s)</span>
                </div>

                <div className="cart-product-card">

                  <img
                    src={product.images}
                    alt={product.text}
                    className="cart-product-img"
                  />

                  <div className="cart-product-info">

                    <span className="cart-category">
                      PREMIUM COLLECTION
                    </span>

                    <h3>{product.text}</h3>

                    <div className="cart-rating">
                      ⭐⭐⭐⭐ <span>(4.0)</span>
                    </div>

                    <div className="cart-prices">
                      <h3>{formatPrice(price)}</h3>
                      <del>{formatPrice(oldPrice)}</del>
                    </div>

                    <p className="cart-stock">● In Stock</p>

                    <div className="cart-product-actions">

                      <div className="cart-quantity">
                        <button onClick={decreaseQuantity}>−</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity}>+</button>
                      </div>

                      <button
                        className="cart-remove"
                        onClick={() => setRemoved(true)}
                      >
                        <FaTrashAlt /> Remove
                      </button>

                    </div>
                  </div>
                </div>

                <button
                  className="cart-continue"
                  onClick={() => navigate("/products")}
                >
                  <FaArrowLeft /> Continue Shopping
                </button>

              </div>

              <div className="cart-summary">

                <h2>Order Summary</h2>

                <div className="cart-summary-row">
                  <span>Subtotal ({quantity} items)</span>
                  <strong>{formatPrice(subtotal)}</strong>
                </div>

                <div className="cart-summary-row">
                  <span>Delivery Charges</span>
                  <strong>
                    {delivery === 0 ? "FREE" : formatPrice(delivery)}
                  </strong>
                </div>

                <div className="cart-summary-row">
                  <span>You Save</span>
                  <strong className="cart-saving">
                    {formatPrice((oldPrice - price) * quantity)}
                  </strong>
                </div>

                <div className="cart-divider"></div>

                <div className="cart-total">
                  <span>Total Amount</span>
                  <h2>{formatPrice(total)}</h2>
                </div>

                <button
                  className="cart-checkout"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout →
                </button>

                <p className="cart-secure">
                  🔒 Secure & Safe Shopping
                </p>

                <div className="cart-benefits">
                  <p>✓ Premium Quality Products</p>
                  <p>✓ Secure Payments</p>
                  <p>✓ Trusted Shopping Experience</p>
                </div>

              </div>
            </>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
