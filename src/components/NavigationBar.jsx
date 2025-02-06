import React, { useState } from "react";
import logo from "../../public/images/logo.svg";
import "./animations.css";

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
    <div className="bg-[#01132e] h-20 border-b border-[#ffffff33]">
      <div className="container mx-auto flex justify-between items-center px-6 h-full">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="h-12" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.subItems && setIsDropdownOpen(true)}
                onMouseLeave={() => item.subItems && setIsDropdownOpen(false)}
              >
                <a href={item.link} className="text-white flex items-center gap-1">
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.subItems && isDropdownOpen && (
                  <div className="absolute top-full left-0 w-48 bg-[#0A1A40] text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all">
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
          <div>
            <button className="px-4 py-2 border border-[#f5f5f5] text-white rounded-full hover:bg-[#FF6347]">
              Hire Developers
            </button>
            <button className="ml-4 px-4 py-2 bg-[#FF6347] text-white rounded-full hover:bg-[#C84F33]">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white text-2xl">
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`sm:hidden fixed inset-0 bg-[#01132e] z-50 transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0 flip-page-open" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <ul className="space-y-0">
            {navItems.map((item) => (
              <li key={item.name} className="text-white">
                <a
                  href={item.link}
                  className="flex justify-between items-center py-4 border-b border-[#FF6347] opacity-40"
                >
                  {item.name}
                  {item.hasArrow && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  )}
                </a>
                {item.subItems && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name}>
                        <a href={subItem.link} className="text-gray-300 block py-2">
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-4">
            <button className="w-full py-3 border border-white text-white rounded-full bg-transparent">
              Hire Developers
            </button>
            <button className="w-full py-3 bg-[#FF6347] text-white rounded-full">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
