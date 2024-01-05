import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
    // <!-- Footer container -->
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-brown dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaFacebookF className="h-4 w-4" />
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaTwitter className="h-4 w-4" />
          </a>

          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaInstagram className="h-4 w-4" />
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a href="https://www.github.com/abhaypanditzx" className="text-neutral-600 dark:text-neutral-200">
            <FaGithub className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW elements section --> */}
          <div className="">
            <h6 className="font-bungee text-xl">CAFEÍNA</h6>
            <p>
              Sip perfection at{" "}
              <a href="/" className="text-yellow-400">
                cafeina.
              </a>{" "}
              Explore premium blends, crafted for exceptional flavor. Elevate
              your coffee experience. Cheers to great moments and great coffee!
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Coffee Blends
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Brewing Gear
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Top Picks
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Special Offers
              </a>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <Link
                to="/pricing"
                href="#!"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Pricing
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/myAccount"
                onClick={() => {
                  window.scrollTo({ top: 0, Behaviour: "smooth" });
                }}
                className="text-neutral-600 dark:text-neutral-200"
              >
                Settings
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to="/orders"
                onClick={() => {
                  window.scrollTo({ top: 0, Behaviour: "smooth" });
                }}
                className="text-neutral-600 dark:text-neutral-200"
              >
                Orders
              </Link>
            </p>
            <p>
              <Link
                to="/help"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Help
              </Link>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <IoHome className="mr-3 h-5 w-5" />
              New York, NY 10012, US
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdEmail className="mr-3 h-5 w-5" />
              cafeina@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <IoCall className="mr-3 h-5 w-5" />+ 01 234 567 88
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-black/10">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://github.com/abhaypanditzx/Cafeina"
        >
          Cafeina
        </a>
      </div>
    </footer>
  );
};

export default Footer;
