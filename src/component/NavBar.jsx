import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import letterB from "../assets/letter-b.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fade-in on load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Scroll listener (with cleanup)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Blur + dark overlay behind the mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Top nav bar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={letterB} alt="B" width={30} />
          <p className="text-2xl sm:text-3xl text-[#777] font-semibold">biru</p>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            className={({ isActive }) =>
              `py-1 px-3 rounded transition ${
                isActive
                  ? "bg-blue-700 text-white"
                  : "text-blue-700 hover:bg-slate-100"
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `py-1 px-3 rounded transition ${
                isActive
                  ? "bg-blue-700 text-white"
                  : "text-blue-700 hover:bg-slate-100"
              }`
            }
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `py-1 px-3 rounded transition ${
                isActive
                  ? "bg-blue-700 text-white"
                  : "text-blue-700 hover:bg-slate-100"
              }`
            }
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `py-1 px-3 rounded transition ${
                isActive
                  ? "bg-blue-700 text-white"
                  : "text-blue-700 hover:bg-slate-100"
              }`
            }
            to="/contact"
          >
            Contact Us
          </NavLink>

          <button
            className="py-2 px-4 bg-blue-700 hover:bg-blue-600 rounded-lg text-white text-sm font-medium transition"
            onClick={() => navigate("/get-started")}
          >
            Get Started
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-8 rounded bg-slate-300 transition-transform ${
              isMenuOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-8 rounded bg-slate-300 transition-opacity ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-8 rounded bg-slate-300 transition-transform ${
              isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>

        <div
          className={`md:hidden fixed top-20 left-1/2 z-50 w-11/12 max-w-sm -translate-x-1/2 rounded-2xl bg-slate-900/90 text-white shadow-xl border border-white/5 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        >
          <div className="flex flex-col py-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="px-6 py-3 text-sm font-medium hover:bg-white/10 text-left"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="px-6 py-3 text-sm font-medium hover:bg-white/10 text-left"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className="px-6 py-3 text-sm font-medium hover:bg-white/10 text-left"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="px-6 py-3 text-sm font-medium hover:bg-white/10 text-left"
            >
              Contact Us
            </Link>

            <button
              onClick={() => {
                closeMenu();
                navigate("/get-started");
              }}
              className="mt-2 mx-6 mb-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
