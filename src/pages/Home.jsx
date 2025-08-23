import Hero from "../component/HomeHero";
import HomeCard from "../component/HomeCard";
import laptop from "../assets/com-laptop-code-svgrepo-com (1).svg"
import cloud from "../assets/cloud-computing-cloud-svgrepo-com.svg"
import security from "../assets/internet-security-computer-svgrepo-com.svg";
import waveform from "../assets/logo-audiobus-svgrepo-com.svg"
import cubase from "../assets/logo-cubase-svgrepo-com.svg"
import flstudio from "../assets/logo-fl-svgrepo-com.svg"
import reason from "../assets/logo-reason-svgrepo-com.svg"
import reddit from "../assets/logo-reddit-svgrepo-com.svg"
import Platforms from "../component/HomePlatforms";
import lastMan from "../assets/yooyoyoy.png"
import checkMark from "../assets/checkmark-circle-svgrepo-com.svg"
import HomeFooter from "../component/HomeFooter";

const Home = () => {
  return (
    <div className="w-full h-auto relative">
      <Hero />

      <section className="home-content-container">
        <div className="-mt-12 flex flex-col md:flex-row gap-6 pr-10 pl-10 justify-center items-center">

          <HomeCard
            title="Software Services"
            image={laptop}
          />

          <HomeCard 
            title="Cloud Computing"
            image= {cloud}
          />

          <HomeCard
            title={"Cyber Security"}
            image={security}
          />
        </div>

        <h1 className="text-center text-3xl mt-15">Join our 30,000 happy customers</h1>

      </section>


      <section className="home-platform-container">

        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-16 mt-15 text-center justify-center text-2xl">
          <Platforms name="Waveform" image={waveform} />
          <Platforms name="Cubase" image={cubase} />
          <Platforms name="FL Studio" image={flstudio} />
          <Platforms name="Reason" image={reason} />
          <Platforms name="Reddit" image={reddit} />
        </div>

      </section>

      <section className="last-section p-8 flex items-center gap-2 mt-20 mb-20 justify-center md:justify-between flex-wrap">
        <div className="left w-130 p-5 rounded-2xl shadow-lg shadow-gray-800/80 hover:scale-105 transition-transform duration-700 ease-in-out">
          <h1 className="text-2xl md:text-4xl md:leading-relaxed mb-5 ">Let us do work, <br /> so you can focus on <br /> what matters</h1>
          <p className="md:py-4">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Perferendis vitae explicabo eveniet fugiat impedit rerum!</p>

          <button className="w-55 text-white mt-5 p-3.5 bg-blue-900 hover:bg-blue-600 transition duration-300 cursor-pointer">Learn more</button>
        </div> 

        <div>
          <img src={lastMan} alt="" width={280} className="w-45 md:w-70"/>
        </div>

        <div className="flex flex-col column gap-4">
          <HomeFooter image={checkMark}/>
          <HomeFooter image={checkMark}/>
          <HomeFooter image={checkMark}/>
        </div>
      </section>




    </div>
  );
};

export default Home;
