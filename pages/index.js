import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anime Mania</title>
        <meta name="description" content="E-Commerce project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Kajals World!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}

      <main className={styles.main}>
        <nav className="bg-purple-800 shadow dark:text-indigo-900">
          <div className="
        container
        px-6
        py-3
        mx-auto
        md:flex md:justify-between md:items-center
      ">
            <div className="flex items-center justify-between">
              <div>
                <a className="
              text-5xl
              font-bold
              text-white
              dark:text-white
              md:text-5xl
              hover:text-pink-500
            " href="#">Anime Mania</a>
              </div>
              {/*<!-- Mobile menu button -->*/}
              <div className="flex md:hidden">
                <button type="button" className="
              text-white
              dark:text-white
              hover:text-pink-500
              dark:hover:text-gray-400
              focus:outline-none focus:text-gray-600
              dark:focus:text-gray-400
            " aria-label="toggle menu">
                  <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                    <path fill-rule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
            {/*<!-- Mobile Menu open: "block", Menu closed: "hidden" -->*/}
            <div className="items-center md:flex">
              <div className="flex flex-col md:flex-row md:mx-6">
                <a className="
              my-1
              font-bold
              text-white
              text-xl
              dark:text-white
              hover:text-pink-500
              dark:hover:text-indigo-400
              md:mx-4 md:my-0
            " href="#">Home</a>
                <button className="
          my-1
              font-bold
              text-white
              text-xl
              dark:text-white
              hover:text-pink-500
              dark:hover:text-indigo-400
              md:mx-4 md:my-0
        " type="button" onclick="openDropdown(event,'dropdown-example-1')">
                  Shop<i className="fas fa-angle-down ml-2"></i>
                </button>
                <div className="
          hidden
          bg-indigo-400
          font-bold
          text-xl
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded
          shadow-lg
          mt-1
        " style="min-width: 12rem" id="dropdown-example-1">
                  <a href="#" className="
            text-sm
            py-2
            px-4
            font-serif
            text-xl
            font-bold
            block
            w-full
            whitespace-nowrap
            text-white
            hover:text-pink-500
          ">
                    Figurines
                  </a>
                  <a href="#" className="
            text-sm
            py-2
            px-4
            font-serif
            text-xl
            font-bold
            block
            w-full
            whitespace-nowrap
            text-white
            hover:text-pink-500
          ">
                    Manga
                  </a>
                  <a href="#" className="
            text-sm
            py-2
            px-4
            font-serif
            text-xl
            font-bold
            block
            w-full
            whitespace-nowrap
            text-white
            hover:text-pink-500
          ">
                    Gifting
                  </a>
                  <a href="#" className="
            text-sm
            py-2
            px-4
            font-serif
            text-xl
            font-bold
            block
            w-full
            whitespace-nowrap
            text-white
            hover:text-pink-500
          ">
                    Others
                  </a>
                </div>
                <script src="https://unpkg.com/@popperjs/core@2.9.1/dist/umd/popper.min.js" charset="utf-8"></script>
                <script>
                  function openDropdown(event, dropdownID) {
                    let element = event.target;
                  while (element.nodeName !== "BUTTON") {
                    element = element.parentNode;
              }
                  var popper = Popper.createPopper(
                  element,
                  document.getElementById(dropdownID),
                  {
                    placement: "bottom-start",
                }
                  );
                  document.getElementById(dropdownID).classList.toggle("hidden");
                  document.getElementById(dropdownID).classList.toggle("block");
            }
                </script>
                <a className="
              my-1
              font-bold
              text-white
              text-xl
              dark:text-white
              hover:text-pink-500
              dark:hover:text-indigo-400
              md:mx-4 md:my-0
            " href="#">Contact</a>
                <a className="
              my-1
              font-bold
              text-white
              text-xl
              dark:text-white
              hover:text-pink-500
              dark:hover:text-indigo-400
              md:mx-4 md:my-0
            " href="#">About</a>
              </div>

              <div className="flex justify-center md:block">
                <a className="
              relative
              ont-bold
              text-white
              text-xl
              dark:text-white
              hover:text-pink-500
              dark:hover:text-gray-300
            " href="#">
                  <i className="fas fa-shopping-cart"></i>

                  <span className="
                absolute
                top-0
                left-0
                p-1
                text-xs text-white
                bg-indigo-500
                rounded-full
                "></span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="
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
        ">
          <image className="object-fill h-96 w-full" src="RK1.jpg" alt="Rurouni Kenshin 1">
            <div className="mt-20 italic text-indigo-600 text-md">Anime Mania! as the name suggests, its all about anime...
            </div>
          </image>
        </div>
        <div className="rounded-full space-y-8 h-full justify-center p-20">
          <div id="Figurines" onclick="changeColor('text-indigo-400', this);"
            className="rounded-full border-2 border-purple-400 p-10">
            <h1 className="text-3xl font-bold font-serif text-center">Figurines</h1>
            <button onclick="changeText(this.parentNode.id)">Read More</button>
          </div>
          {/*<!--document.getElementById("Figurines").innerHTML = "The world of figurines! Here you will find figurines from every genre. Cant find what you are looking for? Drop us an email and let us do the hunting for you!"; -->*/}

          <div id="Manga" onclick="changeColor('text-black', this.id);" class="rounded-full bg-indigo-400 p-10">
            <h1 className="text-3xl font-bold font-serif text-center">Manga</h1>
            <button onclick="changeText(this.parentNode.id)">Read More</button>
          </div>
          {/*<!-- document.getElementById("Manga").innerHTML = "Prefer to hold a book in hand rather than stare at screens to read? Fret not! We got you covered! Browse our range of mangas to get your fix!"; -->*/}

          <div id="Gifts" onclick="changeColor('text-indigo-400', this.id);"
            className="rounded-full border-2 border-purple-400 p-10">
            <h1 class="text-3xl font-bold font-serif text-center">Gifts</h1>
            Don't we know of someone whose into Anime or loves collectables from Harry Potter or the MCU series? This
            festive season, give them a reason to smile!
          </div>
          <div id="Others" onclick="changeColor('text-yellow-500', this.id);" class="rounded-full bg-indigo-400 p-10">
            <h1 className="text-3xl font-bold font-mono text-center">Others</h1>
            Now that the world is opening up and networking sessions might just become an "in-thing" again, reach out to us
            to make the networking a more entertaining and enjoyable experience.
          </div>
        </div>
        {/*<!-- Required font awesome -->*/}
      </main >
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      < footer className="bg-purple-800 shadow dark:text-indigo-900" >
        <div className="
    container
    px-5
    py-24
    mx-auto
    flex
    md:items-center
    lg:items-start
    md:flex-row md:flex-nowrap
    flex-wrap flex-col
  ">
          <div className="
      flex-grow flex flex-wrap
      md:pl-20
      -mb-10
      md:mt-0
      mt-10
      md:text-left
      text-center
    ">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="
          title-font
          font-bold
              text-white
              text-xl
              dark:text-white
              hover:text-pink-500
              dark:hover:text-indigo-400
          tracking-widest
          text-sm
          mb-3
        ">
                About Us
              </h2>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="
          title-font
          font-bold
              text-white
              text-xl
              dark:text-white
              hover:text-pink-500
              dark:hover:text-indigo-400
          tracking-widest
          text-sm
          mb-3
        ">
                Shop
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-white hover:text-pink-500 font-bold">Figurines</a>
                </li>
                <li>
                  <a href="" className="text-white hover:text-pink-500 font-bold">Manga</a>
                </li>
                <li>
                  <a href="" className="text-white hover:text-pink-500 font-bold">Gifting</a>
                </li>
                <li>
                  <a href="" className="text-white hover:text-pink-500 font-bold">Others</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="
          title-font
          font-bold
              text-white
              text-xl
              dark:text-white
              hover:text-pink-500
              dark:hover:text-indigo-400
          tracking-widest
          text-sm
          mb-3
        ">
                Contact Us
              </h2>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="
          title-font
          font-bold
              text-white
              text-xl
              dark:text-white
              hover:text-pink-500
              dark:hover:text-indigo-400
          tracking-widest
          text-sm
          mb-3
        ">
                Be part of the Community!
              </h2>

            </div>
          </div>
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="" className="
        flex
        title-font
        font-medium
        items-center
        md:justify-start
        justify-center
        text-white
      ">
              <i className="fas fa-cubes fa-lg text-purple-500"></i>
              <span className="ml-3 text-xl">Tailwind elements</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
              quam?
            </p>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="
      container
      mx-auto
      py-4
      px-5
      flex flex-wrap flex-col
      sm:flex-row
    ">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2021 Copyright:
              <a href="https://www.tailwind-elements.com/" className="text-gray-600 ml-1" target="_blank">Tailwind Elements</a>
            </p>
            <span className="
        inline-flex
        sm:ml-auto sm:mt-0
        mt-2
        justify-center
        sm:justify-start
      ">
              <a href="" className="text-gray-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="ml-3 text-gray-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="ml-3 text-gray-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="" className="ml-3 text-gray-500">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="" className="ml-3 text-gray-500">
                <i className="fab fa-instagram"></i>
              </a>
            </span>
          </div>
        </div>
      </footer >
    </div >

  )
}
