import { Link } from "react-router-dom"
import letterB from "../assets/letter-b.png"
import { useState, useEffect } from "react"

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false)

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

      <nav className="hidden md:flex items-center justify-between ml-auto gap-6">
        <Link className="text-amber-150 py-1 px-2 rounded-lg hover:bg-[rgb(60,60,148)] transition-colors duration-500 ease-in-out" to="/">Home</Link>
        <Link className="text-amber-150 py-1 px-2 rounded-lg hover:bg-[rgb(60,60,148)] transition-colors duration-500 ease-in-out" to="about">About Us</Link>
        <Link className="text-amber-150 py-1 px-2 rounded-lg hover:bg-[rgb(60,60,148)] transition-colors duration-500 ease-in-out" to="services">Services</Link>
        <Link className="text-amber-150 py-1 px-2 rounded-lg hover:bg-[rgb(60,60,148)] transition-colors duration-500 ease-in-out" to="contact">Contact Us</Link>

        <div class="get-started">
            <button className="p-2 bg-[rgb(69,69,211)] hover:bg-gradient-to-r from-[#193e9b] via-[#1d5783] to-[#246f8f] transition-colors duration-300 ease-in-out  rounded-sm ">Get Started</button>
        </div>        
      </nav>

      <div className="hamburger-menu flex flex-col gap-1 cursor-pointer z-10 md:hidden">
        <div className="w-8 h-1 text-[28px] cursor-pointer bg-white"></div>
        <div className="w-8 h-1 text-[28px] cursor-pointer bg-white"></div>
        <div className="w-8 h-1 text-[28px] cursor-pointer bg-white"></div>
      </div>
  </div>
  )
}

export default NavBar