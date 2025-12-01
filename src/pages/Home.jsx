import Hero from "../component/HomeHero";
import HomeCard from "../component/HomeCard";
import Platforms from "../component/HomePlatforms";
import HomeFooter from "../component/HomeFooter";

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

const Home = () => {
  return (
    <div className="w-full h-auto">
      <Hero />

      <section className="mt-10 flex flex-col md:flex-row gap-6 px-10 justify-center items-center">
        <HomeCard title="Software Services" image={laptop} />
        <HomeCard title="Cloud Computing" image={cloud} />
        <HomeCard title="Cyber Security" image={security} />
      </section>

      <h1 className="text-center text-3xl mt-16">
        Join our 30,000 happy customers
      </h1>

      <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-14 justify-center text-2xl">
        <Platforms name="Waveform" image={waveform} />
        <Platforms name="Cubase" image={cubase} />
        <Platforms name="FL Studio" image={flstudio} />
        <Platforms name="Reason" image={reason} />
        <Platforms name="Reddit" image={reddit} />
      </section>

      <section className="p-8 flex flex-wrap items-center gap-6 mt-20 mb-20 justify-center md:justify-between">
        <div className="w-80 md:w-96 p-5 rounded-2xl shadow-lg shadow-gray-800/80 hover:scale-105 transition-transform duration-700">
          <h1 className="text-3xl md:text-4xl mb-5 leading-tight">
            Let us do work,
            <br /> so you can focus on
            <br /> what matters
          </h1>

          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            vitae explicabo eveniet fugiat impedit rerum!
          </p>

          <button className="w-48 text-white mt-5 p-3 bg-blue-900 hover:bg-blue-600 transition">
            Learn more
          </button>
        </div>

        <img src={lastMan} alt="" className="w-48 md:w-64" />

        <div className="flex flex-col gap-4">
          <HomeFooter image={checkMark} />
          <HomeFooter image={checkMark} />
          <HomeFooter image={checkMark} />
        </div>
      </section>
    </div>
  );
};

export default Home;
