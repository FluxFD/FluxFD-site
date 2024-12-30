import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ProjectDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const [slideDirection, setSlideDirection] = useState("");

  if (!location.state) {
    return <div className="text-center p-8">Project details not found</div>;
  }

  const { title, images, descriptions } = location.state;

  const nextImage = () => {
    setSlideDirection("right");
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSlideDirection("left");
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Fixed Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto p-6">
 

        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          {title}
        </h1>

        {/* Image Slideshow */}
        <div className="relative w-full h-96 mb-8 overflow-hidden rounded-lg">
          <img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className={`w-full h-full object-cover absolute 
              transition-all duration-500 ease-in-out
              ${slideDirection === "right" ? "animate-slideRight" : ""}
              ${slideDirection === "left" ? "animate-slideLeft" : ""}`}
            onAnimationEnd={() => setSlideDirection("")}
          />

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 7L10 12L15 17"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M15 7L10 12L15 17"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>

        {/* Description Bullets */}
        <ul className="space-y-3">
          {descriptions.map((desc, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1.5 text-white">•</span>
              <span className="text-white">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectDetails;
