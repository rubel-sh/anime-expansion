import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header-wrapper relative">
      <nav className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={logo} alt="" width="100" />
            <span className="ml-1 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Expansion
            </span>
          </Link>
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/topAnime"
                aria-label="Top Anime"
                title="Top Anime"
                className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primaryColor`}
              >
                Top Anime
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/topManga"
                aria-label="Top Manga"
                title="Top Manga"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primaryColor"
              >
                Top Manga
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/topReviews"
                aria-label="Top Reviews"
                title="Top Reviews"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primaryColor"
              >
                Top Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/topCharacters"
                aria-label="Top Characters"
                title="Top Characters"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primaryColor"
              >
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-400 hover:bg-red-700 focus:shadow-outline focus:outline-none"
                aria-label="About Us"
                title="About Us"
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-20">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={logo} alt="" width={100} />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Expansion
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className="z-50">
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/topAnime"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primaryColor"
                        >
                          Top Anime
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/topManga"
                          aria-label="Top Manga"
                          title="Top Manga"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primaryColor"
                        >
                          Top Manga
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/topCharacters"
                          aria-label="Top Characters"
                          title="Top Characters"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primaryColor"
                        >
                          Top Characters
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/topReviews"
                          aria-label="Top reviews"
                          title="Top reviews"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primaryColor"
                        >
                          Top Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="custom-shape-divider-bottom-1665287073 z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
