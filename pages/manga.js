import Head from "next/head";
import Image from "next/image";
import NarutoManga1 from "../public/NarutoManga1.jpg";
import NarutoManga2 from "../public/NarutoManga2.jpg";
import KenshinManga1 from "../public/KenshinManga1.jpg";
import KenshinManga2 from "../public/KenshinManga2.jpg";
import PotterManga1 from "../public/PotterManga1.jpg";
import PotterManga2 from "../public/PotterManga2.jpg";
import MarvelManga1 from "../public/MarvelManga1.jpg";
import MarvelManga2 from "../public/MarvelManga2.jpg";
import DisneyManga1 from "../public/DisneyManga1.jpg";
import DisneyManga2 from "../public/DisneyManga2.jpg";
import DisneyManga3 from "../public/DisneyManga3.jpg";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MangaProduct(props) {
  const imageComponents = props.images.map(function (image) {
    return <Image src={image.src} alt={image.name} />;
  });
  return (
    <div className={props.direction}>
      <div className="w-auto p-10 flex flex-row flex-1">{imageComponents}</div>
      <div className="border-dashed w-auto border-black border-2 p-10 flex-1">
        <h1 className="text-2xl font-mono text-center">{props.header}</h1>
        <div> {props.productText} </div>
        <div className="flex justify-center items-center">
          <button className="vertical-align: bottom text-xl font-mono text-center italic font-bold justify-center w-3/12 bg-indigo-300 border-2 hover:bg-indigo-800">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Manga() {
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
            src="/mangabanner.jpg"
            alt="mangabanner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="rounded-full space-y-6 space-x-4 justify-center border-2 border-black p-10">
          <h1 className="text-3xl font-bold font-serif text-center">
            Manga and Book Sets
          </h1>
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
          <MangaProduct
            direction="flex flex-row"
            images={[
              {
                name: "NarutoManga1",
                src: NarutoManga1,
              },
              {
                name: "NarutoManga2",
                src: NarutoManga2,
              },
            ]}
            header="NARUTO MANGA"
            productText="Naruto (Japanese: NARUTOナルト) is a Japanese manga series written
            and illustrated by Masashi Kishimoto. It tells the story of Naruto
            Uzumaki, a young ninja who seeks recognition from his peers and
            dreams of becoming the Hokage, the leader of his village. The story
            is told in two parts – the first set in Naruto's pre-teen years, and
            the second in his teens. The series is based on two one-shot manga
            by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable
            mention in Shueisha's monthly Hop Step Award the following year, and
            Naruto (1997). Naruto was serialized in Shueisha's magazine, Weekly
            Shōnen Jump from 1999 to 2014, and released in tankōbon (book) form
            in 72 volumes."
          />

          <MangaProduct
            direction="flex flex-row-reverse"
            images={[
              {
                name: "NarutoManga1",
                src: NarutoManga1,
              },
              {
                name: "NarutoManga2",
                src: NarutoManga2,
              },
            ]}
            header="SAMURAI X (RUROUNI KENSHIN) MANGA"
            productText="Rurouni Kenshin: Meiji Swordsman Romantic Story (Japanese:
            るろうに剣心 -明治剣客浪漫譚-, Hepburn: Rurōni Kenshin -Meiji
            Kenkaku Roman Tan-)[a] is a Japanese manga series written and
            illustrated by Nobuhiro Watsuki. The story begins during the 11th
            year of the Meiji period in Japan (1878) and follows a former
            assassin from the Bakumatsu, known as Hitokiri Battosai. After his
            work against the bakufu, Hitokiri Battosai disappears to become
            Himura Kenshin: a wandering swordsman who protects the people of
            Japan with a vow never to take another life. Watsuki wrote the
            series upon his desire to make a shōnen manga different from the
            other ones that were published at the time, with Kenshin being a
            former assassin and the story taking a more serious tone as it
            continued. The manga revolves around themes of atonement, peace, and
            romance. The manga was serialized in Shueisha's Weekly Shōnen Jump
            magazine from April 1994 to September 1999. The complete work
            consists of 28 tankōbon volumes, while years later it was reprinted
            into twenty-two kanzenban volumes."
          />
          <MangaProduct
            direction="flex flex-row"
            images={[
              {
                name: "NarutoManga1",
                src: NarutoManga1,
              },
              {
                name: "NarutoManga2",
                src: NarutoManga2,
              },
            ]}
            header="MARVEL AVENGERS COMIC BOOK SET"
            productText="The Marvel era began in 1961, the year that the company launched The
            Fantastic Four and other superhero titles created by Stan Lee, Jack
            Kirby, Steve Ditko and many others. The Marvel brand, which had been
            used over the years, was solidified as the company's primary brand.
            the Avengers were an assemblage of pre-existing superhero characters
            created by Lee and Jack Kirby.In the first issue, the Avengers team
            began with Ant-Man (Hank Pym), Hulk (Bruce Banner), Iron Man
            (Anthony Stark), Thor, and the Wasp (Janet van Dyne) and brought the
            title's first major milestone: the revival and return of Captain
            America (Steve Rogers)"
          />

          <MangaProduct
            direction="flex flex-row-reverse"
            images={[
              {
                name: "NarutoManga1",
                src: NarutoManga1,
              },
              {
                name: "NarutoManga2",
                src: NarutoManga2,
              },
            ]}
            header="HARRY POTTER BOOK SET"
            productText="Escape to Hogwarts with the unmissable series that has sparked a
            lifelong reading journey for children and families all over the
            world! Harry Potter has never even heard of Hogwarts when letters
            start dropping on the doormat at number four, Privet Drive.
            Addressed in green ink on yellowish parchment with a purple seal,
            they are swiftly confiscated by his grisly aunt and uncle. Then, on
            Harry's eleventh birthday, a great beetle-eyed giant of a man called
            Rubeus Hagrid bursts in with some astonishing news - Harry Potter is
            a wizard, and he has a place at Hogwarts School of Witchcraft and
            Wizardry. The magic starts here ... These irresistible editions are
            presented in a striking scarlet box decorated with gold foiling,
            showing Harry on his broomstick flying past a fiery Hungarian
            Horntail dragon. This set is the essential Harry Potter - a
            must-have for every child at the start of the most magical reading
            adventure. These are books to be treasured and read time and time
            again, the greatest children's story of all time."
          />

          <MangaProduct
            direction="flex flex-row"
            images={[
              {
                name: "DisneyManga1",
                src: DisneyManga1,
              },
              {
                name: "DisneyManga2",
                src: DisneyManga2,
              },
              {
                name: "DisneyManga3",
                src: DisneyManga3,
              },
            ]}
            header="DINESY PRINCESSES BOOK COLLECTION"
            productText="This Disney Princess Little Golden Book Set collects 13
            magically-illustrated retellings of your favorite stories! Perfect
            for every little princess and their parents! Includes the following
            titles: Tangled, Brave, The Princess and the Frog, The Little
            Mermaid, Beauty and the Beast, Cinderella, Frozen I, Frozen II,
            Moana, Sleeping Beauty, Snow White, Mulan, and Aladdin."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
