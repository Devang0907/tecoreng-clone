import React, { useState } from "react";
import logo from "../../public/images/logo.svg";

function NavigationBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <div className="">
      <div className="bg-[#01132e] h-25 flex justify-between border-b-[1px] border-b-[#ffffff33]">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="p-8" />
        </div>

        {/* Navigation */}
        <div className="flex">
          <ul className="flex p-5">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative text-lg pt-5 h-20 px-8 group"
                onMouseEnter={() => item.subItems && setIsDropdownOpen(true)}
                onMouseLeave={() => item.subItems && setIsDropdownOpen(false)}
              >
                <a
                  href={item.link}
                  className="text-white no-underline flex items-center gap-1 relative"
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

                {/* Center-to-Edges Transition Effect */}
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#fd7e14] transform scale-x-0 origin-center transition-transform duration-600 group-hover:scale-x-100"></span>

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

          {/* Buttons */}
          <div className="pt-8">
            <button className="px-4.5 py-2 bg-transparent border-1 border-[#f5f5f5] text-white rounded-full hover:bg-gradient-to-r hover:from-[#FFA07A] hover:to-[#FF6347] hover:border-transparent">
              Hire Developers
            </button>
            <button className="mx-4 px-4 py-2.5 bg-gradient-to-r from-[#FFA07A] to-[#FF6347] text-white rounded-full hover:from-[#E25F3C] hover:to-[#C84F33]">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default NavigationBar;
