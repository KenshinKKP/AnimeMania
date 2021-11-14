import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

function Category(props) {
  const [categoryText, setCategoryText] = useState("Read More");
  function changeCategoryText() {
    setCategoryText(props.categoryText)
  }
  const categoryClassName = "rounded-full border-2 border-purple-400 p-10 w-full " + props.backgroundColor
  return (
    <div className={categoryClassName}>
      <h1 className="text-3xl font-bold font-serif text-center">{props.header}</h1>
      <button onClick={changeCategoryText}>{categoryText}</button>
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anime Mania</title>
        <meta name="description" content="E-Commerce project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
        " style={{ minWidth: "12rem" }} id="dropdown-example-1">
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

                < a className="
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
        <div className="rounded-full space-y-8 h-full justify-center p-20 w-full">
          <Category header="Figurines" backgroundColor="bg-white" categoryText="The world of figurines! Here you will find figurines from every genre. Cant find what you are looking for? Drop us an email and let us do the hunting for you!" />
          <Category header="Manga" backgroundColor="bg-indigo-400" categoryText="Prefer to hold a book in hand rather than stare at screens to read? Fret not! We got you covered! Browse our range of mangas to get your fix!" />
          <Category header="Gifting" backgroundColor="bg-white" categoryText="Don't we know of someone whose into Anime or loves collectables from Harry Potter or the MCU series? This festive season, give them a reason to smile!" />
          <Category header="Others" backgroundColor="bg-indigo-400" categoryText="Now that the world is opening up and networking sessions might just become an in-thing again, reach out to us to make the networking a more entertaining and enjoyable experience." />
        </div>
      </main >

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
