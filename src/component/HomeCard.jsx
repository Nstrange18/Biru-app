const HomeCard = ({ image, title }) => {
  return (
    <div className="z-50 w-60 md:w-80 text-center bg-white text-black mb-7 rounded-2xl flex flex-col justify-center items-center p-6 shadow-lg shadow-gray-800/50 hover:scale-105 transition-transform duration-500">
      <img src={image} alt="" width={120} />
      <h1 className="text-xl mt-3">{title}</h1>

      <p className="text-gray-500 leading-5 mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Molestiae quis laborum facilis et nulla odio?
      </p>

      <button className="w-40 text-white mt-5 p-2 bg-blue-800 hover:bg-blue-600 transition duration-300 cursor-pointer">
        Learn More
      </button>
    </div>
  );
};

export default HomeCard;
