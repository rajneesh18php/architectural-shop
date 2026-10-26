import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft,FaCreditCard,FaMoneyBillWave, FaLock,FaTruck} from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Css/Checkout.css";

const Checkout = () => {

  const location = useLocation();
  const navigate = useNavigate();

  // Cart page se data receive hoga
  const product = location.state?.product;
  const quantity = location.state?.quantity || 1;

  const [payment, setPayment] = useState("cod");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const price =
    Number(product?.style?.replace(/,/g, "")) || 0;

  const subtotal = price * quantity;

  const delivery = subtotal >= 5000 ? 0 : 199;

  const total = subtotal + delivery;


  // Input Handle
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };


  // Price Format
  const formatPrice = (amount) => {

    return amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    });

  };


  // Place Order
  const handleOrder = (e) => {

    e.preventDefault();

    if (!product) {
      alert("Your cart is empty!");
      return;
    }

    console.log("Customer:", formData);
    console.log("Product:", product);
    console.log("Payment:", payment);

    alert("Order Placed Successfully!");

  };


  return (
    <>
      <Header />

      <div className="checkout-page">

        {/* Checkout Banner */}

        <div className="checkout-banner">

          <span>SECURE CHECKOUT</span>

          <h1>Checkout</h1>

          <p>
            Cart &nbsp; / &nbsp;
            <strong>Checkout</strong>
          </p>

        </div>


        <form
          className="checkout-container"
          onSubmit={handleOrder}
        >

          {/* LEFT SECTION */}

          <div className="checkout-left">


            {/* Back Button */}

            <button
              type="button"
              className="checkout-back"
              onClick={() => navigate(-1)}
            >
              <FaArrowLeft />
              Back to Cart
            </button>



            {/* Delivery Information */}

            <div className="checkout-box">

              <div className="checkout-heading">

                <div className="checkout-number">
                  1
                </div>

                <div>
                  <h2>Delivery Information</h2>
                  <p>
                    Enter your delivery details
                  </p>
                </div>

              </div>


              <div className="checkout-form-grid">


                <div className="checkout-input-group">

                  <label>Full Name *</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="checkout-input-group">

                  <label>Phone Number *</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="checkout-input-group checkout-full">

                  <label>Email Address *</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="checkout-input-group checkout-full">

                  <label>Full Address *</label>

                  <textarea
                    name="address"
                    placeholder="House no, street, area..."
                    value={formData.address}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>


                <div className="checkout-input-group">

                  <label>City *</label>

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="checkout-input-group">

                  <label>State *</label>

                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="checkout-input-group">

                  <label>PIN Code *</label>

                  <input
                    type="text"
                    name="pincode"
                    placeholder="6 digit PIN code"
                    value={formData.pincode}
                    onChange={handleChange}
                    maxLength="6"
                    required
                  />

                </div>

              </div>

            </div>



            {/* PAYMENT */}

            <div className="checkout-box">

              <div className="checkout-heading">

                <div className="checkout-number">
                  2
                </div>

                <div>
                  <h2>Payment Method</h2>
                  <p>
                    Select your preferred payment
                  </p>
                </div>

              </div>


              <div className="payment-options">


                {/* COD */}

                <label
                  className={
                    payment === "cod"
                      ? "payment-card active-payment"
                      : "payment-card"
                  }
                >

                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={payment === "cod"}
                    onChange={(e) =>
                      setPayment(e.target.value)
                    }
                  />

                  <div className="payment-icon">
                    <FaMoneyBillWave />
                  </div>

                  <div>
                    <h3>Cash on Delivery</h3>
                    <p>
                      Pay when your order arrives
                    </p>
                  </div>

                </label>



                {/* ONLINE */}

                <label
                  className={
                    payment === "online"
                      ? "payment-card active-payment"
                      : "payment-card"
                  }
                >

                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={payment === "online"}
                    onChange={(e) =>
                      setPayment(e.target.value)
                    }
                  />

                  <div className="payment-icon">
                    <FaCreditCard />
                  </div>

                  <div>
                    <h3>Online Payment</h3>
                    <p>
                      UPI / Card / Net Banking
                    </p>
                  </div>

                </label>

              </div>


              {payment === "online" && (

                <div className="online-message">

                  <FaLock />

                  <div>
                    <strong>
                      Secure Online Payment
                    </strong>

                    <p>
                      Payment gateway will open
                      after placing the order.
                    </p>
                  </div>

                </div>

              )}

            </div>

          </div>



          {/* RIGHT SIDE */}

          <div className="checkout-right">

            <div className="order-summary">

              <h2>Order Summary</h2>


              {product ? (

                <div className="checkout-product">

                  <img
                    src={product.images}
                    alt={product.text}
                  />

                  <div>

                    <h3>{product.text}</h3>

                    <p>
                      Quantity: {quantity}
                    </p>

                    <strong>
                      {formatPrice(price)}
                    </strong>

                  </div>

                </div>

              ) : (

                <p className="checkout-empty">
                  No product selected.
                </p>

              )}


              <div className="summary-line"></div>


              <div className="summary-row">

                <span>Subtotal</span>

                <strong>
                  {formatPrice(subtotal)}
                </strong>

              </div>


              <div className="summary-row">

                <span>Delivery</span>

                <strong
                  className={
                    delivery === 0
                      ? "free-delivery"
                      : ""
                  }
                >
                  {delivery === 0
                    ? "FREE"
                    : formatPrice(delivery)}
                </strong>

              </div>


              <div className="summary-line"></div>


              <div className="summary-total">

                <div>
                  <span>Total Amount</span>
                  <small>
                    Inclusive of all taxes
                  </small>
                </div>

                <h2>
                  {formatPrice(total)}
                </h2>

              </div>


              <button
                type="submit"
                className="place-order-btn"
              >
                <FaLock />
                Place Order
              </button>


              <div className="checkout-security">

                <p>
                  <FaLock />
                  Secure Checkout
                </p>

                <p>
                  <FaTruck />
                  Safe Delivery
                </p>

              </div>

            </div>

          </div>

        </form>

      </div>

      <Footer />
    </>
  );
};

export default Checkout;