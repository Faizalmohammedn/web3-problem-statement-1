import React, { useState, useContext } from "react";
//Internal import
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Logo, Menu } from "../Components";

const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuList = ["Projects", "Donations", "About Us", "Contact Us"];
  return (
    <div class="backgroundMain1">
      <div class="px-4 py-8 mx-auto sm: max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div class="relative flex items-center justify-between">
          <div class="flex items-center">
            <a
              href="/"
              aria-label="Cosmos"
              title="Cosmos"
              class="inline-flex items-center mr-8"
            >
              <img src= "https://cosmos.network/_nuxt/img/3e5c310.png" class="logo"/>
              <span class="ml-2 text-3xl font-bold textAlign:start font-s tracking-wide text-gray-100 uppercase">
                Cosmos
              </span>
              
            </a>
            <div class="menulist">
              <ul class="flex items-center hidden space-x-8 lg:flex">
                {menuList.map((el, i) => (
                  <li key={i + 1}>
                    <a
                      href="/"
                      aria-label="Details"
                      title="Details"
                      class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 textAlign:center"
                    >
                      {el}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {!currentAccount && (
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <button
                  onClick={() => connectWallet()}
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none background"
                  aria-label="Sign Up"
                  title="Sign Up"
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          )}

          <div class="lg:hidden z-40">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus.shadow.outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Cosmos"
                        title="Cosmos"
                        class="inline-flex items-center"
                      >
                        <Logo color="text-black" />
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Cosmos
                        </span>
                      </a>
                    </div>
                  </div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12, 10.6L5.7,4.3c-0.4-0. 4-1-0.4-1.4,0s-0.4,1,0,1.416.3,6.31-6.3,6.3 c-0.4,0.4-0.4,1, 0,1.404.5,19.9,4.7,20,5,2050.5-0.1,0.7-0.316.3-6.316.3,6. 3c0.2,0.2,0.5,0.3,0.7,0.350.5-0.1,0.7-0.3 c0.4-0.4,0.4-1, 0-1.4L13.4,1216.3-6.3020.1.5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>

                  <nav>
                    <ul class="space-y-4">
                      {menuList.map((el, i) => (
                        <li key={i + 1}>
                          <a
                            href=""
                            aria-label="Our Product"
                            title="Our Product"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            {el}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href="/"
                          class="inline-flex items-center background justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus: shadow-outline focus: outline-none"
                          aria-label="Sign Up"
                          title="Sign Up"
                        >
                          Connect Wallet
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
