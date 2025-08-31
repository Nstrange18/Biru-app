import { Link } from "react-router-dom"
import letterB from "../assets/letter-b.png"
import { useState, useEffect } from "react"
// import { Icon } from "react-router-dom"
import "../styles/Navbar.css"

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300);

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`flex justify-between mb-15 md:flex items-center p-6 bg-transparent text-white transition duration-700 ${ isVisible ? 'opacity-100' : 'opacity-0'}`}>

      <div className="flex items-center">
          <img src={letterB} alt="B" width={30}/>
          <p className="text-3xl text-amber-150">biru</p>
      </div>

      <nav className="nav-links hidden md:flex items-center justify-between ml-auto gap-6 ">
        <Link className="text-amber-150 py-1 px-2 rounded-lg hover:bg-[rgb(60,60,148)] transition-colors duration-500 ease-in-out" to="/">Home</Link>
        <Link className="text-amber-150 py-1 px-2 rounded-lg hover:bg-[rgb(60,60,148)] transition-colors duration-500 ease-in-out" to="about">About Us</Link>
        <Link className="text-amber-150 py-1 px-2 rounded-lg hover:bg-[rgb(60,60,148)] transition-colors duration-500 ease-in-out" to="services">Services</Link>
        <Link className="text-amber-150 py-1 px-2 rounded-lg hover:bg-[rgb(60,60,148)] transition-colors duration-500 ease-in-out" to="contact">Contact Us</Link>

        <div className="get-started">
            <button className="p-2 bg-[rgb(69,69,211)] hover:bg-gradient-to-r from-[#193e9b] via-[#1d5783] to-[#246f8f] transition-colors duration-300 ease-in-out  rounded-sm ">Get Started</button>
        </div>        
      </nav>

      <div className={`${isMenuOpen ? "max-h-screen opacity-90" : "max-h-0 opacity-0"} rounded-2xl opacity-95 absolute backdrop-blur-3xl w-9/10 top-19 text-center transition-all duration-700 ease-in-out md:hidden overflow-hidden`} >
        <Link to="/" className="block px-4 py-3 mb-0.5 text-sm bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-700 ">Home</Link>
        <Link to="about" className="block px-4 py-3 mb-0.5 text-sm bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-700 ">About</Link>
        <Link to="services" className="block px-4 py-3 mb-0.5 text-sm bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-700 ">Services</Link>
        <Link to="contact" className="block px-4 py-3 mb-0.5 text-sm bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-700">Contact us</Link>
      </div>

      <button onClick={() => {
        setIsMenuOpen(!isMenuOpen)
      }} className={`focus:outline-none`}>
        <div className={`hamburger-menu ${isMenuOpen ? "rotate-180" : "rotate-0"} flex flex-col gap-1 cursor-pointer z-19 md:hidden`}>
          <div className="w-8 h-1 text-[28px] cursor-pointer bg-white"></div>
          <div className="w-8 h-1 text-[28px] cursor-pointer bg-white"></div>
          <div className="w-8 h-1 text-[28px] cursor-pointer bg-white"></div>
          {/* <FontAwesomeIcon icon={byPrefixAndName.fas['bars']} /> */}
        </div>
      </button>
  </div>
  )
}

export default NavBar