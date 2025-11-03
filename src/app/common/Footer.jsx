"use client";
import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const onClickCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full bg-white font-inter border-t border-gray-200 text-[#333] text-[16px] leading-normal"
    >
      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto py-12 px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row justify-between flex-wrap gap-12">
        {/* Logo + Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[220px] lg:max-w-[30%]"
        >
          <a href="/">
            <Image
              src="/logo-svg-binali.svg"
              alt="Logo"
              width={150}
              height={50}
              className="mb-6 w-auto h-14"
              priority
            />
          </a>
          <p className="mb-6 text-[16px] leading-relaxed text-gray-700">
            Bin Ali Medical Supplies LLC is a reputed Medical Supplies company
            based in Dubai, UAE. Established in the early 2000s, BAMS has grown
            to be a leading supplier of a wide range of excellent products.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FiPhone className="text-primary" />
              <span
                onClick={() => onClickCopy("(239) 555-0108")}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                +971-4–4520022
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineEmail className="text-primary" />
              <span
                onClick={() => onClickCopy("info@binali.xyz")}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                info@binalimed.com
              </span>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="min-w-[200px]"
        >
          <h3 className="text-xl font-semibold mb-5 text-dark-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-[16px] text-gray-700">
            <li>
              <Link href="/" className="hover:text-primary">Home</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">About Us</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-primary">Our Products</Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-primary">Our Partners</Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-primary">Career</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
            </li>
          </ul>
        </motion.div>

        {/* MOH Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="min-w-[200px]"
        >
          <h3 className="text-xl font-semibold mb-5 text-dark-2">MOH</h3>
          <ul className="space-y-3 text-[16px] text-gray-700">
            <li>APPROVAL NUMBER:</li>
            <li className="font-semibold text-primary">8AEVFQ0O-281024</li>
            <li>DATE: 27/10/2024 TO 27/10/2025</li>
          </ul>
        </motion.div>

        {/* Branch Offices & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[220px] lg:max-w-[25%]"
        >
          <h3 className="text-xl font-semibold mb-5 text-dark-2">
            Branch Offices
          </h3>
          <p className="mb-6 text-[16px] text-gray-700 leading-relaxed">
            Dubai - +971-4–4520022 <br />
            Al Ain - +971-3-7824596 <br />
            Abu Dhabi - +971-3-7824596
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaXTwitter, AiFillInstagram, IoLogoLinkedin].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-primary/80 text-white rounded-full hover:bg-primary-light transition"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-primary text-white py-6"
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row justify-between items-center gap-3 text-center">
          <p>
            © {new Date().getFullYear()} Bin Ali Medical Supplies. All rights
            reserved.
          </p>
          <p className="text-sm sm:text-base">
            Privacy Policy | Terms & Conditions
          </p>
        </div>
      </motion.div>

      {/* Copy Alert */}
      {copied && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-md shadow-md text-sm z-50">
          Copied to clipboard!
        </div>
      )}
    </motion.footer>
  );
};

export default Footer;
