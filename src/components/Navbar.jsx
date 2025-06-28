import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaTint, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <nav className="bg-black dark:bg-zinc-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-red-400">Home</Link>
          <Link to="/register" className="hover:text-red-400">Donor</Link>
          <Link to="/impact" className="hover:text-red-400">About Us</Link>
          <Link to="/article" className="hover:text-red-400">Articles</Link>
          <Link to="/info" className="hover:text-red-400">Donation Info</Link>
          <Link to="/contact" className="hover:text-red-400">Contact</Link>
        </div>

       
        <Link to="/" onClick={closeMenu} className="flex items-center text-2xl font-bold tracking-wide">
          <span className="mr-2">LifeFlow</span>
          <FaTint className="text-red-500" />
        </Link>

    
        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={toggleTheme} className="text-xl" aria-label="Toggle Dark Mode">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-300" />}
          </button>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-lg bg-zinc-900 text-white">
          <Link to="/" onClick={closeMenu} className="block hover:text-red-400">Home</Link>
          <Link to="/register" onClick={closeMenu} className="block hover:text-red-400">Donor</Link>
          <Link to="/impact" onClick={closeMenu} className="block hover:text-red-400">About Us</Link>
          <Link to="/article" onClick={closeMenu} className="block hover:text-red-400">Articles</Link>
          <Link to="/info" onClick={closeMenu} className="block hover:text-red-400">Donation Info</Link>
          <Link to="/contact" onClick={closeMenu} className="block hover:text-red-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
