import { useState } from "react";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const [activeTab, setActiveTab] = useState("web");
  const navigate = useNavigate();
  const tabs = [
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile" },
    { id: "ml", label: "Machine Learning" },
  ];

  const projects = [
    {
      id: 1,
      images: [
        "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg",
        "https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg",
        "https://cdn.explorecams.com/storage/photos/LEFEikw0MR_1600.jpg",
      ],
      title: "Project 1",
      description: "This is a project description",
      developers: [
        {
          name: "John Doe",
          position: "Software Engineer",
          avatar:
            "https://diffco.us/wp-content/uploads/2024/07/David-C-Thompson.webp",
        },
      ],
    },
    {
      id: 2,
      images: [
        "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg",
        "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg",
        "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg",
      ],
      title: "Project 2",
      description: "This is a project description",
    },
    {
      id: 3,
      images: [
        "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg",
        "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg",
        "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg",
      ],
      title: "Project 3",
      description: "This is a project description",
    },
  ];

  const handleProjectClick = (projectId) => {
    const project = projects[projectId - 1];
    navigate("/project-details", {
      state: {
        title: project.title,
        images: project.images,
        descriptions: [project.description],
      },
    });
  };

  const tabContent = {
    web: (
      <div className="animate-fade-in flex justify-evenly flex-wrap gap-6 mx-0 sm:mx-0 md:mx-6 lg:mx-12 xl:mx-16">
        <Card
          projectTitle="Flux 1"
          developers={[
            {
              name: "John Doe",
              position: "Software Engineer",
              avatar:
                "https://diffco.us/wp-content/uploads/2024/07/David-C-Thompson.webp",
            },
            {
              name: "John Doe",
              position: "Software Engineer",
              avatar:
                "https://diffco.us/wp-content/uploads/2024/07/David-C-Thompson.webp",
            },
          ]}
          projectDescription="Flux helped with IoT network infrastructure expansion projects and connectivity device management solutions.Flux helped with IoT network infrastructure expansion projects and connectivity device management solutions."
          imageUrl="https://diffco.us/wp-content/uploads/2024/11/news_0013-2-812x360.png"
          logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
          onClicked={() => handleProjectClick(1)}
        />
        <Card
          developers={[
            {
              name: "John Doe",
              position: "Software Engineer",
              avatar:
                "https://diffco.us/wp-content/uploads/2024/07/David-C-Thompson.webp",
            },
          ]}
          projectTitle="Project 2"
          projectDescription="This is a project description"
          imageUrl="https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg"
          logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
          onClicked={() => handleProjectClick(2)}
        />

        <Card
          developers={[
            {
              name: "John Doe",
              position: "Software Engineer",
              avatar:
                "https://diffco.us/wp-content/uploads/2024/07/David-C-Thompson.webp",
            },
          ]}
          projectTitle="Project 3"
          projectDescription="This is a project description"
          imageUrl="https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg"
          logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
          onClicked={() => handleProjectClick(3)}
        />
      </div>
    ),
    mobile: (
      <div className="animate-fade-in">
        {/* Add your mobile projects content here */}
      </div>
    ),
    ml: (
      <div className="animate-fade-in">
        {/* Add your ML projects content here */}
      </div>
    ),
  };

  return (
    <div className="mx-auto p-6">
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
                       {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-6 px-4 border-b-2 font-medium text-sm sm:text-md md:text-lg lg:text-xl ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-8">{tabContent[activeTab]}</div>
    </div>
  );
};

export default Project;
