"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./megamenu";
// import Logo from "../../../../public/logo-horizontal.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle(
      "overflow-hidden",
      isMenuOpen || isMegaMenuOpen
    );
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen, isMegaMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItemClass = (path) =>
    `relative py-2 transition-all duration-300 group hover:text-secondary ${
      pathname === path ? "text-secondary" : "text-primary"
    }`;

  const navItemBorderClass = (path) =>
    `absolute left-0 bottom-0 w-full h-0.5 rounded-t-md transition-all duration-300 ${
      pathname === path ? "bg-primary" : "bg-transparent group-hover:bg-primary"
    }`;

  return (
    <header className="sticky top-0 left-0 w-full z-100 bg-white backdrop-blur-md shadow-sm">
      {/* === Top Bar === */}
      <div className="bg-linear-to-r from-primary/10 to-primary/5 border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex justify-between items-center h-12 text-sm text-dark-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2">
              <FiPhone className="text-primary" />
              <span
                onClick={() => copyToClipboard("(239) 555-0108")}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                +971- 2- xxxxx
              </span>
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineEmail className="text-primary" />
              <span
                onClick={() => copyToClipboard("info@binali.xyz")}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                info@Dentalclinic.com
              </span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-primary hover:scale-110">
              <RiFacebookFill size={18} />
            </a>
            <a href="#" className="hover:text-primary hover:scale-110">
              <FaXTwitter size={18} />
            </a>
            <a href="#" className="hover:text-primary hover:scale-110">
              <LuInstagram size={18} />
            </a>
            <a href="#" className="hover:text-primary hover:scale-110">
              <RxLinkedinLogo size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* navbar */}
      <nav className="relative">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex justify-between items-center h-20">
          {/* === LOGO === */}
          <Link
            href="/"
            className="shrink-0 text-secondary font-semibold text-lg tracking-wide"
          >
            {/* <Image src={Logo} alt="Logo" width={140} height={40} className="w-auto h-14" /> */}
            DENTAL CLINIC
          </Link>

          {/* === DESKTOP NAV === */}
          <ul className="hidden lg:flex items-center gap-10 text-[16px] font-medium tracking-wide">
            <li>
              <Link href="/" className={navItemClass("/")}>
                Home 2 <span className={navItemBorderClass("/")} />
              </Link>
            </li>
            <li>
              <Link href="/about" className={navItemClass("/about")}>
                About <span className={navItemBorderClass("/about")} />
              </Link>
            </li>
            <li className="relative flex items-center group">
              <MegaMenu setIsMegaMenuOpen={setIsMegaMenuOpen} />
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 rounded-t-md transition-all duration-300 ${
                  pathname.startsWith("/services")
                    ? "bg-accent"
                    : "bg-transparent group-hover:bg-accent"
                }`}
              ></span>
            </li>
            <li>
              <Link href="https://dentalclinichome3.vercel.app/" className={navItemClass("/contact")}>
                Home 3 <span className={navItemBorderClass("/contact")} />
              </Link>
            </li>
          </ul>

          {/* === MOBILE TOGGLE === */}
          <button
            onClick={toggleMenu}
            className="lg:hidden cursor-pointer text-light focus:outline-none"
          >
            {!isMenuOpen && <AlignRight size={30} />}
          </button>
        </div>

        {/* === MOBILE MENU (FULL SCREEN) === */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed top-0 left-0 w-full h-screen bg-secondary z-100 text-light flex flex-col px-6 pt-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-primary font-semibold text-lg"
                >
                  DENTAL CLINIC
                </Link>
                <button
                  onClick={closeMenu}
                  className="text-light hover:text-accent"
                >
                  <IoCloseSharp size={30} />
                </button>
              </div>

              <ul className="flex flex-col gap-6 text-lg font-medium text-light mb-8">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block py-2 transition-all duration-300 ${
                        pathname === item.href
                          ? "text-accent border-b-2 border-accent"
                          : "hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
