import "tailwindcss/tailwind.css";
import { CartContextProvider } from "../context/cart";

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}

export default MyApp;
