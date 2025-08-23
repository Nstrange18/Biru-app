import NavBar from './NavBar'
import bgVideo from "../assets/bg1.mp4";
import homeMan from "../assets/Studio_portrait_of_young_man_standing_holding_laptop_and_looking_at_camera_with_happy_smile___Premium.png"
import { useState, useEffect } from 'react';


const Hero = () => {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500);

    return () => clearTimeout(timer)
  }, [])


  return (
    <div className="text-white relative h-screen">
      <video className="w-full h-full absolute -z-1 object-cover" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <NavBar />

      <div className="flex flex-col md:flex-row p-5 justify-between items-center mb-8">

        <div className={`pl-15 md:pl-0 -mt-30 transition duration-800 ${ isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl text-[rgb(75,75,201)] md:text-left mb-2 mt-10">Welcome to Biru</h2>
          <p className="text-lg md:text-6xl md:text-left">We solve business <br />problems with <br />technology</p>
          
          <p className="text-sm md:text-xl mb-4 w-87 mt-4">
            Our performance is your success. Our passion is <br /> motivation. Our
            expertise is unmatched. We get you <br /> more.
          </p>

          <div className="flex-col flex md:flex-row gap-2 mt-6">
            <button className="border hover:bg-[rgb(60,60,148)] transition-colors duration-500 ease-in-out p-2 w-40  mb-2 md:mb-0 md:w-60">Get Started</button>
            <button className="border hover:bg-[rgb(60,60,148)] transition-colors duration-500 ease-in-out p-2 w-40 mb-2 md:mb-0 md:w-60">View Case Study</button>
          </div>
        </div>

        <div className={`transition duration-1000 ${ isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img src={homeMan} alt="Man" height={"auto"} className='w-65 md:w-100'/>
        </div>
        
      </div>
    </div>
  )
}

export default Hero