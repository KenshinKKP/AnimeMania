import Head from "next/head";
import Image from "next/image";
import cartbanner from "../public/cartbanner.jpg";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../context/cart";

export default function ShoppingCart() {
  const { addToCart, cartItems } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Anime Mania</title>
        <meta name="description" content="E-Commerce project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <div class="rounded-full space-y-6 space-x-4 justify-center border-2 border-black p-10">
          <h1 class="text-3xl font-bold font-serif text-center">
            My Shopping Cart
          </h1>
        </div>
        <div
          className="pt-2"
          style={{ position: "relative", width: "2000px", height: "450px" }}
        >
          <Image
            src="/cartbanner.jpg"
            alt="cartbanner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {cartItems}
        <div class="grid grid-cols-5 space-y-6 space-x-4 ">
          <div class="flex flex-wrap content-center">
            <h1 class="text-2xl font-serif text-center">Images</h1>
          </div>
          <div class="flex flex-wrap content-center">
            <h1 class="text-2xl font-serif text-center">Product Name</h1>
          </div>
          <div class="flex flex-wrap content-center">
            <h1 class="text-2xl font-serif text-center">Price</h1>
          </div>
          <div class="flex flex-wrap content-center">
            <h1 class="text-2xl font-serif text-center">Quantity</h1>
          </div>
          <div class="flex flex-wrap content-center">
            <h1 class="text-2xl font-serif text-center">Total Cost</h1>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
