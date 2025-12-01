import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import letterB from "../assets/letter-b.png";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div
      className={`fixed top-0 left-0 w-full z-5000 flex justify-between items-center p-6 text-white transition duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${isScrolled ? "bg-black/90" : "bg-transparent"}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={letterB} alt="B" width={30} />
        <p className="text-3xl">biru</p>
      </div>

      {/* Desktop Links */}
      <nav className="hidden md:flex items-center gap-6">
        <Link className="py-1 px-2 hover:bg-[rgb(60,60,148)] rounded transition" to="/">Home</Link>
        <Link className="py-1 px-2 hover:bg-[rgb(60,60,148)] rounded transition" to="/about">About Us</Link>
        <Link className="py-1 px-2 hover:bg-[rgb(60,60,148)] rounded transition" to="/services">Services</Link>
        <Link className="py-1 px-2 hover:bg-[rgb(60,60,148)] rounded transition" to="/contact">Contact Us</Link>

        <button className="p-2 bg-blue-700 hover:bg-blue-600 rounded transition">
          Get Started
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen opacity-90" : "max-h-0 opacity-0"
        } absolute top-20 left-1/2 -translate-x-1/2 w-10/12 bg-black/40 backdrop-blur-xl rounded-2xl text-center transition-all duration-700 md:hidden overflow-hidden`}
      >
        <Link className="block px-4 py-3 text-sm" to="/">Home</Link>
        <Link className="block px-4 py-3 text-sm" to="/about">About</Link>
        <Link className="block px-4 py-3 text-sm" to="/services">Services</Link>
        <Link className="block px-4 py-3 text-sm" to="/contact">Contact Us</Link>
      </div>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
        <div className="flex flex-col gap-1">
          <div className="w-8 h-1 bg-white"></div>
          <div className="w-8 h-1 bg-white"></div>
          <div className="w-8 h-1 bg-white"></div>
        </div>
      </button>
    </div>
  );
};

export default NavBar;
