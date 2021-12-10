import Head from "next/head";
import Image from "next/image";
import Figurinesbanner from "../public/figurinesbanner.jpg";
import Naruto2 from "../public/Naruto2.jpg";
import Naruto3 from "../public/Naruto3.jpg";
import Neji1 from "../public/Neji1.jpg";
import Neji2 from "../public/Neji2.jpg";
import Minato1 from "../public/Minato1.jpg";
import Minato2 from "../public/Minato2.jpg";
import HP1 from "../public/HP1.jpg";
import HP2 from "../public/HP2.jpg";
import NHP1 from "../public/NHP1.jpg";
import NHP2 from "../public/NHP2.jpg";
import AD1 from "../public/AD1.jpg";
import AD2 from "../public/AD2.jpg";
import Belle1 from "../public/Belle1.jpg";
import Belle2 from "../public/Belle2.jpg";
import Rapunzel1 from "../public/Rapunzel1.jpg";
import Rapunzel2 from "../public/Rapunzel2.jpg";
import Ariel1 from "../public/Ariel1.jpg";
import Ariel2 from "../public/Ariel2.jpg";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../context/cart";

function CartItem(props) {
  return (
    <div className="flex flex-row w-auto p-10 space-y-6 space-x-4">
      <Image
        src={props.image.src}
        alt={props.image.name}
        width="100"
        height="150"
      ></Image>
      <h1 className="text-xl font-serif text-center">{props.title}</h1>
      <div className="text-xl font-serif text-center">{props.price}</div>
    </div>
  );
}

function FigurinesProduct(props) {
  const imageComponents = props.images.map(function (image) {
    return <Image src={image.src} alt={image.name} />;
  });
  return (
    <div className={props.direction}>
      <div className="w-auto p-10 flex flex-row">{imageComponents}</div>
      <div className="border-dashed w-auto border-black border-2 p-10">
        <h1 className="text-2xl font-mono text-center">{props.header}</h1>
        <div> {props.productText} </div>
        <div> {props.productPrice} </div>
        <div className="flex justify-center items-center">
          <button
            onClick={function () {
              const item = {
                title: props.header,
                price: props.productPrice,
                image: props.images[0],
              };
              props.addToCart(item);
            }}
            className="text-xl font-mono text-center italic font-bold justify-center w-3/12 bg-indigo-300 border-2 hover:bg-indigo-800"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Figurines() {
  const { addToCart, cartItems } = useContext(CartContext);
  const cartItemComponents = cartItems.map(function (props) {
    return (
      <CartItem
        image={props.image.src}
        title={props.title}
        price={props.price}
      />
    );
  });

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
          src="/figurinesbanner.jpg"
          alt="Figurinesbanner"
        />

        <h1 className="rounded-full border-2 border-black text-3xl font-bold font-serif text-center w-auto p-10">
          Figurines
        </h1>

        {/* <CartItem
          image={{ src: Naruto2, name: "Naruto2" }}
          title="NARUTO"
          price=" SGD69.90"
        />
        <CartItem
          image={{ src: Neji1, name: "Neji1" }}
          title="NEJI"
          price="SGD69.90"
        />
        <CartItem
          image={{ src: HP1, name: "HP1" }}
          title="HARRY POTTER"
          price="SGD69.90"
        /> */}

        <div className="basis-1"> {cartItemComponents} </div>

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
            It is always incomplete to dress up our houses, rooms, work desks
            and other areas with some of the beloved figurines!....
          </div>
        </div>
        <h1 className="rounded-full border-2 border-purple-400 text-5xl font-bold font-serif italic text-center">
          Figurines - Naruto
        </h1>

        <div className="w-auto space-y-6 space-x-4">
          <FigurinesProduct
            direction="flex flex-row"
            images={[
              {
                name: "Naruto2",
                src: Naruto2,
              },
              {
                name: "Naruto3",
                src: Naruto3,
              },
            ]}
            header="NARUTO - NARUTO UZUMAKI"
            productText={
              "From the popular anime series 'Naruto Shippuden' comes a rerelease of the Nendoroid of the main character, Naruto Uzumaki! The set box includes, full 1/9 scale figurine with interchangable face plates, weapons and an illustrated sheet."
            }
            productPrice="SGD 69.90"
            addToCart={addToCart}
          />

          <FigurinesProduct
            direction="flex flex-row-reverse"
            images={[
              {
                name: "Neji2",
                src: Neji2,
              },
              {
                name: "Neji1",
                src: Neji1,
              },
            ]}
            header="NARUTO - NEJI HYUGA"
            productText={`From the popular anime series "Naruto Shippuden" comes a fully articulated Nendoroid action figure of
                        Neji Hyuga!He comes with three face plates including a standard expression, a combat expression from
                        when he activates his Byakugan and a composed smiling expression!

                        The gifting box includes, full 1/9 scale figurine with interchangable face
                        plates, weapons and an illustrated sheet.`}
            productPrice="SGD 69.90"
            addToCart={addToCart}
          />

          <FigurinesProduct
            direction="flex flex-row"
            images={[
              {
                name: "Minato1",
                src: Minato1,
              },
              {
                name: "Minato2",
                src: Minato2,
              },
            ]}
            header="NARUTO - MINATO NAMIKAZE"
            productText={`From the popular anime series "Naruto Shippuden" comes Minato
            Namikaze! He comes with three face plates including a standard
            expression, a winking expression and a combat expression.Optional
            parts include his kunai and Rasengan.By combining his parts, you can
            create action-packed poses from the show! The gifting box includes,
            full 1/9 scale figurine with interchangable face plates, weapons and
            an illustrated sheet.`}
            productPrice="SGD 69.90"
            addToCart={addToCart}
          />

          <h1 className="rounded-full border-2 border-purple-400 text-5xl font-bold font-serif italic text-center">
            Figurines - Harry Potter
          </h1>

          <FigurinesProduct
            direction="flex flex-row-reverse"
            images={[
              {
                name: "HP1",
                src: HP1,
              },
              {
                name: "HP2",
                src: HP2,
              },
            ]}
            header="HARRY POTTER - HARRY POTTER QUIDDICH VERSION"
            productText={`From the internationally popular "Harry Potter" film series comes
            a Nendoroid of Harry Potter in his Quidditch uniform! The
            Quidditch version of Harry Potter sports a new windblown hairstyle
            and comes with two face plates, a standard expression and the
            serious expression for when he's chasing the Golden Snitch. The
            gifting box includes a full 1/9 scale figurine with the "Nimbus
            2000", a goal hoop and of course the Golden Snitch!`}
            productPrice="SGD 59.90"
            addToCart={addToCart}
          />
          <FigurinesProduct
            direction="flex flex-row"
            images={[
              {
                name: "AD1",
                src: AD1,
              },
              {
                name: "AD2",
                src: AD2,
              },
            ]}
            header="HARRY POTTER - ALBUS"
            productText={`From the internationally popular "Harry Potter" film series comes a Nendoroid of Hogwarts Headmaster,
            Albus Dumbledore! He comes with two face plates—a standard expression and a gentle smiling expression.
       
            The gifting box includes a full 1/9 scale figurine, Fawkes, Dumbledore's loyal pet phoenix, as well as
            Fawkes' perch and the legendary Elder Wand.`}
            productPrice="SGD 59.90"
            addToCart={addToCart}
          />

          <FigurinesProduct
            direction="flex flex-row-reverse"
            images={[
              {
                name: "NHP1",
                src: NHP1,
              },
              {
                name: "NHP2",
                src: NHP2,
              },
            ]}
            header="HARRY POTTER - HARRY POTTER"
            productText={`From the popular film series "Harry Potter" comes a Nendoroid action figure of Harry Potter! He comes
            with three face plates including his standard expression, a serious expression for when he's casting
            spells and a nervous expression from the famous Sorting Hat scene.
            
            The gifting box includes a full 1/9 scale figurine, his wand, his broom "Firebolt", Hedwig and the
            Sorting Hat are included along with special body parts to pose him riding his broom!`}
            productPrice="SGD 59.90"
            addToCart={addToCart}
          />

          <h1 className="rounded-full border-2 border-purple-400 text-5xl font-bold font-serif italic text-center">
            Figurines - Disney Princess
          </h1>

          <FigurinesProduct
            direction="flex flex-row"
            images={[
              {
                name: "Belle1",
                src: Belle1,
              },
              {
                name: "Belle2",
                src: Belle2,
              },
            ]}
            header="DISNEY PRINCESS - BELLE"
            productText={`From Disney's animated feature film "Beauty and the Beast" comes
            Belle! She comes with two different face plates that both capture
            her personality and allow for all sorts of cute and fun poses!
            Optional parts include two different face plates, both Mrs. Potts
            and Chip, as well as the enchanted rose and the magic mirror that
            showed the Beast. A clear sheet featuring the Beast is also
            included together with a stand to display beside her.`}
            productPrice="SGD 49.90"
            addToCart={addToCart}
          />

          <FigurinesProduct
            direction="flex flex-row-reverse"
            images={[
              {
                name: "Rapunzel1",
                src: Rapunzel1,
              },
              {
                name: "Rapunzel2",
                src: Rapunzel2,
              },
            ]}
            header="DISNEY PRINCESS - RAPUNZEL"
            productText={`From the movie "Tangled" comes Rapunzel! She comes with three face
            plates including a cheerful smile, a surprised expression with her
            eyes wide open as well as a gallant smile showing off her more
            tomboyish side. She also comes with a selection of optional parts
            including her weapon of choice - a frying pan, a beautiful tiara
            to display her as a true princess as well as painting tools and a
            lantern. Rapunzel's long, golden hair has been sculpted with
            intricate detail, featuring large and small braids as well as
            flower decorations. The connecting points of the braids feature
            moving parts allowing her hair to be placed in different positions
            to recreate your favorite scenes from the movie! In addition, her
            best friend Pascal is also included to display by her side, so be
            sure to add the two to your collection!`}
            productPrice="SGD 49.90"
            addToCart={addToCart}
          />

          <FigurinesProduct
            direction="flex flex-row"
            images={[
              {
                name: "Ariel1",
                src: Ariel1,
              },
              {
                name: "Ariel2",
                src: Ariel2,
              },
            ]}
            header="DISNEY PRINCESS - ARIEL"
            productText={`From the popular movie "The Little Mermaid" comes Ariel! She comes
            with three face plates including a standard smile, a determined
            expression and a cheerful smile with closed eyes! The unique flow
            of her hair from being under the sea has been captured on the
            Nendoroid design, and using the included stand you can place her
            in a variety of different swimming poses! Her mermaid tail and fin
            are also articulated allowing you to display her in a range of
            poses to swimming fast to a more gentle movement. Alternate parts
            to display her sitting are also included, which are perfect to
            pose her sitting and chatting with friends!`}
            productPrice="SGD 49.90"
            addToCart={addToCart}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
