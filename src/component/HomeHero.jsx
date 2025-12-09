import NavBar from "./NavBar";
import bgVideo from "../assets/bg1.mp4";
import homeMan from "../assets/Studio_portrait_of_young_man_standing_holding_laptop_and_looking_at_camera_with_happy_smile___Premium.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative text-white min-h-screen flex flex-col justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <NavBar />

      <div className="flex flex-col md:flex-row p-5 justify-between items-center gap-10 mt-20">
        <div
          className={`transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl text-blue-400 mb-2">Welcome to Biru</h2>

          <p className="text-4xl md:text-6xl font-bold leading-tight">
            We solve business <br />
            problems with <br />
            technology
          </p>

          <p className="text-sm md:text-xl mt-4 max-w-md">
            Our performance is your success. Our passion is motivation. Our
            expertise is unmatched. We get you more.
          </p>

          <div className="flex flex-col md:flex-row gap-3 mt-6">
            <Link
              to="/get-started"
              className="border p-2 w-40 md:w-60 hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/case-study"
              className="border p-2 w-40 md:w-60 hover:bg-blue-700 transition"
            >
              View Case Study
            </Link>
          </div>
        </div>

        <div className={`relative ${`transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black/40 rounded-3xl"></div>
          <img
            src={homeMan}
            alt="Man"
            className="relative z-10 w-65 md:w-100 drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
