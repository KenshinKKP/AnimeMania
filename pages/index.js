import Head from "next/head";
import Image from "next/image";
import Mainpagebanner from "../public/Mainpagebanner.jpg";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Category from "../components/Category";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anime Mania</title>
        <meta name="description" content="E-Commerce project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <Image
          width="2000"
          height="250"
          src="/Mainpagebanner.jpg"
          alt="Mainpagebanner"
        />

        <div
          class="
          container
          w-full
          p-20
          m-4
          mx-auto
          my-16
          text-center
          bg-white
          border-2 border-gray-300 border-dashed
          h-96
          rounded-xl
        "
        >
          <div class="mt-20 italic text-indigo-600 text-md">
            Anime Mania! as the name suggests, its all about anime...
          </div>
        </div>

        <div className="rounded-full space-y-8 h-full justify-center p-20 w-full">
          <Category
            header="Figurines"
            backgroundColor="bg-white"
            categoryText="The world of figurines! Here you will find figurines from every genre. Cant find what you are looking for? Drop us an email and let us do the hunting for you!"
          />
          <Category
            header="Manga"
            backgroundColor="bg-indigo-400"
            categoryText="Prefer to hold a book in hand rather than stare at screens to read? Fret not! We got you covered! Browse our range of mangas to get your fix!"
          />
          <Category
            header="Gifting"
            backgroundColor="bg-white"
            categoryText="Don't we know of someone whose into Anime or loves collectables from Harry Potter or the MCU series? This festive season, give them a reason to smile!"
          />
          <Category
            header="Others"
            backgroundColor="bg-indigo-400"
            categoryText="Now that the world is opening up and networking sessions might just become an in-thing again, reach out to us to make the networking a more entertaining and enjoyable experience."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
