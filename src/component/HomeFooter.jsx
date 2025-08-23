const HomeFooter = ({image}) => {
  return (
    <div>
      <div className="flex items-center gap-4 shadow-lg shadow-gray-800/20 p-3 rounded-2xl mb-5 hover:scale-108 transition-transform duration-700 ease-in-out">
        <img src={image} alt="" width={45}/>
        <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Minus, blanditiis itaque <br /> at sed corrupti id!</p>
      </div>
    </div>
  )
}

export default HomeFooter