import Head from "next/head";
import Image from "next/image";
import giftingbanner from "../public/giftingbanner.jpg";
import DisneyGift3 from "../public/DisneyGift3.jpg";
import DisneyGift3b from "../public/DisneyGift3b.jpg";
import DisneyGift2 from "../public/DisneyGift2.jpg";
import DisneyGift2b from "../public/DisneyGift2b.jpg";
import DisneyGift1 from "../public/DisneyGift1.jpg";
import DisneyGift1b from "../public/DisneyGift1b.jpg";
import PotterGift3 from "../public/PotterGift3.jpg";
import PotterGift3b from "../public/PotterGift3b.jpg";
import PotterGift2 from "../public/PotterGift2.jpg";
import PotterGift2b from "../public/PotterGift2b.jpg";
import PotterGift1 from "../public/PotterGift1.jpg";
import PotterGift1b from "../public/PotterGift1b.jpg";
import MarvelGift3 from "../public/MarvelGift3.jpg";
import MarvelGift3b from "../public/MarvelGift3b.jpg";
import MarvelGift2 from "../public/MarvelGift2.jpg";
import MarvelGift2b from "../public/MarvelGift2b.jpg";
import MarvelGift1 from "../public/MarvelGift1.jpg";
import MarvelGift1b from "../public/MarvelGift1b.jpg";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../context/cart";

function GiftingProduct(props) {
  const imageComponents = props.images.map(function (image) {
    return <Image src={image.src} alt={image.name} />;
  });
  return (
    <div className={props.direction}>
      <div className="w-auto p-10 flex flex-row flex-1">{imageComponents}</div>
      <div className="border-dashed w-auto border-black border-2 p-10 flex-1">
        <h1 className="text-2xl font-mono text-center">{props.header}</h1>
        <div> {props.productText} </div>
        <div> {props.productPrice} </div>
        <div className="flex justify-center items-center">
          <button
            onClick={function () {
              props.addToCart(props.header);
            }}
            className="vertical-align: bottom text-xl font-mono text-center italic font-bold justify-center w-3/12 bg-indigo-300 border-2 hover:bg-indigo-800"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Gifting() {
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
        <div
          className="pt-2"
          style={{ position: "relative", width: "2000px", height: "450px" }}
        >
          <Image
            src="/giftingbanner.jpg"
            alt="giftingbanner"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="rounded-full space-y-6 space-x-4 justify-center border-2 border-black p-10">
          <h1 className="text-3xl font-bold font-serif text-center">GIFTING</h1>
        </div>

        <div
          className="
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
          <div className=" vertical-align: middle mt-20 italic text-indigo-600 text-md text-justify justify-content: center">
            All those who watch anime - MUST MUST MUST have a set (or two) of
            mangas in their bookshelf/rack. Anime and manga have long been at
            the heart of Japanese culture and tradition, with a steady increase
            of popularity between the generations. Although anime and manga are
            most popular in Japan, over the last two decades, the popularity for
            anime and manga has also grown considerably in the USA and all
            across Europe. One of the major reasons why anime and manga have
            stood the test of time and became so popular all over the world is
            because of their unique ability to grow with their followers.
            International fans of anime claim that they love the intensity and
            complexity of the anime story-lines with the endings being
            incredibly difficult to predict. They also say that they enjoy the
            fact that anime is often targeted at adult audiences instead at
            kids.
          </div>
        </div>

        <div className="w-auto space-y-6 space-x-4">
          <GiftingProduct
            direction="flex flex-row"
            images={[
              {
                name: "DisneyGift3",
                src: DisneyGift3,
              },
              {
                name: "DisneyGift3b",
                src: DisneyGift3b,
              },
            ]}
            header="Disney Store Princess Zip-Up Stationery Kit"
            productText="Let her creativity reign with this Disney Princess Zip Kit. Belle,
            Ariel, Rapunzel, and Snow White are among the princesses featured on
            the glittering padded cover of this art set that includes colored
            markers, pencils, and notepad. Includes: 10 markers, 10 colored
            pencils, 2 pencils, ballpoint pen, eraser, sharpener, ruler,
            scissors, glue stick, and notepad (30 sheets) Character art includes
            Ariel, Rapunzel, Cinderella, Snow White, Jasmine, Belle, Pocahontas,
            Mulan, Tiana, and Aurora Soft padded case with shimmering fabric
            with Faceted jewel accents Two separate compartments with zip
            closure Golden metal zip pull with faceted jewel accent."
            productPrice="SGD 19.90"
            addToCart={addToCart}
          />

          <GiftingProduct
            direction="flex flex-row-reverse"
            images={[
              {
                name: "DisneyGift2",
                src: DisneyGift2,
              },
              {
                name: "DisneyGift2b",
                src: DisneyGift2b,
              },
            ]}
            header="TERVIS LIMITED EDITION DISNEY PRINCESS STAINLESS STEEL WATER BOTTLES"
            productText="Tervis has released new Disney Princess Water bottles. They’re
            fabulous, and sassy, and will keep us hydrated like royalty! They
            have released a truly stunning new line of 17-ounce slim stainless
            steel water bottles featuring four of the Disney Princesses, Ariel,
            Aurora, Belle and Mulan."
            productPrice="SGD 49.90"
            addToCart={addToCart}
          />

          <GiftingProduct
            direction="flex flex-row"
            images={[
              {
                name: "DisneyGift1",
                src: DisneyGift1,
              },
              {
                name: "DisneyGift1b",
                src: DisneyGift1b,
              },
            ]}
            header="DISNEY PRINCESS TUMBLER COLLECTION"
            productText="<li>
            SIZE: The set contains four tumblers, each with a capacity of 14.5
            ounces
          </li>
          <li>
            MATERIAL: The tumblers are made of durable, long-lasting plastic,
            which is dishwasher safe and completely BPA free. Do not microwave
          </li>
          <li>
            ICONIC ARTWORK: Each cup has a different design, featuring a
            variety of colors and characters from Disney's classics
          </li>
          <li>
            NESTING DESIGN: The cone shape of the cups allows them to stack,
            saving space in storage
          </li>"
            productPrice="SGD 29.90"
            addToCart={addToCart}
          />

          <GiftingProduct
            direction="flex flex-row-reverse"
            images={[
              {
                name: "PotterGift1",
                src: PotterGift1,
              },
              {
                name: "PotterGift1b",
                src: PotterGift1b,
              },
            ]}
            header="HARRY POTTER SUITACASE GIFT SET"
            productText="A premium set containing the following spellbinding items:
            <li> 26x17x13cm wooden case with PU leather handle and carry strap </li>
            <li>A5 PU cover notebook</li>
            <li>350ml metal water bottle</li>
            <li>Pack of 4 graphite pencils</li>
            <li>Metal keychain</li>"
            productPrice="SGD 89.90"
            addToCart={addToCart}
          />

          <GiftingProduct
            direction="flex flex-row"
            images={[
              {
                name: "PotterGift2",
                src: PotterGift2,
              },
              {
                name: "PotterGift2b",
                src: PotterGift2b,
              },
            ]}
            header="HARRY POTTER DEADLY HALLOWS GIFT SET"
            productText="First gifted to the three Peverell brothers, these ancient relics,
            long lost, became a bedtime story for young witches and wizards...
            but could this be more than just a fable? Stamped with the
            triangular symbol of The Deathly Hallows, this enchanting gift set
            from Harry Potter is the perfect present for anybody who believed
            Xenophilius Lovegood's woeful, yet magical retelling of the creation
            of the elder wand, the resurrection stone and the cloak of
            invisibility! Official merchandise. The gift set contains the
            following:
            <li>1 mug (320ml)</li>
            <li>1 glass (500ml)</li>
            <li>2 coasters</li>"
            productPrice="SGD 39.90"
            addToCart={addToCart}
          />

          <GiftingProduct
            direction="flex flex-row-reverse"
            images={[
              {
                name: "PotterGift3",
                src: PotterGift3,
              },
            ]}
            header="HARRY POTTER KEEPSAKE STATIONERY GIFT SET"
            productText="Prepare yourself or a loved one for a new term at Hogwarts school
            with this stunning officially licensed Harry Potter keepsake
            stationery gift box set! This set is packed in a keepsake Hogwarts
            Crest emblazoned brown sturdy box, patterned with in-world stickers
            and tickets for extra immersion, with an added 'secret' storage
            compartment.
            <li>
              1 Hogwarts Crest A5 Hardback Notebook (with lined paper pages)
            </li>
            <li>
              1 Harry Potter Wand-Shaped Pen, 2 golden Hogwarts Pencils, 1 white
              and red Hogwarts Crest Eraser, 1 Harry Potter Pencil Sharpener & 1
              black and gold 'Property Of...' 15cm Ruler
            </li>
            <li>
              5 'Owl Post' headed Letter Writing Sheets with golden Envelopes
            </li>
            <li>2 Hogwarts Wax Seal Sticker Sheets</li>
            <li>5 assorted Hogwarts House Themed Sticker Sheets</li>"
            productPrice="SGD 59.90"
            addToCart={addToCart}
          />

          <GiftingProduct
            direction="flex flex-row"
            images={[
              {
                name: "MarvelGift1",
                src: MarvelGift1,
              },
              {
                name: "MarvelGift1b",
                src: MarvelGift1b,
              },
            ]}
            header="MARVEL AVENGERS HEADPHONES"
            productText="Significant noise reduction for travel, work and anywhere in
            between. Advanced active noise reduction technology quells airplane
            cabin noise, city traffic or a busy office, makes you focus on what
            you want to hear,enjoy your music, movies and videos. Proprietary
            40mm Large-aperture Drivers. Deep, accurate bass response. Gives you
            crisp, powerful sound and quiet that helps you enjoy your music
            better. The goal that provide Customers with better sound quality,
            is our constant pursuit. 20 Hours Playtime Per Charge at Bluetooth
            Mode. A built-in 520mAh battery won't allow your headphones power
            off, you can enjoy your world without noise for 20 hours' long time.
            Also support cable control. Can connect to MP4 / Smartphones /
            Computer / Tablets with external 3.5mm Audio Cable(NOT included)."
            productPrice="SGD 89.90"
            addToCart={addToCart}
          />

          <GiftingProduct
            direction="flex flex-row-reverse"
            images={[
              {
                name: "MarvelGift2",
                src: MarvelGift2,
              },
              {
                name: "MarvelGift2b",
                src: MarvelGift2b,
              },
            ]}
            header="MARVEL AVENGERS MONOPOLY SET"
            productText="In the Monopoly: Marvel Avengers Edition board game, players travel
            around the board drafting as many Marvel Avengers heroes as they
            can. The more heroes a player drafts, the more money they can
            collect, and the more powerful they’ll be. Look out for the Children
            of Thanos spaces. When a player lands on a Child of Thanos, they
            have to battle them! Infinity Gauntlet and Stark Industries cards
            can quickly change a player's luck. The last player with money when
            all other players have gone bankrupt wins!
            <li>Includes gameboard, 2 dice, money pack, and game guide</li>
            <li>12 tokens</li>
            <li>
              24 Hero cards, 16 Infinity Gauntlet cards, 16 Stark Industries
              cards
            </li>
            <li>32 bases, 12 headquarters</li>"
            productPrice="SGD 49.90"
            addToCart={addToCart}
          />

          <GiftingProduct
            direction="flex flex-row"
            images={[
              {
                name: "MarvelGift3",
                src: MarvelGift3,
              },
              {
                name: "MarvelGift3b",
                src: MarvelGift3b,
              },
            ]}
            header="MARVEL AVENGERS HEXAGON WOODEN COASTERS"
            productText="Our items are Hand-finished & coated with a protective varnish to
            shield against spills and stains. These Marvel Avengers inspired
            handmade wooden coasters, feature 6 different designs. This coaster
            set fits perfectly into any interior design, from home offices to
            living rooms, to bedrooms! It is also the ideal gift for any
            occasion and a must-have for those Marvel Avengers Fans!"
            productPrice="SGD 39.90"
            addToCart={addToCart}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
