import { Toaster } from 'react-hot-toast';
import AppLayout from 'src/components/Layout'
import 'src/styles/globals.css'
import { CartProvider } from 'use-shopping-cart';

// if you want to apply anything Globally, apply it to this _app.js page

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

export default function App({ Component, pageProps }) {
  return (
    <CartProvider stripe={stripeKey} cartMode="checkout-session" currency='CAD'> 
    <AppLayout>
      <Component {...pageProps} />
      <Toaster />
    </AppLayout>
    </CartProvider>
  )
}
