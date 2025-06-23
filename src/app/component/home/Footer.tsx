'use client';
import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaFacebookF, FaTiktok, FaGoogle, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className="bg-white text-black px-4 md:px-12 py-8 ml-7 mr-7">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* KNOW YOUR STORE */}
        <div>
          <h3 className="font-bold uppercase text-sm mb-2 border-b-2 border-orange-500 inline-block">Know Your Store</h3>
          <ul className="space-y-1 text-sm mt-2">
            {[
              'About Us',
              'Account Deletion Policy',
              'Anti-Bribery Policy',
              'Anti-Corruption Policy',
              'Anti-Racist Policy',
              'Cancellation Policy',
              'Contact Us',
              'Copyright',
              'Prohibited Items and Activities Policy',
              'Returns and Refund Policy',
              'Services',
              'User Agreement',
              'Welcome to Surplus-Gy!',
            ].map((item, i) => (
              <li key={i}>{item.toUpperCase()}</li>
            ))}
          </ul>
        </div>

        {/* TOP CATEGORIES */}
        <div>
          <h3 className="font-bold uppercase text-sm mb-2 border-b-2 border-orange-500 inline-block">Top Categories</h3>
          <ul className="space-y-1 text-sm mt-2">
            <li>Automotive</li>
            <li>Mon-Repos Market</li>
            <li>Toys & Games</li>
            <li>Groceries</li>
          </ul>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-bold uppercase text-sm mb-2 border-b-2 border-orange-500 inline-block">Links</h3>
          <ul className="space-y-1 text-sm mt-2">
            <li>Buy Subscription</li>
            <li>Become a Driver</li>
            <li>Brands</li>
            <li>Buy a Gift Card</li>
            <li>FAQs</li>
            <li>Manufacturers</li>
            <li>Sellers</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div>
          <h3 className="font-bold uppercase text-sm mb-2 border-b-2 border-orange-500 inline-block">Get In Touch</h3>
          <div className="flex items-start mt-2 gap-2">
            <FaEnvelope className="text-white bg-blue-900 p-2 rounded-full text-4xl" />
            <div className="text-sm">
              <p className="font-semibold">Email</p>
              <p>amanchoudhary9024@gmail.com</p>
              <p>mahipal@gmail.com</p>
              <p>...</p>
              <p>...</p>
            </div>
          </div>
          <div className="flex items-start mt-4 gap-2">
            <FaPhone className="text-white bg-blue-900 p-2 rounded-full rotate-90 text-4xl" />
            <div className="text-sm">
              <p className="font-semibold">Phone</p>
              <p>+91 9024548476</p>
              <p>+91 66214703</p>
            </div>
          </div>
          <div className="flex items-start mt-4 gap-2">
            <FaWhatsapp className="text-white bg-green-600 p-2 rounded-full text-4xl" />
            <div className="text-sm">
              <p className="font-semibold">WhatsApp</p>
              <p>+91 9024548476</p>
              <p>+91 66214703</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-6 py-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full border p-3 hover:bg-blue-100">
          <FaFacebookF className="text-blue-900 text-lg" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="rounded-full border p-3 hover:bg-blue-100">
          <FaTiktok className="text-blue-900 text-lg" />
        </a>
        <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer" className="rounded-full border p-3 hover:bg-blue-100">
          <FaGoogle className="text-blue-900 text-lg" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full border p-3 hover:bg-blue-100">
          <FaInstagram className="text-blue-900 text-lg" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="rounded-full border p-3 hover:bg-blue-100">
          <FaYoutube className="text-blue-900 text-lg" />
        </a>
      </div>
      <div className="text-center text-sm text-gray-800 pb-6">
        2025 © Copyright © 2025 Surplus-Gy.com
      </div>
    </footer>
    </>
  );
};

export default Footer;
