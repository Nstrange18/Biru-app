// import laptop from "../assets/com-laptop-code-svgrepo-com (1).svg"
// import cloud from "../assets/cloud-computing-cloud-svgrepo-com.svg"
// import security from "../assets/internet-security-computer-svgrepo-com.svg";

const HomeCard = ({image, title}) => {
  return (
    <>
      <div className="z-50 w-60 md:w-100 text-center h-auto bg-white text-black mb-7 rounded-2xl flex flex-col justify-center items-center p-6 shadow-lg shadow-gray-800/50 hover:scale-105 transition-transform duration-500">
        <img src={image} alt="" width={140} />
        <h1 className="text-xl">{title}</h1>
        <p className="text-gray-500 leading-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Molestiae quis laborum facilis et nulla odio?
        </p>

        <button className="w-40 text-white mt-5 p-1 bg-blue-800 hover:bg-blue-600 transition duration-300 cursor-pointer">Learn More</button>
      </div>

    </>
  )
}

export default HomeCard