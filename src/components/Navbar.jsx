import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-blue-400 shadow-sm fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo + Name */}
          <NavLink
            to="/"
            className="flex items-center gap-3 font-semibold text-black"
          >
            {/* Logo */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/Logo1.png"
                alt="Absolute Homeopathy Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Business Name */}
            <span className="text-sm sm:text-base md:text-lg leading-tight max-w-[180px] sm:max-w-xs">
              Dr Neha Choudhary
              <br className="hidden sm:block" />
              <span className="font-normal text-xs sm:text-sm block">
                Skin & Hair Clinic
              </span>
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-black font-medium">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition hover:text-white ${
                      isActive ? "underline underline-offset-8" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="bg-white font-bold text-black px-5 py-2 rounded-full hover:bg-yellow-300 transition"
            >
              Connect Now
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-white px-6 py-4 space-y-4 text-gray-700 font-medium border-t">
          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block transition ${
                    isActive ? "text-blue-500 font-semibold" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block w-full bg-yellow-500 text-white py-2 rounded-full text-center hover:bg-orange-600 transition"
          >
            Connect Now
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;