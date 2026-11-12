import PropTypes from "prop-types";

// Card Component
const Card = ({
  imageUrl,
  logoUrl,
  projectTitle,
  projectDescription,
  developers,
  onClicked,
}) => {
  return (
    <div className="group w-full h-[800px] overflow-hidden rounded-3xl shadow-lg relative">
      <div className="w-full h-full">
        <img
          src={imageUrl}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col">
        <img
          src={logoUrl}
          alt="Logo"
          className="w-24 h-24 object-contain mb-8"
        />

        <div className="flex-grow">
          <h3 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {projectTitle}
          </h3>
          <p className="text-white/80 font-semibold w-full sm:w-full lg:w-full xl:w-1/2  text-xl sm:text-2xl lg:text-3xl">
            {" "}
            {projectDescription}
          </p>
        </div>
        <div className="flex items-center gap-4 my-8">
          {developers.map((dev, index) => (
            <div key={index} className="flex items-center">
              <img
                src={dev.avatar}
                alt={dev.name}
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white"
              />
              <div className="ml-4">
                <span className="text-white text-lg sm:text-xl lg:text-2xl block">
                  {dev.name}
                </span>
                <span className="text-white/70 text-base sm:text-lg lg:text-xl block">
                  {dev.position}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => onClicked()}
          className="w-[90%] mx-auto px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 border-2 rounded-sm border-slate-500 text-white text-xl sm:text-2xl lg:text-3xl font-semibold transform hover:scale-105 transition-transform hover:border-slate-400"
        >
          View project
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  onClicked: PropTypes.func,
  developers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      position: PropTypes.string,
    })
  ),
};

export default Card;
