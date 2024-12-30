import { useState } from "react";

const footerSections = [
  {
    title: "Our Services",
    items: [
      "Team Augmentation",
      "Mobile Development",
      "Back-end Development",
      "AI Development",
      "Front-end Development",
      "Web Development",
    ],
  },
  {
    title: "Solutions",
    items: [
      "AI-driven Software",
      "Enterprise Development",
      "Custom Development",
      "Healthcare Development",
    ],
  },
  {
    title: "Cases",
    items: [
      "Social Media iOS App",
      "Android App for Fast Delivery",
      "Enterprise SaaS Website",
      "ERP for Real Estate",
      "Computer Vision for ID",
      "See More Cases",
    ],
  },
  {
    title: "Company",
    items: ["Who We Are", "Clients", "Jobs", "Blog", "Contacts"],
  },
];

const Footer = () => {
  const [openSections, setOpenSections] = useState(
    new Array(footerSections.length).fill(false)
  );

  const toggleSection = (index) => {
    const newOpenSections = [...openSections];
    newOpenSections[index] = !newOpenSections[index];
    setOpenSections(newOpenSections);
  };

  return (
    <footer className="bg-white py-12 text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between ">
          {footerSections.map((section, index) => (
            <div key={index} className="w-full lg:w-fit mb-8">
              {" "}
              <div
                className="flex items-center justify-between cursor-pointer md:cursor-default"
                onClick={() => toggleSection(index)}
              >
                <h4 className="font-bold text-3xl mb-9">{section.title}</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lg:hidden ml-2 transition-transform ${
                    openSections[index] ? "rotate-180" : ""
                  }`}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M18 13l-6 6" />
                  <path d="M6 13l6 6" />
                </svg>
              </div>
              <ul
                className={`space-y-8 text-xl overflow-hidden transition-all duration-300 ${
                  !openSections[index]
                    ? "max-h-0 lg:max-h-full"
                    : "max-h-[500px]"
                }`}
              >
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="hover:text-gray-500 cursor-pointer transition-colors duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

               <div className="text-center mt-12">
          <h2 className="text-3xl mb-4">© 2021 FluxFd. All rights reserved.</h2>
          <div className="flex flex-col items-center space-y-2 text-lg">
            <p>Email: contact@fluxfd.com</p>
            <p>123 Tech Street, Silicon Valley, CA 94025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
