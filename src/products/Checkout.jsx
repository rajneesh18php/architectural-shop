
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCreditCard,
  FaLock,
  FaTruck
} from "react-icons/fa";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Css/Checkout.css";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000"
).replace(/\/$/, "");

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;
  const quantity = Number(location.state?.quantity) || 1;

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  // Product price
  // Confirm that product.style contains the price
  const price =
    Number(
      String(product?.style ?? 0)
        .replace(/[₹,\s]/g, "")
    ) || 0;

  const subtotal = price * quantity;
  const delivery = subtotal >= 5000 ? 0 : 199;
  const total = subtotal + delivery;

  const formatPrice = (amount) => {
    return amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Load Razorpay checkout script
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  // Payment handling
  const handleOrder = async (e) => {
    e.preventDefault();

    if (!product) {
      alert("Your cart is empty!");
      return;
    }

    if (price <= 0 || total <= 0) {
      alert("Invalid product price!");
      return;
    }

    setLoading(true);

    try {
      const loaded = await loadRazorpay();

      if (!loaded) {
        alert(
          "Razorpay could not load. Check your internet."
        );
        return;
      }

      // Create Razorpay order on backend
      const response = await fetch(
        `${API_BASE_URL}/api/payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            productId: product._id,
            productName: product.text,
            quantity
          })
        }
      );

      const orderData = await response.json();

      if (!response.ok) {
        throw new Error(
          orderData.message || "Order creation failed"
        );
      }

      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: "INR",
        name: "My E-Commerce Store",
        description: "Product Payment",
        order_id: orderData.id,

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },

        theme: {
          color: "#0f172a"
        },

        handler: async function (paymentResponse) {
          try {
            const verifyResponse = await fetch(
              `${API_BASE_URL}/api/payment/verify`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(paymentResponse)
              }
            );

            const result = await verifyResponse.json();

            if (verifyResponse.ok && result.success) {
              alert("Payment Verified Successfully!");
              // Navigate after backend saves the order
              // navigate("/order-success");
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.error(error);
            alert("Unable to verify payment.");
          }
        },

        modal: {
          ondismiss: function () {
            console.log("Payment cancelled");
          }
        }
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", (response) => {
        console.error(response.error);
        alert("Payment Failed!");
      });

      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert(
        error instanceof TypeError
          ? `Payment server is unreachable at ${API_BASE_URL}. Start it with "npm run server" and configure Razorpay keys in .env.`
          : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="checkout-page">
        <div className="checkout-banner">
          <div className="checkout-banner-copy">
            <span>YOUR ORDER, MADE SIMPLE</span>
            <h1>Secure checkout</h1>
            <p>Just a few details and your order will be on its way.</p>
          </div>
          <div className="checkout-banner-lock" aria-hidden="true">
            <FaLock />
          </div>
        </div>

        <form
          className="checkout-container"
          onSubmit={handleOrder}
        >
          <nav className="checkout-progress" aria-label="Checkout progress">
            <div className="checkout-progress-step is-complete">
              <span>1</span>
              <div><strong>Cart</strong><small>Items selected</small></div>
            </div>
            <div className="checkout-progress-step is-current" aria-current="step">
              <span>2</span>
              <div><strong>Delivery</strong><small>Your details</small></div>
            </div>
            <div className="checkout-progress-step">
              <span>3</span>
              <div><strong>Payment</strong><small>Secure checkout</small></div>
            </div>
          </nav>

          <div className="checkout-left">
            <button
              type="button"
              className="checkout-back"
              onClick={() => navigate(-1)}
            >
              <FaArrowLeft /> Back to Cart
            </button>

            <div className="checkout-box">
              <div className="checkout-heading">
                <div className="checkout-number">1</div>
                <div>
                  <h2>Delivery details</h2>
                  <p>Where should we send your order?</p>
                </div>
              </div>

              <div className="checkout-form-grid">
                {[
                  ["name", "Full Name", "text"],
                  ["phone", "Phone Number", "tel"],
                  ["email", "Email Address", "email"],
                  ["city", "City", "text"],
                  ["state", "State", "text"],
                  ["pincode", "PIN Code", "text"]
                ].map(([name, label, type]) => (
                  <div
                    className="checkout-input-group"
                    key={name}
                  >
                    <label>{label} *</label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={`Enter ${label}`}
                      maxLength={
                        name === "pincode" ? 6 : undefined
                      }
                      required
                    />
                  </div>
                ))}

                <div className="checkout-input-group checkout-full">
                  <label>Full Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House no, street, area..."
                    required
                  />
                </div>
              </div>
            </div>

            <div className="checkout-box">
              <div className="checkout-heading">
                <div className="checkout-number">2</div>
                <div>
                  <h2>Payment method</h2>
                  <p>Choose a secure way to complete your order</p>
                </div>
              </div>

              <div className="payment-options">
                <div className="payment-card active-payment">
                  <div className="payment-icon">
                    <FaCreditCard />
                  </div>
                  <div>
                    <h3>Online Payment</h3>
                    <p>UPI / Card / Net Banking</p>
                  </div>
                </div>
              </div>

              <div className="online-message">
                <FaLock />
                <div>
                  <strong>Safe and secure payment</strong>
                  <p>
                    Your payment details are encrypted and protected.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="checkout-right">
            <div className="order-summary">
              <div className="order-summary-heading">
                <div>
                  <span>YOUR PURCHASE</span>
                  <h2>Order summary</h2>
                </div>
                <span className="order-summary-count">{quantity} item{quantity === 1 ? "" : "s"}</span>
              </div>

              {product ? (
                <div className="checkout-product">
                  <img
                    src={product.images}
                    alt={product.text || "Product"}
                  />
                  <div>
                    <h3>{product.text}</h3>
                    <p>Quantity: {quantity}</p>
                    <strong>{formatPrice(price)}</strong>
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
                <strong>{formatPrice(subtotal)}</strong>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <strong>
                  {delivery === 0
                    ? "FREE"
                    : formatPrice(delivery)}
                </strong>
              </div>

              <div className="summary-line"></div>

              <div className="summary-total">
                <div>
                  <span>Total Amount</span>
                  <small>Inclusive of all taxes</small>
                </div>
                <h2>{formatPrice(total)}</h2>
              </div>

              <button
                type="submit"
                className="place-order-btn"
                disabled={loading || !product}
              >
                <FaLock />
                {loading ? "Opening payment..." : "Place Order"}
              </button>

              <div className="checkout-security">
                <p><FaLock /> Secure payment</p>
                <p><FaTruck /> Reliable delivery</p>
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
