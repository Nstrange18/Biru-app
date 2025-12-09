import Hero from "../component/HomeHero";
import HomeCard from "../component/HomeCard";

import laptop from "../assets/com-laptop-code-svgrepo-com (1).svg";
import cloud from "../assets/cloud-computing-cloud-svgrepo-com.svg";
import security from "../assets/internet-security-computer-svgrepo-com.svg";

import waveform from "../assets/logo-audiobus-svgrepo-com.svg";
import cubase from "../assets/logo-cubase-svgrepo-com.svg";
import flstudio from "../assets/logo-fl-svgrepo-com.svg";
import reason from "../assets/logo-reason-svgrepo-com.svg";
import reddit from "../assets/logo-reddit-svgrepo-com.svg";

import lastMan from "../assets/yooyoyoy.png";
import checkMark from "../assets/checkmark-circle-svgrepo-com.svg";

import Platforms from "../component/HomePlatforms";
import HomeFooter from "../component/HomeFooter";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-auto">
      <Hero />

      {/* What We Do */}
      <section className="mt-16 flex flex-col md:flex-row gap-6 px-10 justify-center items-start">
        <HomeCard
          title="Software Development"
          image={laptop}
          description="We design and build fast, scalable websites and web apps using modern frameworks like React and Node.js."
        />

        <HomeCard
          title="Cloud Solutions"
          image={cloud}
          description="We deploy and manage cloud infrastructure designed for performance, reliability and scale."
        />

        <HomeCard
          title="AI Automation"
          image={security}
          description="Automate workflows and enhance productivity with intelligent AI-powered tools built for your business."
        />
      </section>

      {/* Trusted */}
      <h1 className="text-center text-3xl mt-20 font-bold">
        Trusted by creators, startups and growing businesses
      </h1>

      <section className="home-platform-container">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-16 mt-10 text-center justify-center text-2xl">
          <Platforms name="Waveform" image={waveform} />
          <Platforms name="Cubase" image={cubase} />
          <Platforms name="FL Studio" image={flstudio} />
          <Platforms name="Reason" image={reason} />
          <Platforms name="Reddit" image={reddit} />
        </div>
      </section>

      {/* Why Choose Biru */}
      <section className="p-8 flex flex-wrap items-center gap-6 mt-20 mb-20 justify-center md:justify-between">
        <div className="w-80 md:w-96 p-5 rounded-2xl shadow-lg shadow-gray-800/80 hover:scale-105 transition-transform duration-700">
          <h1 className="text-3xl md:text-4xl mb-3 leading-tight">
            Build Faster. <br /> Scale Smarter.
          </h1>

          <p className="py-2 text-gray-600 leading-relaxed">
            Biru helps startups and businesses build modern websites, web apps,
            and AI-powered solutions built for speed, clarity and impact.
          </p>

          <button className="w-48 text-white mt-5 p-3 bg-blue-900 hover:bg-blue-600 transition" onClick={() => navigate("/start-project")}>
            Start a Project
          </button>
        </div>

        <img src={lastMan} alt="" className="w-48 md:w-64" />

        <div className="flex flex-col gap-4">
          <HomeFooter image={checkMark} text="Fast delivery with modern UI/UX" />
          <HomeFooter image={checkMark} text="AI-enhanced automation tools" />
          <HomeFooter image={checkMark} text="Cloud-ready from day one" />
        </div>
      </section>
    </div>
  );
};

export default Home;
