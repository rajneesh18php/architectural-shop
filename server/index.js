import "dotenv/config";
import { Buffer } from "node:buffer";
import crypto from "node:crypto";
import process from "node:process";
import cors from "cors";
import express from "express";
import Razorpay from "razorpay";

const requiredEnv = ["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET"];
const missingEnv = requiredEnv.filter((name) => !process.env[name]);

if (missingEnv.length) {
  throw new Error(`Missing required environment variables: ${missingEnv.join(", ")}`);
}

const catalog = new Map([
  ["Luxury Dining Chair", 8999],
  ["Modern Coffee Table", 12999],
  ["Contemporary Side Table", 10999],
  ["Elegant Wooden Cabinet", 15999],
  ["Stylish Bookshelf", 9999],
  ["Comfortable Recliner Chair", 14999],
  ["Modern TV Stand", 11999],
  ["Contemporary Dining Table", 18999],
  ["Elegant Bed Frame", 20999],
  ["Stylish Office Desk", 13999],
  ["Modern Wardrobe", 22999],
  ["Contemporary Nightstand", 7999],
  ["Designer main Gate", 32999],
  ["Modern Steel Door", 35999],
  ["Industrial Steel Gate", 40999],
  ["Custom Steel Railing", 28999],
  ["Steel Balcony Railing", 30999],
  ["Steel Window Frame", 25999],
  ["Steel Security Door", 38999],
  ["Steel Staircase Railing", 33999],
]);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
const pendingOrders = new Set();

const app = express();
const configuredFrontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(
  cors({
    origin(origin, callback) {
      const isLocalDevelopmentOrigin =
        /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin || "");

      if (!origin || origin === configuredFrontendUrl || isLocalDevelopmentOrigin) {
        callback(null, true);
        return;
      }

      callback(new Error("Frontend origin is not allowed by payment API CORS."));
    },
  })
);
app.use(express.json());

app.post("/api/payment/create-order", async (req, res) => {
  const { productId, productName, quantity } = req.body;
  const unitPrice = catalog.get(productName);

  if (
    !Number.isSafeInteger(productId) ||
    productId < 1 ||
    !Number.isSafeInteger(quantity) ||
    quantity < 1 ||
    quantity > 20 ||
    unitPrice === undefined
  ) {
    return res.status(400).json({ message: "Invalid product or quantity." });
  }

  const subtotal = unitPrice * quantity;
  const delivery = subtotal >= 5000 ? 0 : 199;
  const amount = (subtotal + delivery) * 100;

  try {
    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: `checkout_${Date.now()}`,
    });
    pendingOrders.add(order.id);
    const expiryTimer = setTimeout(() => pendingOrders.delete(order.id), 15 * 60 * 1000);
    expiryTimer.unref();

    return res.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    return res.status(502).json({ message: "Unable to create Razorpay order." });
  }
});

app.post("/api/payment/verify", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  if (
    typeof razorpay_order_id !== "string" ||
    typeof razorpay_payment_id !== "string" ||
    typeof razorpay_signature !== "string" ||
    !pendingOrders.has(razorpay_order_id)
  ) {
    return res.status(400).json({ success: false, message: "Invalid or expired payment order." });
  }

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");
  const expected = Buffer.from(expectedSignature, "hex");
  const received = Buffer.from(razorpay_signature, "hex");

  if (
    expected.length !== received.length ||
    !crypto.timingSafeEqual(expected, received)
  ) {
    return res.status(400).json({ success: false, message: "Payment verification failed." });
  }

  pendingOrders.delete(razorpay_order_id);
  return res.json({ success: true });
});

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  console.log(`Payment API listening on http://localhost:${port}`);
});
