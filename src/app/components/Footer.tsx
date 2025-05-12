import React from "react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-200 p-4 m-4 ">
      <div className="md:flex md:flex-wrap justify-between">
        <div className="">
          <h1 className="font-bold border-b border-red-600">KNOW YOUR STORE</h1>
          <ul>
            <li>
              <a href="https://surplusgy.com/page/about-us">About Us</a>
            </li>
            <li>
              <a href="https://surplusgy.com/page/account-deletion-policy">
                Account Deletion Policy
              </a>
            </li>
            <li>
              <a href="">Anti-Bribery Policy</a>
            </li>
            <li>
              <a href="">Anti-Corruption Policy</a>
            </li>
            <li>
              <a href="">Cancellation Policy</a>
            </li>
            <li>
              <a href="">Copyright</a>
            </li>
            <li>
              <a href="">Prohibited Items and Activities Policy</a>
            </li>
            <li>
              <a href="">Returns and Refund Policy</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">User Agreement</a>
            </li>
            <li>
              <a href="">Welcome to Surplus-Gy!</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-bold border-b border-red-600">TOP CATEGORIES</h1>
          <ul>
            <li>
              <a href="">Automotive</a>
            </li>
            <li>
              <a href="">Mon-Repos Market</a>
            </li>
            <li>
              <a href="">Toys & Games</a>
            </li>
            <li>
              <a href="">Groceries</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-bold border-b border-red-600">LINKS</h1>

          <ul>
            <li>
              <a href="">Buy Subscription</a>
            </li>
            <li>
              <a href="">Become a Driver</a>
            </li>
            <li>
              <a href="">Brands</a>
            </li>
            <li>
              <a href="">Buy a Gift Card</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Manufacturers</a>
            </li>
            <li>
              <a href="">Sellers</a>
            </li>
            <li>
              <a href="">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-bold border-b border-red-600">GET IN TOUCH</h1>

          <div className="flex align-items-center gap-2 pt-2">
            <div>
              <FaWhatsapp color="green" />
            </div>
            <div>
              <p className="font-bold">WhatsApp</p>
              <ul>
                <li>
                  <a href="https://wa.me/919166214703">9166214703</a>
                </li>
                <li>
                  <a href="https://wa.me/919024548476">9024548476</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex align-items-center gap-2 pt-2">
            <div>
              <IoCall color="black" />
            </div>
            <div>
              <p className="font-bold">Call Us</p>
              <ul>
                <li>
                  <a href="tel:+91 9166214703">9166214703</a>
                </li>

                <li>
                  <a href="tel:+91 9024548476">9024548476</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex align-items-center gap-2 pt-2">
            <div>
              <MdEmail color="black" />
            </div>
            <div>
              <p className="font-bold">Email Us</p>
              <ul>
                <li>
                  <a href="mailto:mahipaldhayal2002@gmail.com">
                    mahipaldhayal2002@gmail.com
                  </a>
                </li>
                <li>
                  <a href="mailto:amanchoudhary9024@gmail.com">
                    amanchoudhary9024@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center gap-4  mt-4">
          <span title="Mahipal LinkedIn">
            <a href="https://www.linkedin.com/in/mahipaldhayal/">
              <FaLinkedin className="text-blue-600" />
            </a>
          </span>
          <span title="Mahipal GitHub">
            <a href="https://github.com/mahipal-dhayal">
              <FaGithub className="black" />
            </a>
          </span>
          <span title="Aman LinkedIn">
            <a href="https://www.linkedin.com/in/aman-bhambhu-b7455022b/">
              <FaLinkedin className="text-blue-600" />
            </a>
          </span>
          <span title="Aman GitHub">
            <a href="https://github.com/Amanchoudharyyyy">
              <FaGithub className="black" />
            </a>
          </span>
        </div>
        <div className="text-center">
          <p>Copyright &copy; 2025 Aman Choudhary & Mahipal Dhayal </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
