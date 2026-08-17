import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/Products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ================= DESKTOP / TABLET HEADER ================= */}
          <div className="relative flex items-center justify-between h-[76px] sm:h-[80px]">

            {/* ================= LOGO ================= */}
            <NavLink
              to="/"
              aria-label="Burgos Pharma Home"
              className="
                flex
                items-center
                justify-start
                w-[150px]
                sm:w-[180px]
                h-full
                shrink-0
              "
            >
              <img
                src="/Logo1.jpg"
                alt="Burgos Pharma"
                className="
                  w-auto
                  h-[52px]
                  sm:h-[62px]
                  max-w-[150px]
                  sm:max-w-[175px]
                  object-contain
                  object-left
                  block
                "
              />
            </NavLink>

            {/* ================= DESKTOP NAVIGATION ================= */}
            <div
              className="
                hidden
                md:flex
                absolute
                left-1/2
                -translate-x-1/2
                items-center
              "
            >
              <ul className="flex items-center gap-7 lg:gap-10">

                {navLinks.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `
                        relative
                        flex
                        items-center
                        justify-center
                        h-[76px]
                        sm:h-[80px]
                        px-1
                        text-[15px]
                        lg:text-[16px]
                        font-medium
                        whitespace-nowrap
                        transition-colors
                        duration-200

                        ${
                          isActive
                            ? "text-[#00A859]"
                            : "text-[#1F4F96] hover:text-[#00A859]"
                        }

                        after:absolute
                        after:left-0
                        after:right-0
                        after:bottom-[17px]
                        after:h-[2px]
                        after:rounded-full
                        after:bg-[#00A859]
                        after:transition-transform
                        after:duration-200

                        ${
                          isActive
                            ? "after:scale-x-100"
                            : "after:scale-x-0 hover:after:scale-x-100"
                        }
                        `
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}

              </ul>
            </div>

            {/* ================= DESKTOP CTA ================= */}
            <div className="hidden md:flex items-center justify-end w-[160px] shrink-0">

              <NavLink
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  min-w-[135px]
                  h-[42px]
                  px-5
                  bg-[#1F4F96]
                  text-white
                  text-[14px]
                  lg:text-[15px]
                  font-semibold
                  rounded-full
                  whitespace-nowrap
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-[#00A859]
                  hover:shadow-md
                  hover:-translate-y-[1px]
                "
              >
                Connect Now
              </NavLink>

            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close Menu" : "Open Menu"}
              aria-expanded={open}
              className="
                md:hidden
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-lg
                text-[#1F4F96]
                hover:bg-gray-50
                transition-colors
                duration-200
              "
            >
              {open ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>

          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            md:hidden
            overflow-hidden
            bg-white
            border-t
            border-gray-100
            transition-all
            duration-300
            ease-in-out

            ${
              open
                ? "max-h-[450px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4">

            <ul className="flex flex-col">

              {navLinks.map((item) => (
                <li
                  key={item.name}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `
                      flex
                      items-center
                      justify-between
                      min-h-[52px]
                      text-[16px]
                      font-medium
                      transition-colors
                      duration-200

                      ${
                        isActive
                          ? "text-[#00A859] font-semibold"
                          : "text-[#1F4F96] hover:text-[#00A859]"
                      }
                      `
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

            </ul>

            {/* ================= MOBILE CTA ================= */}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                justify-center
                w-full
                h-[46px]
                mt-5
                bg-[#1F4F96]
                text-white
                text-[15px]
                font-semibold
                rounded-full
                shadow-sm
                transition-all
                duration-200
                hover:bg-[#00A859]
              "
            >
              Connect Now
            </NavLink>

          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;