import React, { useState } from "react";
import logo from "../../public/images/logo.svg";
import './animations.css'; // Make sure you have this CSS file in place

function NavigationBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Services", link: "/services" },
    {
      name: "About Us",
      link: "/about",
      hasArrow: true,
      subItems: [
        { name: "Who we are", link: "/about/who-we-are" },
        { name: "Industries we serve", link: "/about/industries" },
      ],
    },
    { name: "Career", link: "/careers" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <div className="w-[100%] h-[100px]">
      <div className="fixed z-40 w-[100%]">
        <div className="bg-[#01132e] h-25 flex justify-between items-center border-b-[1px] border-b-[#ffffff33]">
          {/* Logo */}
          <div>
            <img src={logo} alt="logo" className="p-8" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex">
            <ul className="flex p-5">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative text-lg pt-7 h-20 px-8 group"
                  onMouseEnter={() => item.subItems && setIsDropdownOpen(true)}
                  onMouseLeave={() => item.subItems && setIsDropdownOpen(false)}
                >
                  <a
                    href={item.link}
                    className="text-white no-underline flex items-center gap-1"
                  >
                    {item.name}
                    {item.hasArrow && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>

                  {/* Underline Effect */}
                  <span className="absolute left-0 bottom-[-10px] w-full h-[3px] bg-[#FF6347] transform scale-x-0 origin-center transition-transform duration-600 group-hover:scale-x-100"></span>



                  {/* Dropdown Menu */}
                  {item.subItems && isDropdownOpen && (
                    <div className="absolute top-full left-0 w-48 bg-[#0A1A40] text-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-2">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.link}
                          className="block px-5 py-3 hover:bg-[#152347] transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="pt-10">
              <button className="px-4.5 py-2 bg-transparent border border-[#f5f5f5] text-white rounded-full hover:bg-gradient-to-r hover:from-[#FFA07A] hover:to-[#FF6347] hover:border-transparent">
                Hire Developers
              </button>
              <button className="mx-4 px-4 py-2.5 bg-gradient-to-r from-[#FFA07A] to-[#FF6347] text-white rounded-full hover:from-[#E25F3C] hover:to-[#C84F33]">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white text-2xl p-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>

            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`mobile-menu-wrapper w-[100%] sm:hidden fixed inset-0 bg-[#112542] z-50 transition-transform transform ${isMobileMenuOpen ? "translate-x-0 flip-page-open" : "translate-x-full flip-page-close"
            }`}
        >
          <div className="p-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-4 text-white text-2xl"
            >
              {/* Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul className="mt-12 space-y-4">
              {navItems.map((item) => (
                <li key={item.name} className="text-white">
                  <div className="flex justify-between items-center py-2 border-b border-[#FF6347]">
                    <a href={item.link} className="text-xl">
                      {item.name}
                    </a>
                    {item.hasArrow && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    )}
                  </div>
                  {/* Submenu for Mobile */}
                  {item.subItems && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <a href={subItem.link} className="text-gray-300 block py-1">
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default NavigationBar;
