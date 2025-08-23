
const Platforms = ({name, image}) => {
  return (
    <>
      <div className="platforms flex column items-center gap-2">
        <img src={image} alt="" width={50}/>
        <h1>{name}</h1>
      </div>
    </>
  )
}

export default Platforms