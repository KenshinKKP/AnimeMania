export default function Header() {
  return (
    <div>
      <nav className="bg-purple-800 shadow dark:text-indigo-900">
        <div
          className="
    container
    px-6
    py-3
    mx-auto
    md:flex md:justify-between md:items-center
  "
        >
          <div className="flex items-center justify-between">
            <div>
              <a
                className="
          text-5xl
          font-bold
          text-white
          dark:text-white
          md:text-5xl
          hover:text-pink-500
        "
                href="#"
              >
                Anime Mania
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="
          text-white
          dark:text-white
          hover:text-pink-500
          dark:hover:text-gray-400
          focus:outline-none focus:text-gray-600
          dark:focus:text-gray-400
        "
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">
              <a
                className="
          my-1
          font-bold
          text-white
          text-xl
          dark:text-white
          hover:text-pink-500
          dark:hover:text-indigo-400
          md:mx-4 md:my-0
        "
                href="#"
              >
                Home
              </a>
              <button
                className="
      my-1
          font-bold
          text-white
          text-xl
          dark:text-white
          hover:text-pink-500
          dark:hover:text-indigo-400
          md:mx-4 md:my-0
    "
                type="button"
                onclick="openDropdown(event,'dropdown-example-1')"
              >
                Shop<i className="fas fa-angle-down ml-2"></i>
              </button>
              <div
                className="
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
    "
                style={{ minWidth: "12rem" }}
                id="dropdown-example-1"
              >
                <a
                  href="#"
                  className="
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
      "
                >
                  Figurines
                </a>
                <a
                  href="#"
                  className="
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
      "
                >
                  Manga
                </a>
                <a
                  href="#"
                  className="
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
      "
                >
                  Gifting
                </a>
                <a
                  href="#"
                  className="
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
      "
                >
                  Others
                </a>
              </div>

              <a
                className="
            my-1
            font-bold
            text-white
            text-xl
            dark:text-white
            hover:text-pink-500
            dark:hover:text-indigo-400
            md:mx-4 md:my-0
        "
                href="#"
              >
                Contact
              </a>
              <a
                className="
          my-1
          font-bold
          text-white
          text-xl
          dark:text-white
          hover:text-pink-500
          dark:hover:text-indigo-400
          md:mx-4 md:my-0
        "
                href="#"
              >
                About
              </a>
            </div>

            <div className="flex justify-center md:block">
              <a
                className="
          relative
          ont-bold
          text-white
          text-xl
          dark:text-white
          hover:text-pink-500
          dark:hover:text-gray-300
        "
                href="#"
              >
                <i className="fas fa-shopping-cart"></i>

                <span
                  className="
            absolute
            top-0
            left-0
            p-1
            text-xs text-white
            bg-indigo-500
            rounded-full
            "
                ></span>
              </a>
            </div>
          </div>
        </div>
        <div class="relative border-2">
          <div className="absolute top-4 left-3">
            {" "}
            <i className="fa fa-search text-black z-20 hover:text-black"></i>{" "}
          </div>{" "}
          <input
            type="text"
            className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Your Wishlist"
          />
          <div className="absolute top-2 right-2">
            {" "}
            <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">
              Search
            </button>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
}
