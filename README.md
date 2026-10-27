# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



git ko pull karne ke liye 

git remote add origin REPOSITORY_URL
https://github.com/rajneesh18php/architectural-shop
git remote -v
git branch -r
git pull origin main


git remote add origin YOUR_GITHUB_REPOSITORY_URL
git pull origin main

## Razorpay checkout

### React-only hosted Payment Button (test mode)

1. In the Razorpay Dashboard, switch to **Test Mode** and create a Payment Button.
2. Copy its public Payment Button ID (not your key secret).
3. Add `VITE_RAZORPAY_PAYMENT_BUTTON_ID=pl_...` to `.env.local` in the project root, then restart Vite with `npm run dev`.
4. Choose a product, proceed to checkout, and click the hosted **Place Order** button to open Razorpay Checkout.

This React-only hosted button uses the amount configured in the Dashboard. It does not create an order for the current cart total, save delivery details, or verify payment on your server. Do not use it as proof of payment for real orders. For production checkout with cart-specific amounts and verified payments, use the server-side order creation and signature verification flow in `server/index.js`; keep `RAZORPAY_KEY_SECRET` only in the server `.env`, never in a `VITE_*` variable or frontend code. Rotate any key secret that has been shared.