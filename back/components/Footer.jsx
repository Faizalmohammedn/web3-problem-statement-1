import React from "react";
const Footer = () => {
  const productList = ["Blockchain Explorer", "ERC20 Token", "Donation"];
  const contactList = ["support@cosmos.com", "cosmos@gmail.com", "Contact Us"];
  const usefullLink = ["Home", "About Us", "Profile"];
  return (
    <footer class="text-center text-white backgroundMain lg:text-left">
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Cosmos
            </h6>
            <p>
              Cosmos is an ever-expanding ecosystem of interoperable and
              sovereign blockchain apps and services, built for a decentralized
              future. Bring a creative project to life.
            </p>
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            {productList.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Links
            </h6>
            {usefullLink.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p class="mb-5" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div class="backgroundMain p-6 text-center">
        <span>©️ 2024 Copyrights Reserved: </span>
        <a class="font-semibold" href="https://tailwind-elements.com/">
          COSMOS
        </a>
      </div>
    </footer>
  );
};

export default Footer;
