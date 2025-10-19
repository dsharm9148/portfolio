"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | string>(null);
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (pathname !== "/") {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      const travelSection = document.querySelector("#travel-section");
      if (travelSection) {
        const travelTop = travelSection.getBoundingClientRect().top;
        setScrolled(travelTop <= 0);
      } else {
        setScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const continentsAndCountries = [
    {
      continent: "North America",
      countries: [
        { name: "USA", slug: "usa" },
        { name: "Canada", slug: "canada" },
      ],
    },
    {
      continent: "Europe",
      countries: [
        { name: "Italy", slug: "italy" },
        { name: "Andorra", slug: "andorra" },
        { name: "Spain", slug: "spain" },
        { name: "Switzerland", slug: "switzerland" },
        { name: "Greece", slug: "greece" },
        { name: "Germany", slug: "germany" },
        { name: "Portugal", slug: "portugal" },
        { name: "Scotland", slug: "scotland" },
        { name: "Ireland", slug: "ireland" },
      ],
    },
    {
      continent: "Oceania",
      countries: [
        { name: "New Zealand", slug: "nz" },
        { name: "Australia", slug: "australia" },
      ],
    },
    {
      continent: "Asia",
      countries: [
        { name: "Singapore", slug: "singapore" },
        { name: "Japan", slug: "japan" },
      ],
    },
    {
      continent: "Africa",
      countries: [{ name: "Morocco", slug: "morocco" }],
    },
  ];

  const blogSections = [
    { title: "Personal Blog", href: "/blog" },
    { title: "Technique", href: "/technique" },
  ];

  const resumeSections = [
    { title: "Education", href: "/resume#education" },
    { title: "Work Experience", href: "/resume#work" },
    { title: "Skills", href: "/resume#skills" },
    { title: "Research", href: "/resume#research" },
    { title: "Projects", href: "/resume#projects" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl sm:text-2xl font-serif font-medium transition ${
            scrolled
              ? "text-black hover:text-gray-600"
              : "text-white hover:text-gray-300"
          }`}
        >
          Diya Sharma
        </Link>

        {/* Hamburger menu button */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop nav links */}
        <div className="hidden sm:flex space-x-12 justify-center flex-1 font-serif font-medium uppercase text-sm sm:text-base">
          {/* ABOUT ME */}
          <div className="relative group">
            <Link
              href="/resume"
              className={`transition cursor-pointer ${
                scrolled ? "hover:text-gray-600" : "hover:text-gray-300"
              }`}
            >
              ABOUT ME
            </Link>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-black border rounded shadow-lg p-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 w-48 text-sm sm:text-base">
              <ul className="space-y-2">
                {resumeSections.map((section, idx) => (
                  <li key={idx}>
                    <Link
                      href={section.href}
                      className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-gray-900 transition-colors duration-300"
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PLACES */}
          <div className="relative group">
            <Link
              href="/travel"
              className={`transition cursor-pointer ${
                scrolled ? "hover:text-gray-600" : "hover:text-gray-300"
              }`}
            >
              PLACES
            </Link>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-black border rounded shadow-lg p-6 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 w-max text-sm sm:text-base">
              <div className="flex gap-12">
                {continentsAndCountries.map((group, idx) => (
                  <div
                    key={idx}
                    className={`relative ${
                      idx !== continentsAndCountries.length - 1
                        ? "pr-6 border-r border-gray-300"
                        : ""
                    }`}
                  >
                    <h3 className="font-semibold mb-2 text-left">
                      {group.continent}
                    </h3>
                    <ul className="space-y-1 text-left">
                      {group.countries.map((country, cIdx) => (
                        <li key={cIdx}>
                          <Link
                            href={`/travel/${country.slug}`}
                            className="block px-2 py-1 rounded hover:bg-gray-300 hover:text-gray-900 transition-colors duration-300"
                          >
                            {country.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BLOG */}
          <div className="relative group">
            <Link
              href="/both_blog"
              className={`transition cursor-pointer ${
                scrolled ? "hover:text-gray-600" : "hover:text-gray-300"
              }`}
            >
              BLOG
            </Link>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-black border rounded shadow-lg p-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 w-48 text-sm sm:text-base">
              <ul className="space-y-2">
                {blogSections.map((section, idx) => (
                  <li key={idx}>
                    <Link
                      href={section.href}
                      className="block px-3 py-2 rounded hover:bg-gray-300 hover:text-gray-900 transition-colors duration-300"
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Socials */}
        <div className="hidden sm:flex flex-row space-x-3 text-xs sm:text-sm">
          <a
            href="https://www.linkedin.com/in/diyasharma5"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-2 py-1 border rounded text-xs font-medium uppercase transition ${
              scrolled
                ? "border-black text-black hover:text-gray-600 hover:border-gray-600"
                : "border-white text-white hover:text-gray-300 hover:border-gray-300"
            }`}
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/dsharm55"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-2 py-1 border rounded text-xs font-medium uppercase transition ${
              scrolled
                ? "border-black text-black hover:text-gray-600 hover:border-gray-600"
                : "border-white text-white hover:text-gray-300 hover:border-gray-300"
            }`}
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white text-black w-full shadow-md">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            {/* ABOUT ME */}
            <li>
              <button
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-200 transition-colors font-medium"
                onClick={() =>
                  setOpenDropdown(openDropdown === "about" ? null : "about")
                }
              >
                ABOUT ME
              </button>
              {openDropdown === "about" && (
                <ul className="pl-4 mt-2 space-y-1">
                  {resumeSections.map((section, idx) => (
                    <li key={idx}>
                      <Link
                        href={section.href}
                        className="block px-3 py-2 rounded hover:bg-gray-200 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {section.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* PLACES */}
            <li>
              <button
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-200 transition-colors font-medium"
                onClick={() =>
                  setOpenDropdown(openDropdown === "places" ? null : "places")
                }
              >
                PLACES
              </button>
              {openDropdown === "places" && (
                <ul className="pl-4 mt-2 space-y-1">
                  {continentsAndCountries.map((group, idx) => (
                    <li key={idx}>
                      <h3 className="font-semibold mt-2">{group.continent}</h3>
                      <ul className="pl-2 space-y-1">
                        {group.countries.map((country, cIdx) => (
                          <li key={cIdx}>
                            <Link
                              href={`/travel/${country.slug}`}
                              className="block px-3 py-2 rounded hover:bg-gray-200 transition-colors"
                              onClick={() => setMenuOpen(false)}
                            >
                              {country.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* BLOG */}
            <li>
              <button
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-200 transition-colors font-medium"
                onClick={() =>
                  setOpenDropdown(openDropdown === "blog" ? null : "blog")
                }
              >
                BLOG
              </button>
              {openDropdown === "blog" && (
                <ul className="pl-4 mt-2 space-y-1">
                  {blogSections.map((section, idx) => (
                    <li key={idx}>
                      <Link
                        href={section.href}
                        className="block px-3 py-2 rounded hover:bg-gray-200 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {section.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile Socials */}
            <div className="flex flex-row space-x-2 mt-4">
              <a
                href="https://www.linkedin.com/in/diyasharma5"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 border rounded text-sm font-medium uppercase hover:bg-gray-200 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/dsharm55"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 border rounded text-sm font-medium uppercase hover:bg-gray-200 transition-colors"
              >
                Instagram
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
