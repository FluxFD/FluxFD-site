import PropTypes from "prop-types";

// Card Component

const Card = ({ imageUrl, logoUrl, onClicked }) => {
  return (
    <div className="relative group min-w-64 h-80 overflow-hidden rounded-lg shadow-lg">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      </div>

      {/* Centered Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={logoUrl} alt="Logo" className="w-24 h-24 object-contain" />
      </div>

      {/* Hover Effect with View Button */}
      <div className="absolute mb-2 inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
        <button onClick={() => onClicked()} className="px-6 py-2 w-[90%] border-2 rounded-sm border-slate-500 text-white font-semibold transform hover:scale-105 transition-transform hover:border-slate-400">
          View project
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  onClicked: PropTypes.func,
};

export default Card;
