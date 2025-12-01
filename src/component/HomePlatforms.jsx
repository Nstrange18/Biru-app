const Platforms = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={image} alt={name} width={50} />
      <h1>{name}</h1>
    </div>
  );
};

export default Platforms;
