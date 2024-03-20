import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";

const Navbar = () => {
  //state for toggle menu bar
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="md:h-[96px]">
      <header className="md:flex md:justify-between max-w-[1440px] mx-auto md:mx-[40px] lg:mx-[80px] md:h-[48px] md:items-center sticky flex justify-between">
        <h1 className="text-[#000000] md:text-[32px] font-extrabold">
          Event
          <span
            className="text-[5A01CB]"
            style={{
              background:
                "linear-gradient(226deg, #5A01CB 40.75%, #FE8900 95.4%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            360
          </span>
        </h1>

        {/* Hamburger menu icon */}
        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {/* Navbar links */}
        <nav className={`md:flex ${menuOpen ? "block" : "hidden"}`}>
          <ul className="text-[16px] font-medium md:flex justify-center items-center py-[12px] gap-[16px]">
            <motion.li
              whileHover={{ scale: 1.1, transition: easeInOut }}
              whileTap={{ scale: 0.9, transition: easeInOut }}
            >
              <NavLink to="/" className="px-[8px]">
                Home
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, transition: easeInOut }}
              whileTap={{ scale: 0.9, transition: easeInOut }}
            >
              <NavLink to="/admin" className="px-[8px]">
                Dashboard
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, transition: easeInOut }}
              whileTap={{ scale: 0.9, transition: easeInOut }}
            >
              <NavLink to="/about" className="px-[8px]">
                About
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, transition: easeInOut }}
              whileTap={{ scale: 0.9, transition: easeInOut }}
            >
              <NavLink to="/contact-us" className="px-[8px]">
                Contact
              </NavLink>
            </motion.li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
