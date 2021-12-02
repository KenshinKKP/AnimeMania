Import Head from "next/head";
import Image from "next/image";
import cartbanner from "../public/cartbanner.jpg";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

<div className={styles.container}>
      <Head>
        <title>Anime Mania</title>
        <meta name="description" content="E-Commerce project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

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
        </main>

      <Footer />
</div>